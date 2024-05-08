import { BOT_FEE, MARKET_FEE } from 'src/consts.ts';
import MockOrder from 'src/core/MockOrder.ts';
import Strategy from 'src/core/Strategy.ts';
import { IBacktestResult } from 'src/types/backtest.types.ts';
import { IKline } from 'src/types/request.types.ts';

export default class BacktestBot {
  strategy: Strategy;
  historicalData: IKline[];
  currentPrice: number;
  basePrice: number;
  dataIndex: number;
  balance: number;

  buyCount: number;
  sellCount: number;
  maxStep: number;

  realizedPnL: number;
  unrealizedPnL: number;
  profit: number;
  totalFees: number;

  constructor(
    strategy: Strategy,
    historicalData: IKline[],
    basePrice: number,
    initialBalance: number,
  ) {
    this.strategy = strategy;
    this.historicalData = historicalData;
    this.currentPrice = 0;
    this.basePrice = basePrice;
    this.dataIndex = 0;
    this.balance = initialBalance;

    this.buyCount = 0;
    this.sellCount = 0;
    this.maxStep = 0;

    this.realizedPnL = 0;
    this.unrealizedPnL = 0;
    this.profit = 0;
    this.totalFees = 0;
  }

  run() {
    const startBalance = this.balance;

    while (this.dataIndex < this.historicalData.length - 1) {
      this.maxStep = Math.max(this.maxStep, this.strategy.getStep());

      this.trackPrice();
      this.executeStrategy();
      this.dataIndex++;
    }

    this.calculateUnrealizedPnL();

    return this.getReport(startBalance);
  }

  trackPrice() {
    this.currentPrice = this.historicalData[this.dataIndex].close;
  }

  executeStrategy() {
    if (this.isInitialPositionAndNoOrder()) {
      this.buyAsset();
      this.strategy.moveToNextPosition();
      return;
    }

    if (this.shouldSellAsset()) {
      this.sellAsset();
      this.strategy.removePosition();

      if (this.isInitialPositionAndNoOrder()) {
        this.buyAsset();
        this.strategy.moveToNextPosition();
      }

      return;
    }

    if (!this.shouldBuyNextAsset()) {
      return;
    }

    this.buyAsset();
    this.strategy.moveToNextPosition();
  }

  calculateUnrealizedPnL() {
    for (let i = 0; i < +this.strategy.getPositionIdx(); i++) {
      const position = this.strategy.getPosition(i);

      if (!position || !position.getOrder()) continue;

      const amount = position.getOrder().filled;
      const buyPrice = amount * position.getOrder().price;
      const currentPrice = amount * this.currentPrice;
      const unrealizedPnLForPosition = currentPrice - buyPrice;
      this.unrealizedPnL += unrealizedPnLForPosition;
    }
  }

  calculateTotalBuyCost() {
    let totalBuyCost = 0;

    for (let i = 0; i < this.strategy.getPositionIdx(); i++) {
      const position = this.strategy.getPosition(i);
      if (position && position.getOrder()) {
        const amount = position.getOrder().filled;
        const buyPrice = amount * position.getOrder().price;
        totalBuyCost += buyPrice;
      }
    }

    return totalBuyCost;
  }

  buyAsset() {
    const position = this.strategy.getCurrentPosition();
    const buyAmount =
      (this.basePrice * position.getBasePriceMultiplier()) / this.currentPrice;

    const order = new MockOrder(
      'BTCUSDT',
      'limit',
      'buy',
      buyAmount,
      this.currentPrice,
    );
    order.fill(buyAmount);
    position.setOrder(order);
    // this.logAction(buyAmount, 'buy');

    const buyCost = buyAmount * this.currentPrice;
    const buyFee = buyCost * MARKET_FEE; // 0.1% fee
    this.balance -= buyCost + buyFee;
    this.buyCount++;
    this.totalFees += buyFee;
  }

  sellAsset() {
    const position = this.strategy.getPreviousPosition();

    if (!position || !position.getOrder()) {
      return;
    }

    const amount = position.getOrder().filled;

    if (!amount) {
      console.log('No amount to sell');
      return;
    }

    const sellPrice = amount * this.currentPrice;
    const buyPrice = amount * position.getOrder().price;
    const profit = sellPrice - buyPrice;
    const sellFee = sellPrice * MARKET_FEE; // 0.1% fee
    const profitFee = profit * BOT_FEE; // 20% fee
    this.realizedPnL += profit;
    this.profit += profit - profitFee - sellFee;

    this.balance += sellPrice - sellFee;
    this.sellCount++;
    this.totalFees += sellFee + profitFee;
  }

  isInitialPositionAndNoOrder() {
    return (
      this.strategy.positionIdx === 0 &&
      !this.strategy.getCurrentPosition().getOrder()
    );
  }

  shouldSellAsset() {
    const position = this.strategy.getPreviousPosition();

    if (!position || !position.getOrderPrice()) {
      return false;
    }

    return (
      this.currentPrice >=
      position.getOrderPrice() * (1 + position.getSellRisePercentage() / 100)
    );
  }

  shouldBuyNextAsset() {
    if (this.strategy.isLastPosition()) {
      return false;
    }

    const position = this.strategy.getCurrentPosition();
    const previousPosition = this.strategy.getPreviousPosition();

    if (!previousPosition) {
      return;
    }

    const dropPrice =
      previousPosition.getOrderPrice() *
      (1 - position.getBuyDropPercentage() / 100);

    return this.currentPrice <= dropPrice;
  }

  private getReport(startBalance: number): IBacktestResult {
    return {
      buys: this.buyCount,
      currentPositions: this.strategy.positionIdx,
      finalBalance: Number(this.balance.toFixed(2)),
      maxPosition: this.maxStep,
      profitWithFees: Number(this.profit.toFixed(2)),
      realizedPnL: Number(this.realizedPnL.toFixed(2)),
      sells: this.sellCount,
      startBalance: Number(startBalance.toFixed(2)),
      totalPositions: Number(this.calculateTotalBuyCost().toFixed(2)),
      unrealizedPnL: Number(this.unrealizedPnL.toFixed(2)),
    };
  }
}

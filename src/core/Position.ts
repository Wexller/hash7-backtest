import MockOrder from 'src/core/MockOrder.ts';

export default class Position {
  buyDropPercentage: number;
  sellRisePercentage: number;
  basePriceMultiplier: number;
  private order: MockOrder | null;

  constructor(
    buyDropPercentage: number,
    sellRisePercentage: number,
    basePriceMultiplier: number,
  ) {
    this.buyDropPercentage = buyDropPercentage;
    this.sellRisePercentage = sellRisePercentage;
    this.basePriceMultiplier = basePriceMultiplier;
    this.order = null;
  }

  getBuyDropPercentage() {
    return this.buyDropPercentage;
  }

  getSellRisePercentage() {
    return this.sellRisePercentage;
  }

  getBasePriceMultiplier() {
    return this.basePriceMultiplier;
  }

  getOrder() {
    return this.order;
  }

  getOrderPrice() {
    return this.order ? this.order.price : null;
  }

  getOrderAmount() {
    return this.order ? this.order.amount : null;
  }

  setBuyDropPercentage(buyDropPercentage: number) {
    this.buyDropPercentage = buyDropPercentage;
  }

  setSellRisePercentage(sellRisePercentage: number) {
    this.sellRisePercentage = sellRisePercentage;
  }

  setBasePriceMultiplier(basePriceMultiplier: number) {
    this.basePriceMultiplier = basePriceMultiplier;
  }

  /**
   * @param {Order|null} order
   */
  setOrder(order: MockOrder | null) {
    this.order = order;
  }
}

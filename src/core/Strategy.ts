import { IGridItem } from 'src/types/grid.types.ts';

import Position from './Position.ts';

export default class Strategy {
  positions: Position[];
  ticker: string;
  positionIdx: number;
  constructor(ticker: string, grid: IGridItem[]) {
    this.positions = [];
    this.ticker = ticker;
    this.positionIdx = 0;

    for (const item of grid) {
      this.positions.push(new Position(item.buy, item.sell, item.multiplier));
    }
  }

  getPositionIdx() {
    return this.positionIdx;
  }

  getPosition(index: number): Position | undefined {
    return this.positions[index];
  }

  getFirstPosition() {
    return this.positions[0];
  }

  getCurrentPosition() {
    return this.positions[this.positionIdx];
  }

  getNextPosition() {
    return this.positions[this.positionIdx + 1];
  }

  getPreviousPosition() {
    return this.positions[this.positionIdx - 1];
  }

  getStep() {
    return this.positionIdx + 1;
  }

  getBasePrice() {
    return this.getFirstPosition()?.getOrderPrice() ?? 0;
  }

  getCurrentPrice() {
    return this.getCurrentPosition().getOrderPrice() ?? 0;
  }

  isFirstPosition() {
    return this.positionIdx === 0;
  }

  isLastPosition() {
    return this.positionIdx === this.positions.length - 1;
  }

  removePosition() {
    if (this.positionIdx === 0) {
      throw new Error('Cannot remove the first position');
    }

    this.getPreviousPosition().setOrder(null);
    this.positionIdx--;
  }

  moveToNextPosition() {
    if (this.positionIdx < this.positions.length - 1) {
      this.positionIdx++;
    }
  }
}

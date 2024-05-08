import { IntervalType, SymbolType } from 'src/types/request.types.ts';

export interface IBacktestForm {
  date: Date[];
  grids: string[];
  interval: IntervalType;
  symbol: SymbolType;
}

export interface IBacktestResult {
  buys: number;
  currentPositions: number;
  finalBalance: number;
  maxPosition: number;
  profitWithFees: number;
  realizedPnL: number;
  sells: number;
  startBalance: number;
  totalPositions: number;
  unrealizedPnL: number;
}

export interface IBacktestResultWithGrid extends IBacktestResult {
  gridName: string;
}

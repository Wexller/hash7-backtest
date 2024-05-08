import { IntervalType, SymbolType } from 'src/types/request.types.ts';

export interface IBacktestForm {
  date: Date[];
  grids: string[];
  interval: IntervalType;
  symbol: SymbolType;
}

export interface IBacktestResult {
  buys: string;
  currentPositions: number;
  finalBalance: string;
  maxPosition: number;
  profitWithFees: string;
  realizedPnL: string;
  sells: string;
  startBalance: string;
  totalPositions: string;
  unrealizedPnL: string;
  apy: string;
}

export interface IBacktestResultWithGrid extends IBacktestResult {
  gridName: string;
}

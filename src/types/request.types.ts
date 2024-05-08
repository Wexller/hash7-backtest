import { intervals, klineFields, tickers } from 'src/data/request-data.ts';

export type TickerType = (typeof tickers)[number];
export type SymbolType = `${TickerType}USDT`;
export type IntervalType = (typeof intervals)[number];
export type KlineType = (typeof klineFields)[number];

export interface IKline {
  close: number;
  closeTime: number;
  high: number;
  ignore: string;
  low: number;
  numberOfTrades: number;
  open: number;
  openTime: number;
  quoteAssetVolume: number;
  takerBuyBaseAssetVolume: number;
  takerBuyQuoteAssetVolume: number;
  volume: number;
}

export type KlineData = [
  number, // Kline open time
  string, // Open price
  string, // High price
  string, // Low price
  string, // Close price
  string, // Volume
  number, // Kline Close time
  string, // Quote asset volume
  number, // Number of trades
  string, // Taker buy base asset volume
  string, // Taker buy quote asset volume
  string, // Unused field, ignore.
];

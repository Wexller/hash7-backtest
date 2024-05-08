import { intervals, tickers } from 'src/data/request-data.ts';

export type TickerType = (typeof tickers)[number];
export type IntervalType = (typeof intervals)[number];

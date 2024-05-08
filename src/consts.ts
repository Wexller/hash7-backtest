import { IntervalType } from 'src/types/request.types.ts';

export const INTERVAL_TO_MILLISECONDS: Record<IntervalType, number> = {
  '1s': 1000,
  // eslint-disable-next-line sort-keys/sort-keys-fix
  '1m': 60 * 1000,
  '3m': 3 * 60 * 1000,
  '5m': 5 * 60 * 1000,
  // eslint-disable-next-line sort-keys/sort-keys-fix
  '15m': 15 * 60 * 1000,
  '30m': 30 * 60 * 1000,
  // eslint-disable-next-line sort-keys/sort-keys-fix
  '1h': 60 * 60 * 1000,
  '2h': 2 * 60 * 60 * 1000,
  '4h': 4 * 60 * 60 * 1000,
  '6h': 6 * 60 * 60 * 1000,
  '8h': 8 * 60 * 60 * 1000,
  // eslint-disable-next-line sort-keys/sort-keys-fix
  '12h': 12 * 60 * 60 * 1000,
  '1d': 24 * 60 * 60 * 1000,
  '3d': 3 * 24 * 60 * 60 * 1000,
  // eslint-disable-next-line sort-keys/sort-keys-fix
  '1w': 7 * 24 * 60 * 60 * 1000,
  // eslint-disable-next-line sort-keys/sort-keys-fix
  '1M': 30 * 24 * 60 * 60 * 1000,
};

export const LIMIT = 1000;

export const MARKET_FEE = 0.001;
export const BOT_FEE = 0.2;

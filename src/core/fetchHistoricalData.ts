import axios from 'axios';
import { LIMIT } from 'src/consts.ts';
import {
  IKline,
  IntervalType,
  KlineData,
  SymbolType,
} from 'src/types/request.types.ts';

interface IFetchHistoricalDataParams {
  symbol: SymbolType;
  interval: IntervalType;
  startTime: number;
  endTime: number;
}

export async function fetchHistoricalData({
  symbol,
  interval,
  startTime,
  endTime,
}: IFetchHistoricalDataParams) {
  try {
    const params = {
      endTime,
      interval,
      limit: LIMIT,
      startTime,
      symbol,
    };
    const response = await axios.get<KlineData[]>('/klines', {
      baseURL: 'https://api.binance.com/api/v3',
      params,
    });

    if (response.status === 429 || response.status === 418) {
      console.log(
        'Request limit reached or IP banned. Last request params:',
        params,
      );
      return;
    }

    return response.data.map<IKline>((item) => ({
      close: parseFloat(item[4]),
      closeTime: item[6],
      high: parseFloat(item[2]),
      ignore: item[11],
      low: parseFloat(item[3]),
      numberOfTrades: item[8],
      open: parseFloat(item[1]),
      openTime: item[0],
      quoteAssetVolume: parseFloat(item[7]),
      takerBuyBaseAssetVolume: parseFloat(item[9]),
      takerBuyQuoteAssetVolume: parseFloat(item[10]),
      volume: parseFloat(item[5]),
    }));
  } catch (error) {
    console.error(error);
  }
}

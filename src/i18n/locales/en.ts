const en = {
  app: {
    description:
      'Backtesting (Backtesting) is the process of testing a trading strategy on historical data. It allows traders and investors to evaluate and refine their trading strategies before applying them to the real market.',
    descriptionTitle: 'What is this?',
    nav: {
      backtest: 'Backtest',
      grids: 'Grids',
    },
  },
  backtest: {
    form: {
      asset: {
        filterPlaceholder: 'Enter asset name',
        placeholder: 'Select asset',
      },
      calculate: 'Calculate',
      dateRange: {
        placeholder: 'Select date range',
      },
      estimatedRecords: 'Estimated number of records:',
      grids: {
        placeholder: 'Select grids',
        selectedLabel: '{0} selected',
      },
      interval: {
        placeholder: 'Select interval',
      },
      stop: 'Stop',
      warningRecords: 'The more records, the longer the calculation will take',
    },
    loading: {
      progress: 'Loading data: {current} / {total}',
    },
    params: {
      asset: 'Asset',
      assetDescription:
        'Select an asset (e.g., BTC/USDT) that you want to use for backtesting. This is the asset on which the selected strategy will be tested.',
      calculate:
        'After filling in all fields, you can click the "Calculate" button to start the backtest. During the backtest you can click the "Stop" button and the results of the already received data will be displayed.',
      dateRange: 'Date Range',
      dateRangeDescription:
        'Select a date range for backtesting. This is the time period for which historical data will be collected for testing.',
      description:
        'To run a backtest, please fill in the following parameters:',
      grid: 'Grid',
      gridDescription:
        'Select the grid you want to use for backtesting. A grid is a set of levels at which the selected strategy will open and close trades.',
      interval: 'Interval',
      intervalDescription:
        'Select the time interval (e.g., 15 minutes) to use for backtesting. This is the step at which historical data will be collected for testing.',
      title: 'Parameter description',
    },
    result: {
      dialogTitle: 'Calculation results',
      title:
        'Calculation results for {ticker} based on {records} records for the period from {dateFrom} to {dateTo}',
    },
    title: 'Backtest parameters',
  },
  grids: {
    common: {
      detail: 'Details',
      dialogTitle: 'Details',
      title: 'Common grids',
    },
    table: {
      buy: 'Buy ↓',
      multiplier: 'Multiplier (USDT)',
      number: '#',
      sell: 'Sell ↑',
    },
    user: {
      add: 'Add',
      addTitle: 'Add grid',
      empty: 'You have no grids yet',
      gridName: 'Grid name',
      title: 'Your grids',
    },
  },
  intervals: {
    '12h': '12 hours',
    '15m': '15 minutes',
    '1M': '1 month',
    '1d': '1 day',
    '1h': '1 hour',
    '1m': '1 minute',
    '1s': '1 second',
    '1w': '1 week',
    '2h': '2 hours',
    '30m': '30 minutes',
    '3d': '3 days',
    '3m': '3 minutes',
    '4h': '4 hours',
    '5m': '5 minutes',
    '6h': '6 hours',
    '8h': '8 hours',
  },
  results: {
    apy: 'APY %',
    buys: 'Total buys',
    currentPositions: 'Open positions',
    expand: 'Expand',
    finalBalance: 'Final balance',
    gridName: 'Grid',
    maxPosition: 'Max positions',
    profitWithFees: 'Profit after fees (~40%)',
    realizedPnL: 'Realized P&L',
    sells: 'Total sells',
    startBalance: 'Starting balance',
    totalPositions: 'Money in positions',
    unrealizedPnL: 'Unrealized P&L',
  },
  strategyGrids: {
    'continuously-aggressive': 'Continuously aggressive',
    'continuously-moderate': 'Continuously moderate',
    falling: 'Falling market',
    growing: 'Growing market',
    'neutral-aggressive': 'Neutral market (aggressive)',
    'neutral-passive': 'Neutral market (passive)',
    'strongly-growing': 'Strongly growing market',
  },
};

export default en;

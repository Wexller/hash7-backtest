# Hash7 Backtest

A dedicated tool for **Hash7 users** to compare grid trading strategies against real historical data and decide which strategy best fits current or expected market conditions — before committing any real capital.

Built with Vue 3 + TypeScript, it fetches real historical price data from the Binance API and simulates the Hash7 grid bot to evaluate strategy performance over any selected time range.

**Live Demo:** [https://wexller.github.io/hash7-backtest/](https://wexller.github.io/hash7-backtest/)

---

## What is Hash7?

Hash7 is a grid trading bot that operates on cryptocurrency markets. It works by placing a series of buy and sell orders at predefined price levels (a "grid"). As price oscillates, the bot automatically buys on dips and sells on recoveries, accumulating profit from each completed buy→sell cycle.

This repository is the **backtesting companion** for Hash7. Instead of running live trades, it replays historical kline (candlestick) data and simulates how the bot would have performed — helping you evaluate and compare different grid configurations before deploying real capital.

---

## How It Works

### The Grid Strategy

A **grid** is an ordered list of positions. Each position defines the rules for one buy/sell level:

| Field        | Description |
|--------------|-------------|
| `buy`        | How much % the price must drop from the previous buy to trigger the next buy |
| `sell`       | How much % the price must rise from the buy price to trigger a sell |
| `multiplier` | Scales the base trade amount for this level (e.g. `2` = buy twice the base amount) |

The bot starts at grid level 0, buys immediately, then watches price movement:

- **Price drops** by the next level's `buy` threshold → opens another buy order at the next level
- **Price rises** by the current level's `sell` threshold → closes (sells) the most recent position and steps back one level

This creates a ladder of open positions as price falls, and unwinds them as price recovers.

### Fee Model

Two fees are deducted from every trade to realistically model real-world costs:

| Constant      | Value | Description |
|---------------|-------|-------------|
| `MARKET_FEE`  | 0.1%  | Exchange fee applied to every buy and sell |
| `BOT_FEE`     | 20%   | Platform fee on realized profit per sell |

### Backtest Result Metrics

After the simulation completes, the following report is produced:

| Metric             | Description |
|--------------------|-------------|
| `startBalance`     | Initial USDT balance before the test |
| `finalBalance`     | Remaining USDT balance after all trades |
| `profitWithFees`   | Net profit after all fees |
| `realizedPnL`      | Gross profit from all closed positions |
| `unrealizedPnL`    | Paper P&L on still-open positions at end of period |
| `totalPositions`   | Total USDT value of all open (unrealized) positions |
| `buys`             | Total number of buy orders executed |
| `sells`            | Total number of sell orders executed |
| `maxPosition`      | Deepest grid level reached during the test |
| `currentPositions` | Number of open positions at end of period |
| `apy`              | Annualized return (%) based on profit and duration |

---

## Available Grid Strategies

Seven pre-built grids cover different market conditions:

### Neutral Market — Passive (`neutral-passive`)
- 30 levels, all at 1%/1% (buy on −1%, sell on +1%)
- Equal position sizes throughout
- Best for: sideways, low-volatility markets

### Neutral Market — Aggressive (`neutral-aggressive`)
- 20 levels, 1%/1% thresholds
- Levels 5–14 use a 2× position multiplier for deeper exposure in mid-range
- Best for: sideways markets with stronger position sizing

### Falling Market (`falling`)
- 30 levels, sell always at +1%
- Buy threshold widens gradually: 1% → 2% → 3% → up to 9% at deeper levels
- Designed to accumulate on extended downtrends and recover at small bounces

### Growing Market (`growing`)
- 10 levels, 1%/1% thresholds
- Early levels use 3–4× multipliers to front-load exposure
- Best for: trending upward markets where early entries capture the most profit

### Strongly Growing Market (`strongly-growing`)
- 7 levels, 1%/1% thresholds
- First 3 levels use a 7× multiplier — very heavy front-loading
- Best for: strong bull runs with minimal pullbacks

### Continuously Moderate (`continuously-moderate`)
- 69 levels, all at 1%/1%, equal position sizes
- Wide coverage for long-running or high-volatility periods

### Continuously Aggressive (`continuously-aggressive`)
- 49 levels
- Buy/sell thresholds increase gradually from 1% to 2% as depth increases
- Equal position sizes throughout
- Best for: volatile markets where larger swings are expected at deeper levels

---

## Core Architecture

```
src/
├── core/
│   ├── BacktestBot.ts          # Main simulation loop
│   ├── Strategy.ts             # Grid position manager
│   ├── Position.ts             # Single grid level state
│   ├── MockOrder.ts            # Simulated limit order
│   └── fetchHistoricalData.ts  # Binance klines API client
├── data/
│   └── grids-data/             # Grid strategy definitions
├── types/                      # TypeScript interfaces
├── consts.ts                   # Fee constants, interval map
└── helpers.ts                  # Number formatting utilities
```

### `BacktestBot`
The simulation engine. Receives a `Strategy`, historical kline data, a base price, and an initial balance. Iterates over every candle, calling `executeStrategy()` to process buys/sells, and returns a full report at the end.

### `Strategy`
Wraps the grid (array of `Position` objects) and maintains a `positionIdx` cursor pointing to the current active level. Exposes methods to move forward (buy next level) or backward (sell and unwind).

### `Position`
Holds the `buy`/`sell` thresholds and `multiplier` for one grid level. Also stores the associated `MockOrder` once a buy is filled.

### `MockOrder`
Simulates an exchange limit order with symbol, side, amount, and fill price.

### `fetchHistoricalData`
Fetches klines from the Binance REST API (`/api/v3/klines`) in batches of 1000 candles. Handles rate-limit (429) and IP-ban (418) responses with user-facing error toasts.

---

## Views

The app has two views toggled from the top bar:

### Backtest
1. Select a **trading pair** (e.g. BTCUSDT)
2. Select a **candle interval** (1s → 1M)
3. Select one or more **grid strategies** to compare
4. Select a **date range**
5. Click **Calculate** — results for each grid are shown as cards
6. Click **Stop** at any time to see partial results

### Grids
Browse all available grid configurations. Displays the full position table for each grid (buy %, sell %, multiplier per level).

---

## Tech Stack

| Layer          | Technology |
|----------------|------------|
| Framework      | Vue 3 (Composition API) |
| Language       | TypeScript |
| Build tool     | Vite |
| UI components  | PrimeVue 3 (unstyled + Lara preset) |
| Styling        | TailwindCSS |
| Form validation| vee-validate + zod |
| HTTP client    | axios |
| Data source    | Binance REST API |

---

## Getting Started

**Requirements:** Node.js 18+ and yarn

```bash
# Clone
git clone https://github.com/wexller/hash7-backtest.git
cd hash7-backtest

# Install dependencies
yarn install

# Start dev server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

### Available Commands

| Command        | Description |
|----------------|-------------|
| `yarn dev`     | Start development server |
| `yarn build`   | Type-check and build for production |
| `yarn preview` | Preview the production build locally |
| `yarn lint`    | Lint `.ts` and `.vue` files |
| `yarn lint:fix`| Auto-fix lint issues |
| `yarn deploy`  | Build and deploy to GitHub Pages |

---

## Contact

Questions or suggestions: [maxim.davydov.94@gmail.com](mailto:maxim.davydov.94@gmail.com)

## License

MIT — see [LICENSE](LICENSE).

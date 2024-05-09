<script setup lang="ts">
import Card from 'primevue/card';
import ProgressBar from 'primevue/progressbar';
import HBacktesetParamsDescription from 'src/components/backtest/HBacktesetParamsDescription.vue';
import HBacktestForm from 'src/components/backtest/HBacktestForm.vue';
import HBacktestResult from 'src/components/backtest/HBacktestResult.vue';
import { INTERVAL_TO_MILLISECONDS, LIMIT } from 'src/consts.ts';
import BacktestBot from 'src/core/BacktestBot.ts';
import { fetchHistoricalData } from 'src/core/fetchHistoricalData.ts';
import Strategy from 'src/core/Strategy.ts';
import { gridMap } from 'src/data/grids-data';
import {
  IBacktestForm,
  IBacktestResultWithGrid,
} from 'src/types/backtest.types.ts';
import { IKline, IntervalType, SymbolType } from 'src/types/request.types.ts';
import { computed, ref } from 'vue';

const results = ref<IBacktestResultWithGrid[]>([]);
const totalIterations = ref(0);
const iterationCount = ref(0);
const isFetching = ref(false);
const isStopped = ref(false);

const ticker = ref<SymbolType>('BTCUSDT');
const interval = ref<IntervalType>('1d');
const dateFrom = ref(new Date());
const dateTo = ref(new Date());
const totalRecords = ref(0);

const recordCountPercentage = computed(() => {
  if (totalIterations.value === 0) {
    return 0;
  }

  return Math.round((iterationCount.value / totalIterations.value) * 100);
});

async function getHistoricData(formData: IBacktestForm) {
  const { date, interval, symbol } = formData;

  let [startTime, endTime] = date.map((d) => d.getTime());

  const step = INTERVAL_TO_MILLISECONDS[interval] * LIMIT;
  let historicalData: IKline[] = [];

  totalIterations.value = Math.ceil(
    (endTime - startTime) / (INTERVAL_TO_MILLISECONDS[interval] * LIMIT),
  );
  iterationCount.value = 0;

  isFetching.value = true;
  isStopped.value = false;

  while (startTime < endTime) {
    if (isStopped.value) break;
    if (iterationCount.value >= totalIterations.value) break;

    const data = await fetchHistoricalData({
      endTime,
      interval,
      startTime,
      symbol,
    });

    iterationCount.value++;

    if (!data) {
      break;
    }

    historicalData = [...historicalData, ...data];
    startTime = Math.min(startTime + step, endTime);
  }

  isFetching.value = false;

  return historicalData;
}
const onSubmit = async (value: IBacktestForm) => {
  const historicalData = await getHistoricData(value);

  if (historicalData.length === 0) return;

  results.value = [];

  ticker.value = value.symbol;
  interval.value = value.interval;
  dateFrom.value = new Date(historicalData[0].openTime);
  dateTo.value = new Date(historicalData[historicalData.length - 1].closeTime);
  totalRecords.value = historicalData.length;

  for (const gridKey of value.grids) {
    const grid = gridMap[gridKey];
    if (!grid) continue;

    const strategy = new Strategy(`${value.symbol}USDT`, grid.items);
    const bot = new BacktestBot(strategy, historicalData, 10, 1000);

    const result = { ...bot.run(), gridName: grid.name };
    results.value.push(result);
  }
};
</script>

<template>
  <div class="mx-auto space-y-10">
    <Card>
      <template #title>
        <h2 class="text-center text-2xl font-medium">Параметры для бэктеста</h2>
      </template>

      <template #content>
        <div class="space-y-5">
          <HBacktestForm
            :is-loading="isFetching"
            :is-stopped="isStopped"
            @submit="onSubmit"
            @stop="isStopped = true"
          />

          <div v-if="isFetching" class="space-y-2">
            <p class="text-center text-lg font-medium">
              Загрузка данных: {{ iterationCount }} / {{ totalIterations }}
            </p>

            <ProgressBar :value="recordCountPercentage" />
          </div>
        </div>
      </template>
    </Card>

    <HBacktestResult
      v-if="results.length > 0"
      :data="results"
      :ticker="ticker"
      :interval="interval"
      :date-from="dateFrom"
      :date-to="dateTo"
      :total-records="totalRecords"
    />

    <HBacktesetParamsDescription />
  </div>
</template>

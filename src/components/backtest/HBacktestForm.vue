<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import InlineMessage from 'primevue/inlinemessage';
import MultiSelect from 'primevue/multiselect';
import { INTERVAL_TO_MILLISECONDS } from 'src/consts.ts';
import grids from 'src/data/grids-data';
import {
  intervals,
  intervalTranslations,
  tickers,
} from 'src/data/request-data.ts';
import { formatNumber } from 'src/helpers.ts';
import { IBacktestForm } from 'src/types/backtest.types.ts';
import { IntervalType } from 'src/types/request.types.ts';
import { InputBindsConfig, LazyInputBindsConfig, useForm } from 'vee-validate';
import { computed } from 'vue';
import { z } from 'zod';

interface Props {
  isLoading?: boolean;
  isStopped?: boolean;
}

interface Emits {
  (event: 'submit', value: IBacktestForm): void;
  (event: 'stop'): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const symbolList = tickers.map((ticker) => ({
  code: `${ticker}USDT`,
  name: `${ticker}/USDT`,
}));

const intervalList = intervals.map((interval) => ({
  code: interval,
  name: intervalTranslations[interval],
}));

const gridList = grids.map((grid) => ({
  code: grid.key,
  name: grid.name,
}));

const scheme = toTypedSchema(
  z.object({
    date: z.array(z.date()),
    grids: z.array(z.string()).min(1),
    interval: z.string(),
    symbol: z.string(),
  }),
);

const { defineField, handleSubmit, meta, values, resetForm } =
  useForm<IBacktestForm>({
    validationSchema: scheme,
  });

const estimatedRecords = computed(() => {
  if (!values.date || !values.interval) {
    return 0;
  }

  const [start, end] = values.date;

  if (!start || !end) {
    return 0;
  }

  const diff = end.getTime() - start.getTime();
  const interval = INTERVAL_TO_MILLISECONDS[values.interval as IntervalType];

  if (!interval) {
    return 0;
  }

  return Math.ceil(diff / interval);
});

const inputTextConfigBinds:
  | Partial<InputBindsConfig<string>>
  | LazyInputBindsConfig = {
  props: (state) => ({ invalid: state.errors.length > 0 }),
};

const [date, dateMeta] = defineField('date', {
  props(state) {
    return {
      invalid: state.errors.length > 0,
    };
  },
});

const [ticker, tickerMeta] = defineField('symbol', inputTextConfigBinds);
const [interval, intervalMeta] = defineField('interval', inputTextConfigBinds);
const [grid, gridMeta] = defineField('grids', inputTextConfigBinds);

const onSubmit = handleSubmit((values) => {
  if (!meta.value.dirty) return;

  const { date, ...rest } = values;
  const [dateFrom, dateTo] = date;

  dateTo.setHours(23);
  dateTo.setMinutes(59);
  dateTo.setSeconds(59);

  const toSubmit = {
    ...rest,
    date: [dateFrom, dateTo],
  };

  emit('submit', toSubmit);
  resetForm({
    values: toSubmit,
  });
});
</script>

<template>
  <form class="space-y-5" @submit="onSubmit">
    <div class="grid gap-4 md:grid-cols-2">
      <Dropdown
        v-model="ticker"
        v-bind="tickerMeta"
        :options="symbolList"
        :disabled="isLoading"
        option-label="name"
        option-value="code"
        placeholder="Выберите актив"
        :virtual-scroller-options="{ itemSize: 38 }"
        filter
      />

      <Dropdown
        v-model="interval"
        v-bind="intervalMeta"
        :options="intervalList"
        :disabled="isLoading"
        option-label="name"
        option-value="code"
        placeholder="Выберите шаг"
      />

      <MultiSelect
        v-model="grid"
        v-bind="gridMeta"
        :options="gridList"
        :disabled="isLoading"
        option-value="code"
        option-label="name"
        placeholder="Выберите сетки"
        :max-selected-labels="3"
        selected-items-label="{0} выбрано"
      />

      <Calendar
        v-model="date"
        v-bind="dateMeta"
        :disabled="isLoading"
        date-format="dd.mm.yy"
        selection-mode="range"
        :manual-input="false"
        :max-date="new Date()"
        hide-on-range-selection
        placeholder="Выберите диапазон дат"
        show-button-bar
      />
    </div>

    <div v-if="estimatedRecords > 0" class="space-y-4 text-center">
      <div>
        Ожидаемое количество записей:
        <span class="font-bold">
          {{ formatNumber(estimatedRecords) }}
        </span>
      </div>

      <div>
        <InlineMessage severity="warn">
          Чем больше записей, тем дольше будет происходить расчет
        </InlineMessage>
      </div>
    </div>

    <div class="flex justify-center gap-4">
      <Button
        type="submit"
        label="Рассчитать"
        icon="pi pi-calculator"
        class="col-span-1"
        :disabled="!meta.valid || !meta.dirty"
        :loading="isLoading"
      />

      <Button
        v-if="isLoading"
        type="button"
        severity="danger"
        label="Остановить"
        icon="pi pi-stop"
        class="col-span-1"
        :disabled="isStopped"
        @click="emit('stop')"
      />
    </div>
  </form>
</template>

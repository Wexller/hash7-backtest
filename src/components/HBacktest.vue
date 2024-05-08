<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';
import grids from 'src/data/grids-data';
import {
  intervals,
  intervalTranslations,
  tickers,
} from 'src/data/request-data.ts';
import { InputBindsConfig, LazyInputBindsConfig, useForm } from 'vee-validate';
import { z } from 'zod';

const tickerList = tickers.map((ticker) => ({
  code: ticker,
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
    ticker: z.string(),
  }),
);

const { defineField, handleSubmit, meta } = useForm({
  validationSchema: scheme,
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

const [ticker, tickerMeta] = defineField('ticker', inputTextConfigBinds);
const [interval, intervalMeta] = defineField('interval', inputTextConfigBinds);
const [grid, gridMeta] = defineField('grids', inputTextConfigBinds);

const onSubmit = handleSubmit((value) => {
  console.log(value);
});
</script>

<template>
  <div class="mx-auto max-w-4xl space-y-10">
    <Card>
      <template #title>
        <h2 class="text-center text-2xl font-medium">Бэктест</h2>
      </template>

      <template #content>
        <form class="space-y-5" @submit="onSubmit">
          <div class="grid grid-cols-2 gap-4">
            <Dropdown
              v-model="ticker"
              v-bind="tickerMeta"
              :options="tickerList"
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
              option-label="name"
              option-value="code"
              placeholder="Выберите шаг"
            />

            <MultiSelect
              v-model="grid"
              v-bind="gridMeta"
              :options="gridList"
              option-value="code"
              option-label="name"
              placeholder="Выберите сетку"
              :max-selected-labels="3"
              selected-items-label="{0} выбрано"
            />

            <Calendar
              v-model="date"
              v-bind="dateMeta"
              date-format="dd.mm.yy"
              selection-mode="range"
              :manual-input="false"
              :max-date="new Date()"
              hide-on-range-selection
              placeholder="Выберите диапазон дат"
            />
          </div>

          <div class="text-center">
            <Button
              type="submit"
              label="Рассчитать"
              icon="pi pi-calculator"
              class="col-span-1"
              :disabled="!meta.valid"
              loading
            />
          </div>
        </form>
      </template>
    </Card>
  </div>
</template>

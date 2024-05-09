<script setup lang="ts">
import { format } from 'date-fns';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import HBacktestResultTable from 'src/components/backtest/HBacktestResultTable.vue';
import { formatNumber } from 'src/helpers.ts';
import { IBacktestResultWithGrid } from 'src/types/backtest.types.ts';
import { IntervalType, SymbolType } from 'src/types/request.types.ts';
import { ref } from 'vue';

interface Props {
  data: IBacktestResultWithGrid[];
  ticker: SymbolType;
  interval: IntervalType;
  dateFrom: Date;
  dateTo: Date;
  totalRecords: number;
}

defineProps<Props>();

const showDialog = ref(false);
const dialogRef = ref();

const maximize = () => {
  if (dialogRef.value.maximized) return;
  dialogRef.value.maximize();
};
</script>

<template>
  <Card>
    <template #title>
      <h2 class="text-center text-xl font-medium">
        Результаты расчетов {{ ticker }} на основе
        {{ formatNumber(totalRecords) }} записей за период с
        {{ format(dateFrom, 'dd.MM.yyyy') }} по
        {{ format(dateTo, 'dd.MM.yyyy') }}
      </h2>
    </template>

    <template #content>
      <HBacktestResultTable
        :data="data"
        show-maximize
        @maximize="showDialog = true"
      />
    </template>
  </Card>

  <Dialog
    ref="dialogRef"
    v-model:visible="showDialog"
    header="Результаты расчетов"
    modal
    maximizable
    @show="maximize"
  >
    <HBacktestResultTable :data="data" />
  </Dialog>
</template>

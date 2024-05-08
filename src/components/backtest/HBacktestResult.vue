<script setup lang="ts">
import { format } from 'date-fns';
import Card from 'primevue/card';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import { formatNumber } from 'src/helpers.ts';
import { IBacktestResultWithGrid } from 'src/types/backtest.types.ts';
import { IntervalType, SymbolType } from 'src/types/request.types.ts';

interface Props {
  data: IBacktestResultWithGrid[];
  ticker: SymbolType;
  interval: IntervalType;
  dateFrom: Date;
  dateTo: Date;
  totalRecords: number;
}

defineProps<Props>();
</script>

<template>
  <Card>
    <template #title>
      <h2 class="text-center text-xl font-medium">
        Результаты расчетов на основе {{ formatNumber(totalRecords) }} записей
        {{ ticker }} за период с {{ format(dateFrom, 'dd.MM.yyyy') }} по
        {{ format(dateTo, 'dd.MM.yyyy') }}
      </h2>
    </template>

    <template #content>
      <DataTable :value="data" scrollable show-gridlines>
        <Column
          field="gridName"
          header="Сетка"
          header-class="min-w-[200px] text-center"
        />

        <Column
          field="startBalance"
          header="Начальный баланс"
          header-class="min-w-[120px] text-center"
        />

        <Column
          field="finalBalance"
          header="Конечный баланс"
          header-class="min-w-[120px] text-center"
          body-class="font-semibold"
          :sortable="true"
        />

        <Column
          field="realizedPnL"
          header="Реализованный P&L"
          header-class="min-w-[150px] text-center"
          body-class="text-green-500 font-semibold"
          :sortable="true"
        />

        <Column
          field="unrealizedPnL"
          header="Нереализованный P&L"
          header-class="min-w-[150px] text-center"
          body-class="text-red-500 font-semibold"
          :sortable="true"
        />

        <Column
          field="profitWithFees"
          header="Прибыль с учетом комиссий (~40%)"
          header-class="min-w-[180px] text-center"
          body-class="text-orange-500 font-semibold"
          :sortable="true"
        />

        <Column
          field="totalPositions"
          header="Денег в позициях"
          header-class="min-w-[150px] text-center"
          :sortable="true"
        />

        <Column
          field="currentPositions"
          header="Открытие позиции"
          header-class="min-w-[150px] text-center"
          :sortable="true"
        />

        <Column
          field="maxPosition"
          header="Макс. позиций"
          header-class="min-w-[150px] text-center"
          :sortable="true"
        />

        <Column
          field="buys"
          header="Всего покупок"
          header-class="min-w-[150px] text-center"
          :sortable="true"
        />

        <Column
          field="sells"
          header="Всего продаж"
          header-class="min-w-[150px] text-center"
          :sortable="true"
        />
      </DataTable>
    </template>
  </Card>
</template>

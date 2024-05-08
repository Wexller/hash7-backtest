<script setup lang="ts">
import Card from 'primevue/card';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import { IBacktestResultWithGrid } from 'src/types/backtest.types.ts';

interface Props {
  data: IBacktestResultWithGrid[];
}

defineProps<Props>();
</script>

<template>
  <Card>
    <template #title>
      <h2 class="text-center text-2xl font-medium">Результаты</h2>
    </template>

    <template #content>
      <DataTable :value="data" striped-rows scrollable show-gridlines>
        <Column
          field="gridName"
          header="Сетка"
          header-class="min-w-[100px] text-center"
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
        />

        <Column
          field="profitWithFees"
          header="Прибыль с учетом комиссии"
          header-class="min-w-[150px] text-center"
        />

        <Column
          field="realizedPnL"
          header="Реализованная прибыль"
          header-class="min-w-[150px] text-center"
        />

        <Column
          field="unrealizedPnL"
          header="Нереализованная прибыль"
          header-class="min-w-[150px] text-center"
        />

        <Column
          field="totalPositions"
          header="Денег в позициях"
          header-class="min-w-[150px] text-center"
        />

        <Column
          field="currentPositions"
          header="Открытие позиции"
          header-class="min-w-[150px] text-center"
        />

        <Column
          field="maxPosition"
          header="Макс. позиций"
          header-class="min-w-[150px] text-center"
        />

        <Column
          field="buys"
          header="Всего покупок"
          header-class="min-w-[150px] text-center"
        />

        <Column
          field="sells"
          header="Всего продаж"
          header-class="min-w-[150px] text-center"
        />
      </DataTable>
    </template>
  </Card>
</template>

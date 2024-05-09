<script setup lang="ts">
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import { IBacktestResultWithGrid } from 'src/types/backtest.types.ts';

interface Props {
  data: IBacktestResultWithGrid[];
  showMaximize?: boolean;
}

interface Emits {
  (event: 'maximize'): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <DataTable :value="data" scrollable show-gridlines>
    <template v-if="showMaximize" #header>
      <div class="flex justify-end">
        <Button
          label="Развернуть"
          icon-pos="right"
          icon="pi pi-window-maximize"
          @click="$emit('maximize')"
        />
      </div>
    </template>

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
      header-class="min-w-[200px] text-center"
      body-class="text-orange-500 font-semibold"
      :sortable="true"
    />

    <Column
      field="apy"
      header="APY %"
      header-class="min-w-[120px] text-center"
      body-class="font-semibold"
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

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
          :label="$t('results.expand')"
          icon-pos="right"
          icon="pi pi-window-maximize"
          @click="$emit('maximize')"
        />
      </div>
    </template>

    <Column
      field="gridName"
      :header="$t('results.gridName')"
      header-class="min-w-[200px] text-center"
    />

    <Column
      field="startBalance"
      :header="$t('results.startBalance')"
      header-class="min-w-[120px] text-center"
    />

    <Column
      field="finalBalance"
      :header="$t('results.finalBalance')"
      header-class="min-w-[120px] text-center"
      body-class="font-semibold"
      :sortable="true"
    />

    <Column
      field="realizedPnL"
      :header="$t('results.realizedPnL')"
      header-class="min-w-[150px] text-center"
      body-class="text-green-500 font-semibold"
      :sortable="true"
    />

    <Column
      field="unrealizedPnL"
      :header="$t('results.unrealizedPnL')"
      header-class="min-w-[150px] text-center"
      body-class="text-red-500 font-semibold"
      :sortable="true"
    />

    <Column
      field="profitWithFees"
      :header="$t('results.profitWithFees')"
      header-class="min-w-[200px] text-center"
      body-class="text-orange-500 font-semibold"
      :sortable="true"
    />

    <Column
      field="apy"
      :header="$t('results.apy')"
      header-class="min-w-[120px] text-center"
      body-class="font-semibold"
      :sortable="true"
    />

    <Column
      field="totalPositions"
      :header="$t('results.totalPositions')"
      header-class="min-w-[150px] text-center"
      :sortable="true"
    />

    <Column
      field="currentPositions"
      :header="$t('results.currentPositions')"
      header-class="min-w-[150px] text-center"
      :sortable="true"
    />

    <Column
      field="maxPosition"
      :header="$t('results.maxPosition')"
      header-class="min-w-[150px] text-center"
      :sortable="true"
    />

    <Column
      field="buys"
      :header="$t('results.buys')"
      header-class="min-w-[150px] text-center"
      :sortable="true"
    />

    <Column
      field="sells"
      :header="$t('results.sells')"
      header-class="min-w-[150px] text-center"
      :sortable="true"
    />
  </DataTable>
</template>

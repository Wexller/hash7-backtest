<script setup lang="ts">
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import { IGridItem } from 'src/types/grid.types.ts';

interface Props {
  items: IGridItem[];
}

defineProps<Props>();
</script>

<template>
  <DataTable
    :value="items"
    size="small"
    scrollable
    show-gridlines
    class="mx-auto max-w-[600px]"
  >
    <Column header="#" header-class="w-10 text-center" body-class="text-center">
      <template #body="slotProps">
        <span>{{ slotProps.index + 1 }}</span>
      </template>
    </Column>

    <Column
      field="buy"
      header="Покупка ↓"
      header-class=" text-center"
      body-class="text-center font-medium text-red-500"
    >
      <template #body="slotProps">
        <span>{{ slotProps.data.buy > 0 ? slotProps.data.buy : '' }}</span>
      </template>
    </Column>

    <Column
      field="sell"
      header="Продажа ↑"
      header-class="text-center"
      body-class="text-center font-medium text-green-500"
    />

    <Column
      field="multiplier"
      header="Множитель (USDT)"
      header-class="text-center"
      body-class="text-center"
    />
  </DataTable>
</template>

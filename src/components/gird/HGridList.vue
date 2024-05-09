<script setup lang="ts">
import Button from 'primevue/button';
import DataView from 'primevue/dataview';
import { IGridListItem } from 'src/types/grid.types.ts';

interface Props {
  data: IGridListItem[];
}

interface Emits {
  (event: 'showDetail', value: string): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <DataView :value="data" data-key="key">
    <template #list="slotProps">
      <div
        v-for="(item, index) in slotProps.items"
        :key="index"
        class="transition-colors hover:bg-surface-50 dark:hover:bg-surface-700"
      >
        <div
          class="flex items-center justify-between gap-3 border-b border-surface-200 p-4"
        >
          <h3 class="font-medium md:text-lg">{{ item.name }}</h3>

          <Button
            class="shrink-0 sm:hidden"
            icon="pi pi-list"
            size="small"
            @click="$emit('showDetail', item.key)"
          />

          <Button
            label="Подробнее"
            class="shrink-0 max-sm:hidden"
            icon="pi pi-list"
            size="small"
            @click="$emit('showDetail', item.key)"
          />
        </div>
      </div>
    </template>
  </DataView>
</template>

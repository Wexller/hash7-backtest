<script setup lang="ts">
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import HGridList from 'src/components/gird/HGridList.vue';
import HGridTable from 'src/components/gird/HGridTable.vue';
import gridsData, { gridMap } from 'src/data/grids-data';
import { IGridListItem } from 'src/types/grid.types.ts';
import { computed, ref } from 'vue';

const showDialog = ref(false);
const selectedGrid = ref<string | null>(null);
const dialogRef = ref();

const gridList = gridsData.map<IGridListItem>((grid) => ({
  key: grid.key,
  name: grid.name,
}));

const gridItems = computed(() => {
  if (!selectedGrid.value || !gridMap[selectedGrid.value]?.items) return [];
  return gridMap[selectedGrid.value].items;
});

const showDetail = (key: string) => {
  selectedGrid.value = key;
  showDialog.value = true;
};

const maximize = () => {
  if (dialogRef.value.maximized) return;
  dialogRef.value.maximize();
};
</script>

<template>
  <Card>
    <template #title>
      <h2 class="text-center text-2xl font-medium">Общие сетки</h2>
    </template>

    <template #content>
      <HGridList :data="gridList" @show-detail="showDetail" />
    </template>
  </Card>

  <Dialog
    ref="dialogRef"
    v-model:visible="showDialog"
    header="Подробнее"
    modal
    maximizable
    @show="maximize"
  >
    <HGridTable :items="gridItems" />
  </Dialog>
</template>

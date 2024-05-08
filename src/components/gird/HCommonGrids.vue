<script setup lang="ts">
import Card from 'primevue/card';
import { TreeNode } from 'primevue/treenode';
import HGridTable from 'src/components/gird/HGridTable.vue';
import gridsData from 'src/data/grids-data';

const nodes: TreeNode[] = gridsData.map((grid, parentIdx) => {
  return {
    children: grid.items.map((item, idx) => {
      return {
        data: {
          buy: item.buy || '',
          id: idx + 1,
          multiplier: item.multiplier,
          sell: item.sell,
        },
        key: `${parentIdx}-${idx}`,
      };
    }),
    data: {
      name: grid.name,
    },
    key: `${parentIdx}`,
  };
});
</script>

<template>
  <Card>
    <template #title>
      <h2 class="text-center text-2xl font-medium">Общие сетки</h2>
    </template>

    <template #content>
      <HGridTable :nodes="nodes" />
    </template>
  </Card>
</template>

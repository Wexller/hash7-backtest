<script setup lang="ts">
import Column from 'primevue/column';
import { TreeNode } from 'primevue/treenode';
import TreeTable from 'primevue/treetable';

interface Props {
  nodes: TreeNode[];
}

defineProps<Props>();
</script>

<template>
  <TreeTable :value="nodes" size="small">
    <Column
      field="name"
      header="Название"
      header-class="text-center"
      body-class="font-semibold"
      expander
    />

    <Column field="id" header="#" header-class="w-5" body-class="text-center" />

    <Column
      field="buy"
      header="Покупка ↓"
      header-class="w-[18%] text-center"
      body-class="text-center font-medium text-red-500"
    />

    <Column
      field="sell"
      header="Продажа ↑"
      header-class="w-[18%] text-center"
      body-class="text-center font-medium text-green-500"
    />

    <Column
      field="multiplier"
      header="Множитель (USDT)"
      header-class="w-[18%] text-center"
      body-class="text-center"
    />
  </TreeTable>
</template>

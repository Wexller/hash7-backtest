<script setup lang="ts">
import HCommonGrids from 'src/components/gird/HCommonGrids.vue';
import HUserGrids from 'src/components/gird/HUserGrids.vue';
</script>

<template>
  <div class="mx-auto space-y-10">
    <HUserGrids v-if="false" />

    <HCommonGrids />
  </div>
</template>

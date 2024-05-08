<script setup lang="ts">
import SelectButton from 'primevue/selectbutton';
import HBacktest from 'src/components/HBacktest.vue';
import HGrids from 'src/components/HGrids.vue';
import HHeader from 'src/components/HHeader.vue';
import { ref } from 'vue';

const model = ref<string>('backtest');

const options = [
  { code: 'backtest', name: 'Бэктест' },
  { code: 'grids', name: 'Сетки' },
];
</script>

<template>
  <div class="container py-4">
    <HHeader />

    <div class="pt-6">
      <SelectButton
        v-model="model"
        :options="options"
        class="mx-auto w-fit"
        option-label="name"
        option-value="code"
      />

      <div class="pt-6">
        <HGrids v-if="model === 'grids'" />

        <HBacktest v-else />
      </div>
    </div>
  </div>
</template>

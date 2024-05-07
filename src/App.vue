<script setup lang="ts">
import SelectButton from 'primevue/selectbutton';
import Backtest from 'src/components/Backtest.vue';
import Grids from 'src/components/Grids.vue';
import Header from 'src/components/Header.vue';
import { ref } from 'vue';

const model = ref<string>('backtest');

const options = [
  { code: 'backtest', name: 'Бэктест' },
  { code: 'grids', name: 'Сетки' },
];
</script>

<template>
  <div class="container py-4">
    <Header />

    <div class="pt-10">
      <SelectButton
        v-model="model"
        :options="options"
        class="mx-auto w-fit"
        option-label="name"
        option-value="code"
      />

      <Grids v-if="model === 'grids'" />

      <Backtest v-else />
    </div>
  </div>
</template>

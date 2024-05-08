<script setup lang="ts">
import SelectButton from 'primevue/selectbutton';
import Toast from 'primevue/toast';
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
  <div class="mx-auto max-w-4xl pb-10 pt-4">
    <HHeader />

    <div class="pt-10">
      <SelectButton
        v-model="model"
        :options="options"
        class="mx-auto w-fit"
        option-label="name"
        option-value="code"
      />

      <div class="pt-6">
        <HBacktest v-show="model !== 'grids'" />

        <HGrids v-if="model === 'grids'" />
      </div>
    </div>

    <Toast />
  </div>
</template>

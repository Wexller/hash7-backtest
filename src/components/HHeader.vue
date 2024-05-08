<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import Button from 'primevue/button';
import HLogo from 'src/components/HLogo.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <HLogo class="w-8" />

      <h1 class="text-2xl">Backtest</h1>
    </div>

    <Button
      :icon="isDark ? 'pi pi-moon' : 'pi pi-sun'"
      text
      size="small"
      @click="toggleDark()"
    />
  </div>
</template>

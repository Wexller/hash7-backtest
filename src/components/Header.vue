<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import Button from 'primevue/button';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="flex items-center justify-between">
    <h1 class="text-2xl">Hash7 Backtest</h1>

    <Button
      :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
      outlined
      size="small"
      @click="toggleDark()"
    />
  </div>
</template>

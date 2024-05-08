<script setup lang="ts">
import FloatLabel from 'primevue/floatlabel';

export interface Props {
  id: string;
  label: string;
  hint?: string;
  error?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="space-y-1 pt-5">
    <FloatLabel>
      <slot />

      <label :for="id">{{ label }}</label>
    </FloatLabel>

    <small v-if="hint && !error" class="text-sm text-gray-500">{{
      hint
    }}</small>

    <small v-if="error" class="text-sm text-red-500">{{ error }}</small>
  </div>
</template>

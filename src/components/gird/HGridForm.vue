<script setup lang="ts">
import InputText from 'primevue/inputtext';
import HGridFormFieldset from 'src/components/gird/HGridFormFieldset.vue';
import HInputWrapper from 'src/components/ui/form/input-wrapper/HInputWrapper.vue';
import { ref } from 'vue';

const gridName = ref('');
</script>

<template>
  <form>
    <HInputWrapper id="grid-name" label="Название сетки">
      <InputText id="grid-name" v-model="gridName" class="w-full" />
    </HInputWrapper>

    <HGridFormFieldset />
  </form>
</template>

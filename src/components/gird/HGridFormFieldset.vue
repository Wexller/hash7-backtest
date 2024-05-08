<script setup lang="ts">
import InputGroup from 'primevue/inputgroup';
import InputNumber from 'primevue/inputnumber';
</script>

<template>
  <div>
    <h1>Grid Form</h1>

    <InputGroup>
      <InputNumber />
      <InputNumber />
      <InputNumber />
    </InputGroup>

    <div class="grid grid-cols-4 gap-3">
      <InputNumber class="col-span-1" />

      <div class="col-span-1">
        <InputNumber />
      </div>

      <div class="col-span-2">
        <InputNumber />
      </div>
    </div>
  </div>
</template>

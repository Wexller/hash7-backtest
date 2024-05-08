<script setup lang="ts">
import Button from 'primevue/button';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import HGridForm from 'src/components/gird/HGridForm.vue';
import { IGrid } from 'src/types/grid.types.ts';
import { ref } from 'vue';

const showDialog = ref(false);

const userGrids: IGrid[] = [];
</script>

<template>
  <Card>
    <template #title>
      <h2 class="text-center text-2xl font-medium">Ваши сетки</h2>
    </template>

    <template #content>
      <div v-if="userGrids.length === 0">
        <p class="text-center text-xl">У вас пока нет сеток</p>

        <div class="mt-4 flex justify-center">
          <Button
            label="Добавить"
            icon="pi pi-plus"
            @click="showDialog = true"
          />
        </div>
      </div>
    </template>
  </Card>

  <Dialog
    v-model:visible="showDialog"
    header="Добавить сетку"
    :style="{ width: '600px' }"
    maximizable
    modal
  >
    <HGridForm />
  </Dialog>
</template>

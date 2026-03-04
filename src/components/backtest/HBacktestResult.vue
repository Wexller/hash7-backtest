<script setup lang="ts">
import { format } from 'date-fns';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import HBacktestResultTable from 'src/components/backtest/HBacktestResultTable.vue';
import { formatNumber } from 'src/helpers.ts';
import { IBacktestResultWithGrid } from 'src/types/backtest.types.ts';
import { IntervalType, SymbolType } from 'src/types/request.types.ts';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

interface Props {
  data: IBacktestResultWithGrid[];
  dateFrom: Date;
  dateTo: Date;
  interval: IntervalType;
  ticker: SymbolType;
  totalRecords: number;
}

const props = defineProps<Props>();

const { t } = useI18n();

const showDialog = ref(false);
const dialogRef = ref();

const maximize = () => {
  if (dialogRef.value.maximized) return;
  dialogRef.value.maximize();
};
</script>

<template>
  <Card>
    <template #title>
      <h2 class="text-center text-xl font-medium">
        {{
          t('backtest.result.title', {
            dateFrom: format(props.dateFrom, 'dd.MM.yyyy'),
            dateTo: format(props.dateTo, 'dd.MM.yyyy'),
            records: formatNumber(props.totalRecords),
            ticker: props.ticker,
          })
        }}
      </h2>
    </template>

    <template #content>
      <HBacktestResultTable
        :data="data"
        show-maximize
        @maximize="showDialog = true"
      />
    </template>
  </Card>

  <Dialog
    ref="dialogRef"
    v-model:visible="showDialog"
    :header="$t('backtest.result.dialogTitle')"
    modal
    maximizable
    @show="maximize"
  >
    <HBacktestResultTable :data="data" />
  </Dialog>
</template>

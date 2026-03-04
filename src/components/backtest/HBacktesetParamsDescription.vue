<script setup lang="ts">
import Panel from 'primevue/panel';
</script>

<template>
  <Panel :header="$t('backtest.params.title')" toggleable collapsed>
    <div class="space-y-3">
      <p>{{ $t('backtest.params.description') }}</p>

      <ol class="list-decimal space-y-2 pl-5">
        <li>
          <b>{{ $t('backtest.params.asset') }}</b>
          - {{ $t('backtest.params.assetDescription') }}
        </li>
        <li>
          <b>{{ $t('backtest.params.interval') }}</b>
          - {{ $t('backtest.params.intervalDescription') }}
        </li>
        <li>
          <b>{{ $t('backtest.params.grid') }}</b>
          - {{ $t('backtest.params.gridDescription') }}
        </li>
        <li>
          <b>{{ $t('backtest.params.dateRange') }}</b>
          - {{ $t('backtest.params.dateRangeDescription') }}
        </li>
      </ol>

      <p>{{ $t('backtest.params.calculate') }}</p>
    </div>
  </Panel>
</template>

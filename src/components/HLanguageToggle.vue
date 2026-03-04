<script setup lang="ts">
import Dropdown from 'primevue/dropdown';
import { useI18n } from 'vue-i18n';
import { type SupportedLocale } from 'src/i18n/index.ts';

interface LanguageOption {
  code: SupportedLocale;
  flag: string;
  label: string;
}

const { locale } = useI18n();

const languages: LanguageOption[] = [
  { code: 'en', flag: '🇺🇸', label: 'EN' },
];

function onLocaleChange(value: SupportedLocale): void {
  locale.value = value;
}
</script>

<template>
  <Dropdown
    :model-value="locale"
    :options="languages"
    option-label="label"
    option-value="code"
    class="h-8 min-w-[80px] items-center"
    @update:model-value="onLocaleChange"
  >
    <template #value="slotProps">
      <span v-if="slotProps.value">
        {{
          languages.find((l) => l.code === slotProps.value)?.flag ?? ''
        }}&nbsp;{{
          languages.find((l) => l.code === slotProps.value)?.label ?? ''
        }}
      </span>
    </template>

    <template #option="slotProps">
      <span>{{ slotProps.option.flag }}&nbsp;{{ slotProps.option.label }}</span>
    </template>
  </Dropdown>
</template>

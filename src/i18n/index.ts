import en from 'src/i18n/locales/en.ts';
import ru from 'src/i18n/locales/ru.ts';
import { createI18n } from 'vue-i18n';

export type MessageSchema = typeof en;

// Detect browser locale; fall back to 'en'
const browserLocale = navigator.language?.split('-')[0] ?? 'en';
const supportedLocales = ['en', 'ru'] as const;
export type SupportedLocale = (typeof supportedLocales)[number];

const defaultLocale: SupportedLocale = supportedLocales.includes(
  browserLocale as SupportedLocale,
)
  ? (browserLocale as SupportedLocale)
  : 'en';

const i18n = createI18n<[MessageSchema], SupportedLocale>({
  fallbackLocale: 'en',
  legacy: false,
  locale: defaultLocale,
  messages: {
    en,
    ru,
  },
});

export default i18n;

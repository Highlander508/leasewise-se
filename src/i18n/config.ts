import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import svTranslation from '@/locales/sv/translation.json';
import enTranslation from '@/locales/en/translation.json';

const initI18n = async () => {
  await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        sv: {
          translation: svTranslation,
        },
        en: {
          translation: enTranslation,
        },
      },
      lng: 'sv',
      fallbackLng: 'sv',
      supportedLngs: ['sv', 'en'],
      debug: false,
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
    });
};

export { initI18n };
export default i18n;

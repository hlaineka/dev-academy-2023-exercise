import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fiTranslations from './resources/translations/fi.json';
import enTranslations from './resources/translations/en.json';

const resources = {
  en: enTranslations,
  fi: fiTranslations,
};

i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
});

export default i18n;

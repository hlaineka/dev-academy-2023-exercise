import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fiTranslations from './resources/translations/fi.json';
import enTranslations from './resources/translations/en.json';

const resources = {
  fi: fiTranslations,
  en: enTranslations,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fi',
});

export default i18n;

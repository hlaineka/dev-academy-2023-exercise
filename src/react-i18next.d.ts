import 'react-i18next';
import fiTranslations from './resources/translations/fi.json';
import enTranslations from './resources/translations/en.json';

// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface Resources {
    en: typeof enTranslations;
    fi: typeof fiTranslations;
  }
}

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'fi';
    // custom resources type
    resources: {
      en: typeof enTranslations;
      fi: typeof fiTranslations;
    };
  }
}

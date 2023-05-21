import * as React from 'react';
import i18n from '../../i18n';
import { Box, Button, styled } from '@mui/material';

type Language = 'fi' | 'en';

type OnLanguageChange = (language: Language) => void;

const languages: Array<Language> = ['fi', 'en'];

const BootstrapButton = styled(Button)(() => ({
  borderRadius: 0,
  color: 'white',
  height: '5rem',

  '&.active': {
    backgroundColor: '#FCA211',
    color: '#14213D',
  },
}));

const LanguageSelect: React.FC = () => {
  const [lang, setLang] = React.useState('en');

  const onLanguageChange: OnLanguageChange = language => {
    i18n.changeLanguage(language);
    setLang(language);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {languages.map(language => (
        <BootstrapButton
          key={`${language}-selection`}
          onClick={() => onLanguageChange(language)}
          className={lang === language ? 'active' : ''}
          data-testid={`${language}-selection`}
        >
          {language}
        </BootstrapButton>
      ))}
    </Box>
  );
};

export default LanguageSelect;

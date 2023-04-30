import * as React from 'react';
import {
	Box,
  Button,
  InputBase,
  styled,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

type Language = 'fi' | 'en';

type OnLanguageChange = (language: Language) => void;

const languages: Array<Language> = ['fi', 'en'];

const BootstrapButton = styled(Button)(({ theme }) => ({
  color: 'white',
	height: '5rem',
	borderRadius: 0,
	'&.active': {
		backgroundColor: '#FCA211',
		color: '#14213D'
	}
}));

/*const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: '0',
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));*/

const LanguageSelect: React.FC = () => {
  const { t } = useTranslation();

	const onLanguageChange: OnLanguageChange = language => {
    i18n.changeLanguage(language);
  };

  return (
		<Box sx={{display: 'flex'}}>
		{languages.map(language => (
			<BootstrapButton
				key={`${language}-selection`}
				onClick={() => onLanguageChange(language)}
				className={i18n.language === language ? 'active' : ''}
			>
				{language}
			</BootstrapButton>
		))}
	</Box>
  );
};

export default LanguageSelect;

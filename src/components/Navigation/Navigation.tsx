import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material';
import NavigationButton from './NavigationButton';

const SelectableListItem = styled(ListItem)(() => ({
  height: '100%',
  '&.selected-item': {
    backgroundColor: '#FCA211',
    color: '#14213D',

    '& .MuiTypography-root': {
      color: '#14213D',
    },

    '& .MuiSvgIcon-root': {
      color: '#14213D !important',
    },
  },
}));

const CustomList = styled(List)(() => ({
  display: 'flex',
  padding: 0,
  height: '100%',
}));

const Navigation = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const { t } = useTranslation();

  return (
    <div>
      <Box
        sx={{
          width: 'auto',
          paddingRight: '2rem',
          backgroundColor: '#14213D',
          height: '5rem',
        }}
      >
        <CustomList>
          {[
            t('dashboard:dashboard').toString(),
            t('journeys:journeys').toString(),
            t('stations:stations').toString(),
          ].map((text, index) => (
            <SelectableListItem
              key={text}
              disablePadding
              onClick={() => handleListItemClick(index)}
              className={selectedIndex === index ? 'selected-item' : ''}
              data-testid={`navigation-${text}`}
            >
              <NavigationButton text={text} />
            </SelectableListItem>
          ))}
        </CustomList>
      </Box>
    </div>
  );
};

export default Navigation;

import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { theme } from '../../theme/theme';

export type NavigationButtonProps = {
  text: string;
};

const StyledListItemText = styled(ListItemText)(() => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const StyledListItemIcon = styled(ListItemIcon)(() => ({
  color: '#FCA311',
  [theme.breakpoints.down('sm')]: {
    minWidth: 'fit-content',
  },
}));

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
  itemProps,
  ref,
) {
  return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

const NavigationButton: React.FC<NavigationButtonProps> = ({ text }) => {
  const { t } = useTranslation();

  return (
    <ListItemButton
      component={Link}
      to={
        text == t('journeys:journeys').toString()
          ? '/journeys'
          : text == t('stations:stations').toString()
          ? '/stations'
          : '/'
      }
      sx={{ color: '#FFF' }}
    >
      <StyledListItemIcon>
        {text == t('journeys:journeys').toString() ? (
          <DirectionsBikeIcon />
        ) : text == t('stations:stations').toString() ? (
          <LocationOnIcon />
        ) : (
          <DashboardIcon />
        )}
      </StyledListItemIcon>
      <StyledListItemText primary={text} />
    </ListItemButton>
  );
};

export default NavigationButton;

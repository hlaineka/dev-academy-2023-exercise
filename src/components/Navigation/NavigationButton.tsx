import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DashboardIcon from '@mui/icons-material/Dashboard';

export type NavigationButtonProps = {
  text: string;
};

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
      <ListItemIcon>
        {text == t('journeys:journeys').toString() ? (
          <DirectionsBikeIcon style={{ color: '#FCA311' }} />
        ) : text == t('stations:stations').toString() ? (
          <LocationOnIcon style={{ color: '#FCA311' }} />
        ) : (
          <DashboardIcon style={{ color: '#FCA311' }} />
        )}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

export default NavigationButton;

import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StationViewButtonProps } from './types';
import { responsiveStyles, theme } from '../../theme/theme';
import { useTranslation } from 'react-i18next';

const singleStationStyles = responsiveStyles(theme)[0].singleStation;

const SingleStationView: React.FC<StationViewButtonProps> = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

  const ariaLabel = `${t('stations:info_of')} ${data.nimi}`;
  const addressString = `${t('stations:address')}: ${data.osoite}`;
  const operatorString = `${t('stations:operator')}: ${
    data.operaattori ? t('stations:undefined') : data.operaattori
  }`;
  const capacityString = `${t('stations.capacity')}: ${data.kapasiteetti}`;
  const departuredString = `${t('stations:departed_journeys')}: ${
    data.journey_departures
  }`;
  const returnedString = `${t('stations:returned_journeys')}: ${
    data.journey_returns
  }`;

  return (
    <>
      <Button onClick={handleOpen}>{t('actions:more_info')}</Button>

      <Modal open={open} onClose={handleClose} aria-labelledby={ariaLabel}>
        <Box sx={singleStationStyles}>
          <Typography
            id={ariaLabel}
            variant="h3"
            component="h3"
            sx={{ marginBottom: '2rem', padding: '.5rem' }}
          >
            {data.nimi}
          </Typography>
          <Typography sx={{ fontSize: '1.5rem', padding: '.5rem' }}>
            {addressString}
          </Typography>
          <Typography sx={{ fontSize: '1.5rem', padding: '.5rem' }}>
            {operatorString}
          </Typography>
          <Typography sx={{ fontSize: '1.5rem', padding: '.5rem' }}>
            {capacityString}
          </Typography>
          <Typography sx={{ fontSize: '1.5rem', padding: '.5rem' }}>
            {departuredString}
          </Typography>
          <Typography sx={{ fontSize: '1.5rem', padding: '.5rem' }}>
            {returnedString}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default SingleStationView;

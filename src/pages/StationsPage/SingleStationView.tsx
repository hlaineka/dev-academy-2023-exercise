import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { StationViewButtonProps } from './types';
import { theme } from '../../theme/theme';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material';

const SingleStationModal = styled(Box)(() => ({
  [theme.breakpoints.down(1100)]: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    height: '80vh',
    backgroundColor: `${theme.palette.background.paper}`,
    border: '2px solid primary.dark',
    boxShadow: 24,
    p: 4,
    padding: '3rem',
  },
  [theme.breakpoints.up(1100)]: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    height: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid primary.dark',
    boxShadow: 24,
    p: 4,
    padding: '3rem',
  },
}));

const SingleStationHeader = styled(Typography)<TypographyProps>(() => ({
  marginBottom: '2rem',
  padding: '.5rem',
}));

const SingleStationTypography = styled(Typography)(() => ({
  fontSize: '1.5rem',
  padding: '.5rem',
}));

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
  const capacityString = `${t('stations:capacity')}: ${data.kapasiteetti}`;
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
        <SingleStationModal>
          <SingleStationHeader id={ariaLabel} variant="h3">
            {data.nimi}
          </SingleStationHeader>
          <SingleStationTypography>{addressString}</SingleStationTypography>
          <SingleStationTypography>{operatorString}</SingleStationTypography>
          <SingleStationTypography>{capacityString}</SingleStationTypography>
          <SingleStationTypography>{departuredString}</SingleStationTypography>
          <SingleStationTypography>{returnedString}</SingleStationTypography>
        </SingleStationModal>
      </Modal>
    </>
  );
};

export default SingleStationView;

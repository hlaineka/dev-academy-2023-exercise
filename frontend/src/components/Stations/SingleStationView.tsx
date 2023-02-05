import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Station } from './types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { responsiveStyles, theme } from '../../theme/theme';

export type StationViewButtonProps = {
  data: Station;
};

const singleStationStyles = responsiveStyles(theme)[0].singleStation;

const SingleStationView: React.FC<StationViewButtonProps> = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ariaLabel = 'Station info of ' + data.nimi;
  const infoString = 'Osoite: ' + data.osoite;
  const departuredString =
    'Asemalta lähteneet matkat: ' + data.journey_departures;
  const returnedString = 'Asemalle palanneet matkat: ' + data.journey_returns;

  return (
    <>
      <Button onClick={handleOpen}>Tarkastele</Button>

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
          <Typography sx={{ fontSize: '1.5rem', padding: '.5rem' }}>{infoString}</Typography>
          <Typography sx={{ fontSize: '1.5rem', padding: '.5rem' }}>
            {departuredString}
          </Typography>
          <Typography sx={{ fontSize: '1.5rem', padding: '.5rem' }}>{returnedString}</Typography>
        </Box>
      </Modal>
    </>
  );
};

export default SingleStationView;

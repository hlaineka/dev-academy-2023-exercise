import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Station } from './types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export type StationViewButtonProps = {
  data: Station
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
	height: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid primary.dark',
  boxShadow: 24,
  p: 4,
};



const SingleStationView:React.FC<StationViewButtonProps>  = ({data}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

	const ariaLabel = "Station info of " + data.nimi
	const infoString = "Osoite: " + data.osoite;
	const departuredString = "Asemalta lähteneet matkat: " + data.journey_departures;
	const returnedString = "Asemalle palanneet matkat: " + data.journey_returns;

  return (
    <>
      <Button onClick={handleOpen}>Tarkastele</Button>
      
			<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={ariaLabel}
      >
    <Box sx={style}>
      <Typography id={ariaLabel} variant="h3" component="h3" sx={{marginBottom: '2rem'}}>
        {data.nimi}
      </Typography>
			<Typography sx={{fontSize: "1.5rem"}}>
			{infoString}
      </Typography>
			<Typography sx={{fontSize: "1.5rem"}}>
			{departuredString}
      </Typography>
			<Typography sx={{fontSize: "1.5rem"}}>
			{returnedString}
      </Typography>
    </Box>
		</Modal>
      
    </>
  );
};

export default SingleStationView;

import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
} from '@mui/material';

import { darkTheme, responsiveStyles, theme } from '../../theme/theme';
import { Stations } from '../../generated/graphql';
import { useTranslation } from 'react-i18next';

export type TopDeparturesProps = {
  topDepartureStations: Array<Stations> | undefined | null;
};

const TopDepartures: React.FC<TopDeparturesProps> = ({
  topDepartureStations,
}) => {
  const { t } = useTranslation();

  const tableCellStyles = responsiveStyles(theme)[0].tableCell;

  return (
    <>
      <p>{t('dashboard:top_departure_stations')} </p>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <ThemeProvider theme={darkTheme}>
              <TableRow
                sx={{
                  backgroundColor: '#14213d',
                  padding: '2rem 2rem .5rem 2rem',
                  boxSizing: 'border-box',
                  borderRadius: '.5rem .5rem 0 0',
                  borderBottom: 'solid .5rem #fca211',
                }}
              >
                <TableCell
                  key={'0-top-departure-stations'}
                  id={'0-top-departure-stations'}
                  align={'left'}
                  sx={tableCellStyles}
                >
                  {t('stations:station')}
                </TableCell>
                <TableCell
                  key={'1-top-departure-stations-departures'}
                  id={'1-top-departure-stations-departures'}
                  align={'left'}
                  sx={tableCellStyles}
                >
                  {t('stations:departures')}
                </TableCell>
              </TableRow>
            </ThemeProvider>
          </TableHead>
          <TableBody>
            {topDepartureStations?.map((row: Stations) => (
              <TableRow
                key={row.id?.toString()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={tableCellStyles}>
                  {row.nimi?.toString()}
                </TableCell>
                <TableCell align="left" sx={tableCellStyles}>
                  {row.journey_departures}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TopDepartures;

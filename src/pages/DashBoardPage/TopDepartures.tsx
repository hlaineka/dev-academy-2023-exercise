import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
} from '@mui/material';
import { Stations } from '../../generated/graphql';
import {
  DashboardTableRow,
  StyledTableCell,
  darkTheme,
} from '../../theme/theme';

export type TopDeparturesProps = {
  topDepartureStations: Array<Stations> | undefined | null;
};

const TopDepartures: React.FC<TopDeparturesProps> = ({
  topDepartureStations,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('dashboard:top_departure_stations')} </p>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <ThemeProvider theme={darkTheme}>
              <DashboardTableRow>
                <StyledTableCell
                  key={'0-top-departure-stations'}
                  id={'0-top-departure-stations'}
                  align={'left'}
                >
                  {t('stations:station')}
                </StyledTableCell>
                <StyledTableCell
                  key={'1-top-departure-stations-departures'}
                  id={'1-top-departure-stations-departures'}
                  align={'left'}
                >
                  {t('stations:departures')}
                </StyledTableCell>
              </DashboardTableRow>
            </ThemeProvider>
          </TableHead>
          <TableBody>
            {topDepartureStations?.map((row: Stations) => (
              <TableRow
                key={row.id?.toString()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell align="left">
                  {row.nimi?.toString()}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.journey_departures}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TopDepartures;

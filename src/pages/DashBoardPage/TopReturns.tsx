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

export type TopReturnsProps = {
  topReturnStations: Array<Stations> | undefined | null;
};

const TopReturns: React.FC<TopReturnsProps> = ({ topReturnStations }) => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('dashboard:top_return_stations')} </p>
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
                  {t('stations:returns')}
                </StyledTableCell>
              </DashboardTableRow>
            </ThemeProvider>
          </TableHead>
          <TableBody>
            {topReturnStations?.map((row: Stations) => (
              <TableRow
                key={row.id?.toString()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell align="left">
                  {row.nimi?.toString()}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.journey_returns}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TopReturns;

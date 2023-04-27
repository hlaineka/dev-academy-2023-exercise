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
import React from 'react';
import { TopReturnsProps } from './types';

const TopReturns: React.FC<TopReturnsProps> = ({ topReturnStations }) => {
  const tableCellStyles = responsiveStyles(theme)[0].tableCell;

  return (
    <>
      <p>Top 5 stations to return to: </p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                  Station
                </TableCell>
                <TableCell
                  key={'1-top-departure-stations-departures'}
                  id={'1-top-departure-stations-departures'}
                  align={'left'}
                  sx={tableCellStyles}
                >
                  Returns
                </TableCell>
              </TableRow>
            </ThemeProvider>
          </TableHead>
          <TableBody>
            {topReturnStations?.map((row: Stations) => (
              <TableRow
                key={row.id?.toString()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={tableCellStyles}>
                  {row.nimi?.toString()}
                </TableCell>
                <TableCell align="left" sx={tableCellStyles}>
                  {row.journey_returns}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TopReturns;

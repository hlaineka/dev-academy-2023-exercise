import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { SortDirection } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import {
  GetPaginatedOrderedJourneys,
  GetJourneysCount,
} from '../../queries/Queries';
import { Journey } from './types';
import { journeyTableHeads, rowsPerPageOptions } from './constants';
import { CreateTableHead } from '../CreateTableHead';

const createDurationString = (duration: number) => {
  const seconds = duration % 60;
  const minutes = Math.floor(duration / 60) % 60;
  const hours = Math.floor(duration / 3600);

  const secondsString = ('  ' + seconds.toString()).slice(-3) + 's';
  const minutesString = ('  ' + minutes.toString()).slice(-3) + 'm';
  const hoursString = ('            ' + hours.toString()).slice(-10) + 'h';

  return hoursString + minutesString + secondsString;
};

const createDistanceString = (distance: number) => {
  const meters = Math.floor(distance % 1000);
  const kilometers = Math.floor(distance / 1000);
  return kilometers === 0 ? meters + 'm' : kilometers + 'km ' + meters + 'm';
};

const JourneyTable = () => {
  const maxRowsCount = GetJourneysCount();

  const [journeyPage, setJourneyPage] = React.useState<number>(0);
  const [rowsPerJourneyPage, setRowsPerJourneyPage] =
    React.useState<number>(25);
  const [order, setOrder] = React.useState<SortDirection>('desc');
  const [orderBy, setOrderBy] = React.useState<string>('Departure');

  const handleChangeJourneyPage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,
  ) => {
    setJourneyPage(newPage);
  };

  const handleChangeRowsPerJourneyPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const rowCount = parseInt(event.target.value, 10);
    console.log(event);
    setRowsPerJourneyPage(rowCount);
    setJourneyPage(0);
  };

  const handleToggleOrdering = (query_name: string) => {
    const isAsc = orderBy === query_name && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(query_name);
    console.log(orderBy);
    console.log(order);
  };

  const { loading, error, data } = GetPaginatedOrderedJourneys(
    journeyPage,
    rowsPerJourneyPage,
    order,
    orderBy,
  );

  const filteredData = data?.journeys;

  if (error) {
    console.log(data, error);
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error!</div>
      ) : (
        data && (
          <>
            <TablePagination
              component="div"
              count={maxRowsCount}
              page={journeyPage}
              onPageChange={handleChangeJourneyPage}
              rowsPerPage={rowsPerJourneyPage}
              onRowsPerPageChange={event =>
                handleChangeRowsPerJourneyPage(event)
              }
              rowsPerPageOptions={rowsPerPageOptions}
            />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <CreateTableHead
                  headCells={journeyTableHeads}
                  orderBy={orderBy}
                  order={order}
                  tableType="journeys"
                  handleOrdering={handleToggleOrdering}
                />
                <TableBody>
                  {filteredData?.map((row: Journey) => (
                    <TableRow
                      key={row.id?.toString()}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">
                        {row.Departure.toString()}
                      </TableCell>
                      <TableCell align="left">
                        {row.departure_station_name}
                      </TableCell>
                      <TableCell align="left">
                        {row.Return.toString()}
                      </TableCell>
                      <TableCell align="left">
                        {row.return_station_name}
                      </TableCell>
                      <TableCell align="left">
                        {createDistanceString(row.covered_distance_m)}
                      </TableCell>
                      <TableCell align="right">
                        {' '}
                        {createDurationString(row.duration_sec)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )
      )}
    </>
  );
};

export default JourneyTable;

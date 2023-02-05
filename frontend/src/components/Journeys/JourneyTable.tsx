import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { SortDirection } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import {
  GetPaginatedOrderedJourneys,
  GetJourneysCount,
} from '../../queries/Queries';
import { journeyTableHeads, rowsPerPageOptions } from './constants';
import { CreateTableHead } from '../CreateTableHead';
import JourneyRow from './JourneyRow';
import { Journeys } from '../../generated/graphql';

const JourneyTable = () => {
  //states and handlers for padination and ordering
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
    setRowsPerJourneyPage(rowCount);
    setJourneyPage(0);
  };

  const handleToggleOrdering = (query_name: string) => {
    const isAsc = orderBy === query_name && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(query_name);
  };

  //query call for paginated, ordered data
  const { loading, error, data } = GetPaginatedOrderedJourneys(
    journeyPage,
    rowsPerJourneyPage,
    order,
    orderBy,
  );

  if (error) {
    console.log(data, error);
  }

  const maxRowsCount = GetJourneysCount();
  const filteredData = data?.journeys;

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
                  {filteredData?.map((row: Journeys) => (
                    <JourneyRow row={row} />
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

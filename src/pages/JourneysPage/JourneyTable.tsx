import * as React from 'react';
import { SortDirection } from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import { SelectChangeEvent } from '@mui/material';
import { GetJourneysCount } from '../../queries/Queries';
import { GetSortByOptions, rowsPerPageOptions } from './constants';
import JourneyTableFormControl from './JourneyTableFormControl';
import JourneyTableContainer from './JourneyTableContainer';

const JourneyTable = () => {
  //states and handlers for padination and ordering
  const [journeyPage, setJourneyPage] = React.useState<number>(0);
  const [rowsPerJourneyPage, setRowsPerJourneyPage] =
    React.useState<number>(25);
  const [order, setOrder] = React.useState<SortDirection>('desc');
  const [orderBy, setOrderBy] = React.useState<string>('Departure');
  const [orderByValue, setOrderByValue] = React.useState('0');

  const sortByOptions = GetSortByOptions();

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
    setOrderByValue(
      sortByOptions.findIndex(element => element[0] === query_name).toString(),
    );
  };

  const handleOrderBy = (event: SelectChangeEvent) => {
    const index: number = +event.target.value;
    setOrderBy(sortByOptions[index][0]);
    setOrderByValue(event.target.value);
  };

  const maxRowsCount = GetJourneysCount();

  return (
    <>
      <JourneyTableFormControl
        orderByValue={orderByValue}
        handleOrderBy={handleOrderBy}
      />
      <TablePagination
        component="div"
        count={maxRowsCount}
        page={journeyPage}
        onPageChange={handleChangeJourneyPage}
        rowsPerPage={rowsPerJourneyPage}
        onRowsPerPageChange={event => handleChangeRowsPerJourneyPage(event)}
        rowsPerPageOptions={rowsPerPageOptions}
      />
      <JourneyTableContainer
        orderBy={orderBy}
        order={order}
        handleToggleOrdering={handleToggleOrdering}
        journeyPage={journeyPage}
        rowsPerJourneyPage={rowsPerJourneyPage}
      />
    </>
  );
};

export default JourneyTable;

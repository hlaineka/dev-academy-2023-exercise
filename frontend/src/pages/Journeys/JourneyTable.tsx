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
import { CreateTableHead } from '../../components/CreateTableHead';
import JourneyRow from './JourneyRow';
import { Journeys } from '../../generated/graphql';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { TableHeads } from './types';

type SortByOption = Array<string>;

const sortByOptions: Array<SortByOption> = [
  ['Departure', 'Departure'],
  ['Return', 'Return'],
  ['covered_distance_m', 'Covered distance'],
  ['departure_station_name', 'Departure station'],
  ['duration_sec', 'Duration'],
  ['return_station_name', 'Return station'],
];

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

  const handleOrderBy = (event: SelectChangeEvent<'Sort by'>) => {
    const index: number = Number(event.target.value);
    setOrderBy(sortByOptions[index][0]);
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

  const customJourneyTableHeads: Array<TableHeads | undefined> = [
    undefined,
    journeyTableHeads[1],
    journeyTableHeads[3],
    journeyTableHeads[6],
  ];

  const customField = journeyTableHeads.find(
    tableHead => tableHead.query_name === orderBy,
  );
  if (
    customField &&
    orderBy != 'departure_station_name' &&
    orderBy != 'return_station_name'
  ) {
    customJourneyTableHeads[0] = customField;
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
            <FormControl sx={{ width: '20rem', color: '#14213D' }}>
              <InputLabel id="journeys-order-by">Sort By</InputLabel>
              <Select
                labelId="journeys-order-by-select-label"
                id="journeys-order-by-select"
                value=""
                label="Sort by"
                onChange={handleOrderBy}
              >
                {sortByOptions.map((option: SortByOption, index) => (
                  <MenuItem
                    sx={{ color: '#14213D' }}
                    key={`${index}-${option[1]}`}
                    value={index.toString()}
                  >
                    {option[1]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
              <Table
                sx={{
                  tableLayout: 'auto',
                  whiteSpace: 'normal',
                  maxWidth: '100vw',
                }}
                aria-label="simple table"
              >
                <CreateTableHead
                  headCells={customJourneyTableHeads}
                  orderBy={orderBy}
                  order={order}
                  tableType="journeys"
                  handleOrdering={handleToggleOrdering}
                />
                <TableBody>
                  {filteredData?.map((row: Journeys) => (
                    <JourneyRow
                      key={`${row.id.toString()}-${
                        row.departure_station_name
                      }-journey-row`}
                      row={row}
                      customJourneyTableHeads={customJourneyTableHeads}
                    />
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

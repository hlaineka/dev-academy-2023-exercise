import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { SortDirection } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import TablePagination from '@mui/material/TablePagination';
import {
  GetPaginatedOrderedStations,
  GetStationsCount,
} from '../../queries/Queries';
import { Station } from './types';
import { stationTableHeads, rowsPerPageOptions } from './constants';
import { CreateTableHead } from '../CreateTableHead';
import StationViewButton from './SingleStationView';

const BasicTable = () => {
  const maxRowsCount = GetStationsCount();

  const [stationPage, setStationPage] = React.useState<number>(0);
  const [rowsPerStationsPage, setRowsPerStationPage] =
    React.useState<number>(25);
  const [order, setOrder] = React.useState<SortDirection>('desc');
  const [orderBy, setOrderBy] = React.useState<string>('Nimi');

  const handleChangeStationsPage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,
  ) => {
    setStationPage(newPage);
  };

  const handleChangeRowsPerStationPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const rowCount = parseInt(event.target.value, 10);
    console.log(event);
    setRowsPerStationPage(rowCount);
    setStationPage(0);
  };

  const handleToggleOrdering = (query_name: string) => {
    const isAsc = orderBy === query_name && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(query_name);
    console.log(orderBy);
    console.log(order);
  };

  const { loading, error, data } = GetPaginatedOrderedStations(
    stationPage,
    rowsPerStationsPage,
    order,
    orderBy,
  );

  const filteredData = data?.stations;

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
              page={stationPage}
              onPageChange={handleChangeStationsPage}
              rowsPerPage={rowsPerStationsPage}
              onRowsPerPageChange={event =>
                handleChangeRowsPerStationPage(event)
              }
              rowsPerPageOptions={rowsPerPageOptions}
            />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <CreateTableHead
                  headCells={stationTableHeads}
                  orderBy={orderBy}
                  order={order}
                  tableType="stationss"
                  handleOrdering={handleToggleOrdering}
                />
                <TableBody>
                  {filteredData?.map((row: Station) => (
                    <TableRow
                      key={row.fid?.toString()}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{row.nimi}</TableCell>
                      <TableCell align="left">{row.osoite}</TableCell>
                      <TableCell align="left">{row.kaupunki}</TableCell>
                      <TableCell align="left">{row.operaattori}</TableCell>
                      <TableCell align="right">
                        {row.kapasiteetti?.toString()}
                      </TableCell>
                      <TableCell align="center">
                        <StationViewButton data={row} />
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

export default BasicTable;

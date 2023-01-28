import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import TablePagination from '@mui/material/TablePagination';
import {
  GetPaginatedOrderedStations,
  GetStationsCount,
} from '../../queries/Queries';
import { Station } from './types';

const BasicTable = () => {
  const maxRowsCount = GetStationsCount();

  const [stationPage, setStationPage] = React.useState<number>(0);
  const [rowsPerStationsPage, setRowsPerStationPage] =
    React.useState<number>(25);
  const [order, setOrder] = React.useState<String>('desc');
  const [orderBy, setOrderBy] = React.useState<String>('Nimi');

  const handleChangeStationsPage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,
  ) => {
    setStationPage(newPage);
  };

  const handleChangeRowsPerStationPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
		const rowCount = parseInt(event.target.value, 10);
    console.log(event);
    setRowsPerStationPage(rowCount);
    setStationPage(0);
  };

  const handleToggleOrdering = (id: String) => {
    const isAsc = orderBy === id && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(id);
  };

  const { loading, error, data } = GetPaginatedOrderedStations(
    stationPage,
    rowsPerStationsPage,
    order,
    orderBy,
  );

  const filteredData = data?.stations;

  const rowsPerPageOptions = [
    { label: '10', value: 10 },
    { label: '25', value: 25 },
    { label: '50', value: 50 },
    { label: '100', value: 100 },
    { label: 'all', value: -1 },
  ];

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
          <TableContainer component={Paper}>
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
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Nimi</TableCell>
                  <TableCell align="left">Osoite</TableCell>
                  <TableCell align="left">Kaupunki</TableCell>
                  <TableCell align="left">Operaattori</TableCell>
                  <TableCell align="left">Kapasiteetti</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData?.map((row: Station) => (
                  <TableRow
                    key={row.FID?.toString()}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">{row.Nimi}</TableCell>
                    <TableCell align="left">{row.Osoite}</TableCell>
                    <TableCell align="left">{row.Kaupunki}</TableCell>
                    <TableCell align="left">{row.Operaattor}</TableCell>
                    <TableCell align="left">
                      {row.Kapasiteet?.toString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
      )}
    </>
  );
};

export default BasicTable;

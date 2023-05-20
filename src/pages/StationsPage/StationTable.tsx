import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import {
  GetPaginatedOrderedStations,
  GetStationsCount,
} from '../../queries/Queries';
import { StationTableHeads, rowsPerPageOptions } from './constants';
import CreateTableHead from '../../components/CreateTableHead';
import { SortDirection } from '@mui/material';
import { Stations } from '../../generated/graphql';
import StationRow from './StationRow';
import { useTranslation } from 'react-i18next';

const StationTable = () => {
  //states and handlers for pagination and ordering
  const [stationPage, setStationPage] = React.useState<number>(0);
  const [rowsPerStationsPage, setRowsPerStationPage] =
    React.useState<number>(25);
  const [order, setOrder] = React.useState<SortDirection>('asc');
  const [orderBy, setOrderBy] = React.useState<string>('nimi');
  const { t } = useTranslation();

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

  if (error) {
    console.log(data, error);
  }

  const filteredData = data?.stations;
  const maxRowsCount = GetStationsCount();
  const stationTableHeads = StationTableHeads();

  return (
    <>
      {loading ? (
        <div>{t('status:loading')}</div>
      ) : error ? (
        <div>{t('status:error')}</div>
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
              <Table sx={{ maxWidth: '100%' }} aria-label="stations table">
                <CreateTableHead
                  headCells={stationTableHeads}
                  orderBy={orderBy}
                  order={order}
                  tableType="stations"
                  handleOrdering={handleToggleOrdering}
                />
                <TableBody>
                  {filteredData?.map((row: Stations) => (
                    <StationRow row={row} key={`${row.id}-station-row`} />
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

export default StationTable;

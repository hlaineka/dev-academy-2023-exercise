import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stations } from '../../generated/graphql';

type BasicTableProps = {
  stations: Array<Stations>;
};

const BasicTable = ({ stations }: BasicTableProps) => {
  return (
    <TableContainer component={Paper}>
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
          {stations.map(row => (
            <TableRow
              key={row.FID?.toString()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">
                {row.Nimi}
              </TableCell>
              <TableCell align="left">{row.Osoite}</TableCell>
              <TableCell align="left">{row.Kaupunki}</TableCell>
              <TableCell align="left">{row.Operaattor}</TableCell>
              <TableCell align="left">{row.Kapasiteet?.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;

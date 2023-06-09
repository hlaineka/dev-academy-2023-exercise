import React from 'react';
import { TableRow } from '@mui/material';
import { StationRowProps } from './types';
import { StyledTableCell } from '../../theme/theme';
import SingleStationView from './SingleStationView';

const StationRow: React.FC<StationRowProps> = ({ row }) => {
  return (
    <TableRow
      key={row.fid?.toString()}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <StyledTableCell align="left">{row.nimi}</StyledTableCell>
      <StyledTableCell align="left">{row.osoite}</StyledTableCell>
      <StyledTableCell align="left">{row.kaupunki}</StyledTableCell>
      <StyledTableCell align="center">
        <SingleStationView data={row} />
      </StyledTableCell>
    </TableRow>
  );
};

export default StationRow;

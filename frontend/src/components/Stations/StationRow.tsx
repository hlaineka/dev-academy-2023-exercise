import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { responsiveStyles, theme } from '../../theme/theme';
import SingleStationView from './SingleStationView';
import { StationRowProps } from './types';

const StationRow: React.FC<StationRowProps> = ({ row }) => {
  const tableCellStyles = responsiveStyles(theme)[0].tableCell;

  return (
    <TableRow
      key={row.fid?.toString()}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell align="left" sx={tableCellStyles}>
        {row.nimi}
      </TableCell>
      <TableCell align="left" sx={tableCellStyles}>
        {row.osoite}
      </TableCell>
      <TableCell align="left" sx={tableCellStyles}>
        {row.kaupunki}
      </TableCell>
      <TableCell align="left" sx={tableCellStyles}>
        {row.operaattori}
      </TableCell>
      <TableCell align="right" sx={tableCellStyles}>
        {row.kapasiteetti?.toString()}
      </TableCell>
      <TableCell align="center" sx={tableCellStyles}>
        <SingleStationView data={row} />
      </TableCell>
    </TableRow>
  );
};

export default StationRow;

import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import { JourneyRowProps } from './types';
import { responsiveStyles, theme } from '../../theme/theme';
import {
  createDistanceString,
  createDurationString,
} from '../../functions/helpers';

const JourneyRow: React.FC<JourneyRowProps> = ({ row }) => {
  const tableCellStyles = responsiveStyles(theme)[0].tableCell;

  return (
    <TableRow
      key={row.id?.toString()}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell align="left" sx={tableCellStyles}>
        {row.Departure.toString()}
      </TableCell>
      <TableCell align="left" sx={tableCellStyles}>
        {row.departure_station_name}
      </TableCell>
      <TableCell align="left" sx={tableCellStyles}>
        {row.Return.toString()}
      </TableCell>
      <TableCell align="left" sx={tableCellStyles}>
        {row.return_station_name}
      </TableCell>
      <TableCell align="left" sx={tableCellStyles}>
        {row?.covered_distance_m
          ? createDistanceString(row?.covered_distance_m)
          : ''}
      </TableCell>
      <TableCell align="right" sx={tableCellStyles}>
        {' '}
        {row?.duration_sec ? createDurationString(row.duration_sec) : ''}
      </TableCell>
    </TableRow>
  );
};

export default JourneyRow;

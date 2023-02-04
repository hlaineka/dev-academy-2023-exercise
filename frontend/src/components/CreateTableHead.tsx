import TableHead from '@mui/material/TableHead';
import TableCell, { SortDirection } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Box from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';
import { TableHeads } from './Stations/types';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../theme/theme';

export type CreateTableHeadProps = {
  headCells: Array<TableHeads>,
  orderBy: String,
  order: SortDirection,
  tableType: String,
  handleOrdering: (id: string) => void,
};

export const CreateTableHead: React.FC<CreateTableHeadProps>  = (
  {headCells, orderBy, order, tableType, handleOrdering}
) => {
  const createSortHandler = (id: string) => () => {
    handleOrdering(id);
  };

  const directionOrder: 'asc' | 'desc' | undefined =
    order === 'desc' ? 'desc' : 'asc';

  return (
    <TableHead>
			<ThemeProvider theme={darkTheme}>
      <TableRow sx={{backgroundColor: "#14213d"}}>
        {headCells.map(headCell => {
          if (headCell.query_name === '') {
            return (
              <TableCell
                key={headCell.id + '-' + tableType}
                id={headCell.id}
                align={headCell.align}
              >
                {headCell.label}
              </TableCell>
            );
          } else {
            return (
              <TableCell
                key={headCell.id + '-' + tableType}
                id={headCell.id}
                align={headCell.align}
                sortDirection={orderBy === headCell.query_name ? order : 'asc'}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? directionOrder : 'asc'}
                  onClick={createSortHandler(headCell.query_name)}
                >
                  {' '}
                  {headCell.label}
                  {orderBy === headCell.query_name ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc'
                        ? 'sorted descending'
                        : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            );
          }
        })}
      </TableRow>
			</ThemeProvider>
    </TableHead>
  );
};

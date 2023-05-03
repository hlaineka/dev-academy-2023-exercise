import React from 'react';
import TableHead from '@mui/material/TableHead';
import { SortDirection } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { ThemeProvider } from '@mui/material/styles';
import CreateTableHeadCell from './CreateTableHeadCell';
import { darkTheme } from '../../theme/theme';
import { TableHeads } from '../../pages/StationsPage/types';

export type CreateTableHeadProps = {
  headCells: Array<TableHeads | undefined>;
  orderBy: string;
  order: SortDirection;
  tableType: string;
  handleOrdering: (id: string) => void;
};

export const CreateTableHead: React.FC<CreateTableHeadProps> = ({
  headCells,
  orderBy,
  order,
  tableType,
  handleOrdering,
}) => {
  return (
    <TableHead>
      <ThemeProvider theme={darkTheme}>
        <TableRow
          sx={{
            backgroundColor: '#14213d',
            padding: '2rem 2rem .5rem 2rem',
            boxSizing: 'border-box',
            borderRadius: '.5rem .5rem 0 0',
            borderBottom: 'solid .5rem #fca211',
          }}
        >
          {headCells.map(headCell =>
            headCell ? (
              <CreateTableHeadCell
                headCell={headCell}
                orderBy={orderBy}
                order={order}
                tableType={tableType}
                handleOrdering={handleOrdering}
                key={headCell.id}
              />
            ) : (
              <></>
            ),
          )}
          ;
        </TableRow>
      </ThemeProvider>
    </TableHead>
  );
};

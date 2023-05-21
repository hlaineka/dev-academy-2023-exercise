import React from 'react';
import { ThemeProvider, styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import { SortDirection } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import CreateTableHeadCell from './CreateTableHeadCell';
import { TableHeads } from '../../pages/StationsPage/types';
import { darkTheme } from '../../theme/theme';

export type CreateTableHeadProps = {
  headCells: Array<TableHeads | undefined>;
  orderBy: string;
  order: SortDirection;
  tableType: string;
  handleOrdering: (id: string) => void;
};

const StyledTableRow = styled(TableRow)(() => ({
  backgroundColor: '#14213d',
  padding: '2rem 2rem .5rem 2rem',
  boxSizing: 'border-box',
  borderRadius: '.5rem .5rem 0 0',
  borderBottom: 'solid .5rem #fca211',
}));

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
        <StyledTableRow>
          {headCells.map(headCell =>
            headCell ? (
              <CreateTableHeadCell
                headCell={headCell}
                orderBy={orderBy}
                order={order}
                tableType={tableType}
                handleOrdering={handleOrdering}
                width={headCells[0] ? 25 : 33}
                key={`${headCell.id}-headcell`}
              />
            ) : (
              <></>
            ),
          )}
        </StyledTableRow>
      </ThemeProvider>
    </TableHead>
  );
};

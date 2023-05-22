import {
  Box,
  SortDirection,
  TableCell,
  TableCellProps,
  TableSortLabel,
  styled,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { TableHeads } from '../../pages/StationsPage/types';
import { theme } from '../../theme/theme';

export type CreateTableHeadCellProps = {
  headCell: TableHeads;
  tableType: string;
  orderBy: string;
  order: SortDirection;
  width: number;
  handleOrdering: (id: string) => void;
};

const StyledTableCell = styled(TableCell, {
  shouldForwardProp: prop => prop !== 'width',
})<TableCellProps>(({ width }) => ({
  [theme.breakpoints.down(1100)]: {
    padding: '.5rem',
  },
  ...(width && {
    maxWidth: `${width}%`,
  }),
}));

const CreateTableHeadCell: React.FC<CreateTableHeadCellProps> = ({
  headCell,
  tableType,
  orderBy,
  order,
  width,
  handleOrdering,
}) => {
  const createSortHandler = (id: string) => () => {
    handleOrdering(id);
  };

  const directionOrder: 'asc' | 'desc' | undefined =
    order === 'desc' ? 'desc' : 'asc';

  return (
    <>
      {width === 33 && headCell.query_name === '' && (
        <StyledTableCell
          key={headCell.id + '-' + tableType}
          id={headCell.id}
          width={width}
        />
      )}
      <StyledTableCell
        key={headCell.id + '-' + tableType}
        id={headCell.id}
        align={headCell.align}
        sortDirection={orderBy === headCell.query_name ? order : 'asc'}
        width={width}
      >
        {headCell.query_name === '' ? (
          headCell.label
        ) : (
          <TableSortLabel
            active={true}
            direction={orderBy === headCell.query_name ? directionOrder : 'asc'}
            onClick={createSortHandler(headCell.query_name)}
          >
            {headCell.label}

            <Box component="span" sx={visuallyHidden}>
              {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
            </Box>
          </TableSortLabel>
        )}
      </StyledTableCell>
    </>
  );
};

export default CreateTableHeadCell;

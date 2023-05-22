import { Box, SortDirection, TableCell, TableSortLabel } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { TableHeads } from '../../pages/StationsPage/types';
import { responsiveStyles, theme } from '../../theme/theme';

export type CreateTableHeadCellProps = {
  headCell: TableHeads;
  tableType: string;
  orderBy: string;
  order: SortDirection;
  handleOrdering: (id: string) => void;
};

const tableCellStyles = responsiveStyles(theme)[0].tableCell;

const CreateTableHeadCell: React.FC<CreateTableHeadCellProps> = ({
  headCell,
  tableType,
  orderBy,
  order,
  handleOrdering,
}) => {
  const createSortHandler = (id: string) => () => {
    handleOrdering(id);
  };

  const directionOrder: 'asc' | 'desc' | undefined =
    order === 'desc' ? 'desc' : 'asc';

  return (
    <TableCell
      key={headCell.id + '-' + tableType}
      id={headCell.id}
      align={headCell.align}
      sortDirection={orderBy === headCell.query_name ? order : 'asc'}
      sx={tableCellStyles}
    >
      <TableSortLabel
        active={orderBy === headCell.id}
        direction={orderBy === headCell.id ? directionOrder : 'asc'}
        onClick={createSortHandler(headCell.query_name)}
      >
        {headCell.label}
        {orderBy === headCell.query_name ? (
          <Box component="span" sx={visuallyHidden}>
            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
          </Box>
        ) : null}
      </TableSortLabel>
    </TableCell>
  );
};

export default CreateTableHeadCell;

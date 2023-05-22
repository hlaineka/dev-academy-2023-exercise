import { useTranslation } from 'react-i18next';
import { Paper, SortDirection, Table, TableBody, styled } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import CreateTableHead from '../../components/CreateTableHead';
import { Journeys } from '../../generated/graphql';
import JourneyRow from './JourneyRow';
import { TableHeads } from './types';
import { GetPaginatedOrderedJourneys } from '../../queries/Queries';
import { JourneyTableHeads } from './constants';

type JourneyTableContainerProps = {
  orderBy: string;
  order: SortDirection;
  handleToggleOrdering: (query_name: string) => void;
  journeyPage: number;
  rowsPerJourneyPage: number;
};

const StyledTable = styled(Table)(() => ({
  tableLayout: 'fixed',
  whiteSpace: 'normal',
  maxWidth: '100vw',
  width: '100%',
}));

const JourneyTableContainer: React.FC<JourneyTableContainerProps> = ({
  orderBy,
  order,
  handleToggleOrdering,
  journeyPage,
  rowsPerJourneyPage,
}) => {
  const { t } = useTranslation();

  //query call for paginated, ordered data
  const { loading, error, data } = GetPaginatedOrderedJourneys(
    journeyPage,
    rowsPerJourneyPage,
    order,
    orderBy,
  );

  if (error) {
    console.log(data, error);
  }
  const filteredData = data?.journeys;

  const journeyTableHeads = JourneyTableHeads();

  const customJourneyTableHeads: Array<TableHeads | undefined> = [
    undefined,
    journeyTableHeads[1],
    journeyTableHeads[3],
    journeyTableHeads[6],
  ];

  const customField = journeyTableHeads.find(
    tableHead => tableHead.query_name === orderBy,
  );
  if (
    customField &&
    orderBy != 'departure_station_name' &&
    orderBy != 'return_station_name'
  ) {
    customJourneyTableHeads[0] = customField;
  }

  return (
    <>
      {loading ? (
        <div>{t('status:loading')}</div>
      ) : error ? (
        <div>{t('status:error')}</div>
      ) : (
        <TableContainer component={Paper}>
          <StyledTable aria-label="simple table">
            <CreateTableHead
              headCells={customJourneyTableHeads}
              orderBy={orderBy}
              order={order}
              tableType="journeys"
              handleOrdering={handleToggleOrdering}
            />
            <TableBody>
              {filteredData?.map((row: Journeys) => (
                <JourneyRow
                  key={`${row.id.toString()}-${
                    row.departure_station_name
                  }-journey-row`}
                  row={row}
                  customJourneyTableHeads={customJourneyTableHeads}
                />
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
      )}
    </>
  );
};

export default JourneyTableContainer;

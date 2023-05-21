import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  BoxProps,
  Collapse,
  TableCell,
  TableRow,
  styled,
} from '@mui/material';
import { TableHeads, TypedKeyJourneys } from './types';
import { GetRightCustomString } from '../../functions/helpers';
import { theme } from '../../theme/theme';

export type CollapsibleTableRowProps = {
  customJourneyTableHeads: Array<TableHeads | undefined>;
  showMore: boolean;
  row: TypedKeyJourneys;
};

const CollapsibleBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

interface StyledBoxProps extends BoxProps {
  index?: number;
  lastIndex?: number;
}

const InfoBox = styled(Box, {
  shouldForwardProp: prop => prop !== 'index' && prop !== 'lastIndex',
})<StyledBoxProps>(({ index, lastIndex }) => ({
  display: 'flex',
  padding: '1rem',
  flexWrap: 'wrap',
  ...(index === 0 && {
    [theme.breakpoints.down(1100)]: {
      paddingLeft: '.5rem',
    },
  }),
  ...(index === lastIndex && {
    [theme.breakpoints.down(1100)]: {
      paddingRight: '.5rem',
    },
  }),
}));

const FieldNameBox = styled(Box)(() => ({
  paddingRight: '.5rem',
}));

const ValueBox = styled(Box)(() => ({
  paddingLeft: '0',
  margin: '0',
}));

const CollapsibleTableRow: React.FC<CollapsibleTableRowProps> = ({
  customJourneyTableHeads,
  showMore,
  row,
}) => {
  const { t } = useTranslation();

  const RowCells = Object.entries(row)
    .map(([keyString]) => {
      if (
        keyString != 'departure_station_name' &&
        keyString != 'return_station_name' &&
        keyString != customJourneyTableHeads[0]?.query_name &&
        keyString != '__typename' &&
        keyString != 'id'
      ) {
        switch (keyString) {
          case 'Return':
            return t('journeys:return');
          case 'Departure':
            return t('journeys:departure');
          case 'covered_distance_m':
            return t('journeys:covered_distance');
          default:
            return t('journeys:duration');
        }
      }
    })
    .filter(notUndefined => notUndefined !== undefined);

  console.log(RowCells);

  return (
    <TableRow>
      <TableCell
        style={{ padding: 0 }}
        colSpan={customJourneyTableHeads.length}
      >
        <Collapse in={showMore} timeout="auto" unmountOnExit>
          <CollapsibleBox>
            {RowCells?.map((element, index) => (
              <InfoBox
                key={`${element}-${index}`}
                index={index}
                lastIndex={RowCells.length - 1}
              >
                <FieldNameBox>{`${element}:`}</FieldNameBox>
                <ValueBox>
                  {element ? GetRightCustomString(element, row) : ''}
                </ValueBox>
              </InfoBox>
            ))}
          </CollapsibleBox>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default CollapsibleTableRow;

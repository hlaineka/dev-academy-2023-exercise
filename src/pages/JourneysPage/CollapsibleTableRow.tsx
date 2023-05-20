import React from 'react';
import { Box, Collapse, TableCell, TableRow } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TableHeads, TypedKeyJourneys } from './types';
import { getRightCustomString } from '../../functions/helpers';

export type CollapsibleTableRowProps = {
  customJourneyTableHeads: Array<TableHeads | undefined>;
  showMore: boolean;
  row: TypedKeyJourneys;
};

const CollapsibleTableRow: React.FC<CollapsibleTableRowProps> = ({
  customJourneyTableHeads,
  showMore,
  row,
}) => {
  const { t } = useTranslation();

  return (
    <TableRow>
      <TableCell
        style={{ padding: 0 }}
        colSpan={customJourneyTableHeads.length}
      >
        <Collapse in={showMore} timeout="auto" unmountOnExit>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {Object.entries(row).map(([keyString], index) =>
              keyString != 'departure_station_name' &&
              keyString != 'return_station_name' &&
              keyString != customJourneyTableHeads[0]?.query_name &&
              keyString != '__typename' &&
              keyString != 'id' ? (
                <Box
                  sx={{ display: 'flex', padding: '1rem' }}
                  key={`${keyString}-${index}`}
                >
                  <Box style={{ paddingRight: '.5rem' }}>
                    {keyString === 'Return'
                      ? `${t('journeys:return')}:`
                      : keyString === 'Departure'
                      ? `${t('journeys:departure')}:`
                      : keyString === 'covered_distance_m'
                      ? `${t('journeys:covered_distance')}:`
                      : `${t('journeys:duration')}:`}
                  </Box>
                  <Box style={{ paddingLeft: '0', margin: 'auto' }}>
                    {getRightCustomString(keyString, row)}
                  </Box>
                </Box>
              ) : (
                <></>
              ),
            )}
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default CollapsibleTableRow;

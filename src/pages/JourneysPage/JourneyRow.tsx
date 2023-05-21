import React, { useState } from 'react';
import { Button, TableRow } from '@mui/material';
import { StyledTableCell } from '../../theme/theme';
import { GetRightCustomString } from '../../functions/helpers';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CollapsibleTableRow from './CollapsibleTableRow';
import { JourneyRowProps } from './types';
import { useTranslation } from 'react-i18next';

/* customJourneyTableHeads: Array of type Array<TableHeads> (all entries of 
	this array are in ./constants.tsx) with info on what columns are shown in 
	non-collapsible first row of data. The shown data depends on the order 
	data is sorted by. There is always four objects in this array:

	0: What custom data is shown, can be on of the datacolumns other than one 
	of those shown every time (departure station, return station and show more 
	button). If table is sorted by departure or return station, value is
	undefined and only three columns are shown.
	1: Departure station
	2: Return station
	3: Show more.
*/

const JourneyRow: React.FC<JourneyRowProps> = ({
  row,
  customJourneyTableHeads,
}) => {
  const [showMore, setShowMore] = useState(false);
  const { t } = useTranslation();

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const width = customJourneyTableHeads[0] ? 25 : 33;

  return (
    <>
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <>
          {customJourneyTableHeads[0] ? (
            <StyledTableCell align="left" width={width}>
              {GetRightCustomString(customJourneyTableHeads[0].label, row)}
            </StyledTableCell>
          ) : (
            <></>
          )}
          <StyledTableCell align="left" width={width}>
            {customJourneyTableHeads[1]
              ? row[customJourneyTableHeads[1].query_name]
              : ''}
          </StyledTableCell>
          <StyledTableCell align="left" width={width}>
            {customJourneyTableHeads[2]
              ? row[customJourneyTableHeads[2].query_name]
              : ''}
          </StyledTableCell>
          {!customJourneyTableHeads[0] ? (
            <StyledTableCell align="left" width={width}></StyledTableCell>
          ) : (
            <></>
          )}
          <StyledTableCell width={width}>
            <Button
              sx={{ color: '#14213D' }}
              onClick={toggleShowMore}
              aria-label={
                showMore
                  ? t('journeys:show_less').toString()
                  : t('journeys:show:more').toString()
              }
              aria-labelledby={`expandlabeldiv-${row.id}`}
            >
              {showMore ? (
                <>
                  <ExpandLessIcon />{' '}
                  <div id="expandlabeldiv" style={{ opacity: '0', width: '0' }}>
                    Show Less
                  </div>
                </>
              ) : (
                <>
                  <ExpandMoreIcon />
                  <div id="expandlabeldiv" style={{ opacity: '0', width: '0' }}>
                    Show More
                  </div>
                </>
              )}
            </Button>
          </StyledTableCell>
        </>
      </TableRow>
      <CollapsibleTableRow
        customJourneyTableHeads={customJourneyTableHeads}
        showMore={showMore}
        row={row}
      />
    </>
  );
};

export default JourneyRow;

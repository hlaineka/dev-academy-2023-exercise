import React, { useState } from 'react';
import { TableRow } from '@mui/material';
import { JourneyRowProps } from './types';
import CollapsibleTableRow from './CollapsibleTableRow';
import { StyledTableCell } from '../../theme/theme';
import { GetRightCustomString } from '../../functions/helpers';
import ShowMoreJourneyButton from './ShowMoreJourneyButton';

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
          <ShowMoreJourneyButton
            width={width}
            row={row}
            toggleShowMore={toggleShowMore}
            showMore={showMore}
          />
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

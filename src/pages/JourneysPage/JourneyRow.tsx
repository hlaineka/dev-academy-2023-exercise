import React, { useState } from 'react';
import { IconButton, TableCell, TableRow } from '@mui/material';
import { responsiveStyles, theme } from '../../theme/theme';
import { getRightCustomString } from '../../functions/helpers';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CollapsibleTableRow from './CollapsibleTableRow';
import { JourneyRowProps } from './types';

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
  const tableCellStyles = responsiveStyles(theme)[0].tableCell;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <TableRow
        key={Math.floor(Math.random() * 10000000).toString(16)}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <>
          {customJourneyTableHeads[0] ? (
            <TableCell
              align="left"
              sx={tableCellStyles}
              key={Math.floor(Math.random() * 10000000).toString(16)}
            >
              {getRightCustomString(customJourneyTableHeads[0].query_name, row)}
            </TableCell>
          ) : (
            <></>
          )}
          <TableCell
            align="left"
            sx={tableCellStyles}
            key={Math.floor(Math.random() * 10000000).toString(16)}
          >
            {customJourneyTableHeads[1]
              ? row[customJourneyTableHeads[1].query_name]
              : ''}
          </TableCell>
          <TableCell
            align="left"
            sx={tableCellStyles}
            key={Math.floor(Math.random() * 10000000).toString(16)}
          >
            {customJourneyTableHeads[2]
              ? row[customJourneyTableHeads[2].query_name]
              : ''}
          </TableCell>
          <TableCell key={Math.floor(Math.random() * 10000000).toString(16)}>
            <IconButton
              sx={{ color: '#14213D' }}
              onClick={toggleShowMore}
              key={Math.floor(Math.random() * 10000000).toString(16)}
            >
              {showMore ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </TableCell>
        </>
      </TableRow>
      <CollapsibleTableRow
        customJourneyTableHeads={customJourneyTableHeads}
        showMore={showMore}
        row={row}
        key={Math.floor(Math.random() * 10000000).toString(16)}
      />
    </>
  );
};

export default JourneyRow;

import React, { useState } from 'react';
import {
	Box,
  Button,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { JourneyRowProps } from './types';
import { responsiveStyles, theme } from '../../theme/theme';
import {
  createDistanceString,
  createDurationString,
} from '../../functions/helpers';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const JourneyRow: React.FC<JourneyRowProps> = ({
  row,
  customJourneyTableHeads,
}) => {
  const [showMore, setShowMore] = useState(false);
  const tableCellStyles = responsiveStyles(theme)[0].tableCell;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  console.log(row);

  const durationString = createDurationString(row.duration_sec);
  const distanceString = createDistanceString(row.covered_distance_m);

  return (
    <>
      <TableRow
        key={row.id?.toString()}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <>
          {customJourneyTableHeads[0] ? (
            <TableCell align="left" sx={tableCellStyles}>
              {customJourneyTableHeads[0]
                ? customJourneyTableHeads[0].query_name === 'duration_sec'
                  ? durationString
                  : customJourneyTableHeads[0].query_name ===
                    'covered_distance_m'
                  ? distanceString
                  : row[customJourneyTableHeads[0].query_name]
                : ''}
            </TableCell>
          ) : (
            <></>
          )}
          <TableCell align="left" sx={tableCellStyles}>
            {customJourneyTableHeads[1]
              ? row[customJourneyTableHeads[1].query_name]
              : ''}
          </TableCell>
          <TableCell align="left" sx={tableCellStyles}>
            {customJourneyTableHeads[2]
              ? row[customJourneyTableHeads[2].query_name]
              : ''}
          </TableCell>
          <TableCell>
            <IconButton sx={{ color: '#14213D' }} onClick={toggleShowMore}>
              {showMore ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </TableCell>
        </>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={customJourneyTableHeads.length}>
          <Collapse in={showMore} timeout="auto" unmountOnExit>
					<Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            {Object.entries(row).map(([key, value]) =>
              key != 'departure_station_name' &&
              key != 'return_station_name' &&
              key != customJourneyTableHeads[0]?.query_name &&
              key != '__typename' &&
              key != 'id' ? (
                <Box>
                  <TableCell align="left" sx={tableCellStyles} style={{paddingRight: '.5rem'}}>
                    {key === 'Return' ? 'Return:' : key === 'Departure' ? 'Departure:' : key === 'covered_distance_m' ? 'Covered distance:' : 'Duration:'}
                  </TableCell>
                  <TableCell align="left" sx={tableCellStyles} style={{paddingLeft: '0', margin: 'auto'}}>
                      {key === 'duration_sec'
                        ? durationString
                        : key === 'covered_distance_m'
                        ? distanceString
                        : value}
                  </TableCell>
									</Box>
              ) : (
                <></>
              ),
							
            )}
						</Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default JourneyRow;

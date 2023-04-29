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

  const durationString = createDurationString(row.duration_sec);
  const distanceString = createDistanceString(row.covered_distance_m);

  return (
    <>
      <TableRow
        key={Math.floor(Math.random()*10000000).toString(16)}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <>
          {customJourneyTableHeads[0] ? (
            <TableCell
              align="left"
              sx={tableCellStyles}
              key={Math.floor(Math.random()*10000000).toString(16)}
            >
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
          <TableCell
            align="left"
            sx={tableCellStyles}
            key={Math.floor(Math.random()*10000000).toString(16)}
          >
            {customJourneyTableHeads[1]
              ? row[customJourneyTableHeads[1].query_name]
              : ''}
          </TableCell>
          <TableCell
            align="left"
            sx={tableCellStyles}
            key={Math.floor(Math.random()*10000000).toString(16)}
          >
            {customJourneyTableHeads[2]
              ? row[customJourneyTableHeads[2].query_name]
              : ''}
          </TableCell>
          <TableCell key={Math.floor(Math.random()*10000000).toString(16)}>
            <IconButton
              sx={{ color: '#14213D' }}
              onClick={toggleShowMore}
              key={Math.floor(Math.random()*10000000).toString(16)}
            >
              {showMore ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </TableCell>
        </>
      </TableRow>
      <TableRow key={Math.floor(Math.random()*10000000).toString(16)}>
        <TableCell
          style={{ padding: 0 }}
          colSpan={customJourneyTableHeads.length}
          key={Math.floor(Math.random()*10000000).toString(16)}
        >
          <Collapse in={showMore} timeout="auto" unmountOnExit key={Math.floor(Math.random()*10000000).toString(16)}>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between' }}
              key={Math.floor(Math.random()*10000000).toString(16)}
            >
              {Object.entries(row).map(([key, value]) =>
                key != 'departure_station_name' &&
                key != 'return_station_name' &&
                key != customJourneyTableHeads[0]?.query_name &&
                key != '__typename' &&
                key != 'id' ? (
                  <Box
                    sx={{ display: 'flex', padding: '1rem' }}
                    key={Math.floor(Math.random()*10000000).toString(16)}
                  >
                    <Box
                      style={{ paddingRight: '.5rem' }}
                      key={Math.floor(Math.random()*10000000).toString(16)}
                    >
                      {key === 'Return'
                        ? 'Return:'
                        : key === 'Departure'
                        ? 'Departure:'
                        : key === 'covered_distance_m'
                        ? 'Covered distance:'
                        : 'Duration:'}
                    </Box>
                    <Box
                      style={{ paddingLeft: '0', margin: 'auto' }}
                      key={Math.floor(Math.random()*10000000).toString(16)}
                    >
                      {key === 'duration_sec'
                        ? durationString
                        : key === 'covered_distance_m'
                        ? distanceString
                        : value}
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
    </>
  );
};

export default JourneyRow;

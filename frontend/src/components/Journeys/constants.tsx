import { TableHeads } from './types';

export const rowsPerPageOptions = [
  { label: '10', value: 10 },
  { label: '25', value: 25 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
  { label: 'all', value: -1 },
];

export const journeyTableHeads: Array<TableHeads> = [
  {
    id: '0',
    label: 'Departure',
    query_name: 'Departure',
    align: 'left',
  },
  {
    id: '1',
    label: 'Departure station',
    query_name: 'departure_station_name',
    align: 'left',
  },
  {
    id: '2',
    label: 'Return',
    query_name: 'Return',
    align: 'left',
  },
  {
    id: '3',
    label: 'Return',
    query_name: 'return_station_name',
    align: 'left',
  },
  {
    id: '4',
    label: 'Covered distance',
    query_name: 'covered_distance_m',
    align: 'left',
  },
  {
    id: '5',
    label: 'Duration',
    query_name: 'duration_sec',
    align: 'right',
  },
];

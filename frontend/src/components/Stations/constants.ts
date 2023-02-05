import { TableHeads } from './types';

export const rowsPerPageOptions = [
  { label: '10', value: 10 },
  { label: '25', value: 25 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
  { label: 'all', value: -1 },
];

export const stationTableHeads: Array<TableHeads> = [
  {
    id: '0',
    label: 'Nimi',
    query_name: 'nimi',
    align: 'left',
  },
  {
    id: '1',
    label: 'Osoite',
    query_name: 'osoite',
    align: 'left',
  },
  {
    id: '2',
    label: 'Kaupunki',
    query_name: 'kaupunki',
    align: 'left',
  },
  {
    id: '3',
    label: 'Operaattori',
    query_name: 'operaattori',
    align: 'left',
  },
  {
    id: '4',
    label: 'Kapasiteetti',
    query_name: 'kapasiteetti',
    align: 'right',
  },
  {
    id: '5',
    label: '',
    query_name: '',
    align: 'center',
  },
];

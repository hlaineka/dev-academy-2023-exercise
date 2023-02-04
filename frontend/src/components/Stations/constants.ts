import { TableHeads } from "./types";

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
    label: 'Nimi',
    query_name: 'Nimi',
    align: 'left',
  },
  {
    id: '1',
    label: 'Osoite',
    query_name: 'Osoite',
    align: 'left',
  },
  {
    id: '2',
    label: 'Kaupunki',
    query_name: 'Kaupunki',
    align: 'left',
  },
  {
    id: '3',
    label: 'Operaattori',
    query_name: 'Operaattor',
    align: 'left',
  },
  {
    id: '4',
    label: 'Kapasiteetti',
    query_name: 'Kapasiteet',
    align: 'left',
  },
];

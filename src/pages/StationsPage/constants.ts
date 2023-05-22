import { useTranslation } from 'react-i18next';
import { TableHeads } from './types';

// for mui pagination component, selection for pagination options
export const rowsPerPageOptions = [
  { label: '10', value: 10 },
  { label: '25', value: 25 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
  { label: 'all', value: -1 },
];

export const StationTableHeads = (): Array<TableHeads> => {
  const { t } = useTranslation();
  return [
    {
      id: '0',
      label: t('stations:name'),
      query_name: 'name',
      align: 'left',
    },
    {
      id: '1',
      label: t('stations:address'),
      query_name: 'osoite',
      align: 'left',
    },
    {
      id: '2',
      label: t('stations:city'),
      query_name: 'kaupunki',
      align: 'left',
    },
    {
      id: '3',
      label: '',
      query_name: '',
      align: 'center',
    },
  ];
};

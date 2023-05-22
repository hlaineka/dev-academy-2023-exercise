import { TableHeads } from './types';
import { useTranslation } from 'react-i18next';

// for mui pagination component, selection for pagination options
export const rowsPerPageOptions = [
  { label: '10', value: 10 },
  { label: '25', value: 25 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
  { label: 'all', value: -1 },
];

export const JourneyTableHeads = (): Array<TableHeads> => {
  const { t } = useTranslation();
  return [
    {
      id: '0',
      label: t('journeys:departure'),
      query_name: 'Departure',
      align: 'left',
    },
    {
      id: '1',
      label: t('journeys:departure_station'),
      query_name: 'departure_station_name',
      align: 'left',
    },
    {
      id: '2',
      label: t('journeys:return'),
      query_name: 'Return',
      align: 'left',
    },
    {
      id: '3',
      label: t('journeys:return_station'),
      query_name: 'return_station_name',
      align: 'left',
    },
    {
      id: '4',
      label: t('journeys:covered_distance'),
      query_name: 'covered_distance_m',
      align: 'left',
    },
    {
      id: '5',
      label: t('journeys:duration'),
      query_name: 'duration_sec',
      align: 'left',
    },
    {
      id: '6',
      label: t('actions:show_more'),
      query_name: '',
      align: 'left',
    },
  ];
};

export const GetSortByOptions = (): Array<Array<string>> => {
  const { t } = useTranslation();
  return [
    ['Departure', t('journeys:departure')],
    ['Return', t('journeys:return')],
    ['covered_distance_m', t('journeys:covered_distance')],
    ['departure_station_name', t('journeys:departure_station')],
    ['duration_sec', t('journeys:duration')],
    ['return_station_name', t('journeys:return_station')],
  ];
};

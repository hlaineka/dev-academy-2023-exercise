import { useTranslation } from 'react-i18next';
import { TableHeads, TypedKeyJourneys } from '../pages/JourneysPage/types';

export const createDurationString = (duration: number): string => {
  const seconds = duration % 60;
  const minutes = Math.floor(duration / 60) % 60;
  const hours = Math.floor(duration / 3600);

  const secondsString = ('  ' + seconds.toString()).slice(-3) + 's';
  const minutesString = ('  ' + minutes.toString()).slice(-3) + 'm';
  const hoursString = ('            ' + hours.toString()).slice(-10) + 'h';

  return hoursString + minutesString + secondsString;
};

export const createDistanceString = (distance: number): string => {
  const meters = Math.floor(distance % 1000);
  const kilometers = Math.floor(distance / 1000);
  return kilometers === 0 ? meters + 'm' : kilometers + 'km ' + meters + 'm';
};

export const createTimeString = (time: Date): string => {
  const newTime = new Date(time);

  const hours = newTime.getHours();
  const twoDigitHours = ('0' + hours).slice(-2);

  const minutes = newTime.getMinutes();
  const twoDigitMinutes = ('0' + minutes).slice(-2);
  const returnable = `${newTime.getDate()}.${newTime.getMonth()}.${newTime.getFullYear()} ${twoDigitHours}:${twoDigitMinutes}`;
  return returnable;
};

export const GetRightCustomString = (
  keyString: string,
  row: TypedKeyJourneys,
) => {
  const { t } = useTranslation();

  return keyString === t('journeys:duration')
    ? createDurationString(row.duration_sec)
    : keyString === t('journeys:covered_distance')
    ? createDistanceString(row.covered_distance_m)
    : keyString === t('journeys:departure')
    ? createTimeString(row.Departure)
    : keyString === t('journeys:return')
    ? createTimeString(row.Return)
    : row[keyString];
};

export const GetCollapsibleTableRowCells = (
  row: TypedKeyJourneys,
  customJourneyTableHeads: Array<TableHeads | undefined>,
) => {
  const { t } = useTranslation();
  const RowCells = Object.entries(row)
    .map(([keyString]) => {
      if (
        keyString != 'departure_station_name' &&
        keyString != 'return_station_name' &&
        keyString != customJourneyTableHeads[0]?.query_name &&
        keyString != '__typename' &&
        keyString != 'id'
      ) {
        switch (keyString) {
          case 'Return':
            return t('journeys:return');
          case 'Departure':
            return t('journeys:departure');
          case 'covered_distance_m':
            return t('journeys:covered_distance');
          default:
            return t('journeys:duration');
        }
      }
    })
    .filter(notUndefined => notUndefined !== undefined);

  return RowCells;
};

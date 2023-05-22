import { Stations } from '../../generated/graphql';

export type TableHeads = {
  id: string;
  label: string;
  query_name: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
};

export type StationViewButtonProps = {
  data: Stations;
};

export type StationRowProps = {
  row: Stations;
};

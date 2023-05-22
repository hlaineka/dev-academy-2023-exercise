export type TableHeads = {
  id: string;
  label: string;
  query_name: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
};

export type JourneyRowProps = {
  row: TypedKeyJourneys;
  customJourneyTableHeads: Array<TableHeads | undefined>;
};

export interface TypedKeyJourneys {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

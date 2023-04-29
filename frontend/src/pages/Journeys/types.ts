import { Journeys } from '../../generated/graphql';

export type TableHeads = {
  id: string;
  label: String;
  query_name: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
};

export type JourneyRowProps = {
  row: TypedKeyJourneys;
	customJourneyTableHeads: Array<TableHeads | undefined>
};

interface TypedKeyJourneys {
	[key: string]: any;
}
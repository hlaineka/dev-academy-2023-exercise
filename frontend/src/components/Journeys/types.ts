export type Journey = {
	Departure: Date;
	Return: Date;
	covered_distance_m: number;
	departure_station_id: number;
	departure_station_name: String;
	duration_sec: number;
	id: number;
	return_station_id: number;
	return_station_name: String;
};

export type TableHeads = {
  id: string;
  label: String;
  query_name: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
};
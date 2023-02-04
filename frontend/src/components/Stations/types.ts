export type Station = {
  adress: String;
  fid: number;
  id: number;
  kapasiteetti: number;
  kaupunki: String;
  name: String;
  namn: String;
  nimi: String;
  operaattori: String;
  osoite: String;
  stad: String;
  x: number;
  y: number;
	journey_departures: number;
	journey_returns: number;
};

export type TableHeads = {
  id: string;
  label: String;
  query_name: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
};

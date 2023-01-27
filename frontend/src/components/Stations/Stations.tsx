import React from 'react';
import BasicPageLayout from '../BasicPageLayout';
import { gql, useApolloClient, useQuery } from '@apollo/client';
import { GetAllStationsQuery } from '../../generated/graphql';

type Station = {
  Adress: String;
  FID: Number;
  ID: Number;
  Kapasiteet: Number;
  Kaupunki: String;
  Name: String;
  Namn: String;
  Nimi: String;
  Operaattor: String;
  Osoite: String;
  Stad: String;
  x: Number;
  y: Number;
};

  const GET_ALL_STATIONS = gql`
    query GetAllStations {
      stations(order_by: { Name: asc }) {
        Adress
        FID
        ID
        Kapasiteet
        Kaupunki
        Name
        Namn
        Nimi
        Operaattor
        Osoite
        Stad
        x
        y
      }
    }
  `;

const Stations = () => {
	const client = useApolloClient();
	const { loading, error, data } = useQuery(GET_ALL_STATIONS);
  return (
    <BasicPageLayout pageName="Stations">
      {loading ? <div>Loading...</div> : error ? <div>Error!</div> :
			data && data.stations.map((item: Station) => <p key={item.FID.toString()}>{item.Nimi}</p>)}
    </BasicPageLayout>
  );
};
export default Stations;

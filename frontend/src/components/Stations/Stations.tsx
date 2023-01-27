import React from 'react';
import BasicPageLayout from '../BasicPageLayout';
import { gql, useApolloClient, useQuery } from '@apollo/client';
import { useGetAllStationsQuery, Stations } from '../../generated/graphql';
import StationTable from './StationTable';

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

const StationsPage = () => {
  const { loading, error, data } = useGetAllStationsQuery();
  return (
    <BasicPageLayout pageName="Stations">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error!</div>
      ) : (
				data &&
        <StationTable stations={data.stations}/>
      )}
    </BasicPageLayout>
  );
};
export default StationsPage;

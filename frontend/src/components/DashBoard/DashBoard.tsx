import { gql, useApolloClient } from '@apollo/client';
import React from 'react';
import { GetAllStationsQuery } from '../../generated/graphql';
import BasicPageLayout from '../BasicPageLayout';

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

const loadAllStations = async () => {
  const client = useApolloClient();

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

  const { data, networkStatus } = await client.query<GetAllStationsQuery>({
    query: GET_ALL_STATIONS,
  });

  if (data) {
    console.log(data);
  }
  if (networkStatus === 8) {
    console.error(data);
  }
};

const DashBoard = () => {
  loadAllStations();

  return (
    <BasicPageLayout pageName="Stations">
      <div>dadaa</div>
    </BasicPageLayout>
  );
};
export default DashBoard;

import { gql } from '@apollo/client';

export const GET_ALL_STATIONS = gql`
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

const GET_STATIONS_COUNT = gql`
  query GetStationsCount {
    stations_aggregate {
      aggregate {
        count
      }
    }
  }
`;
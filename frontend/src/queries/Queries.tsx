import { gql, useQuery } from '@apollo/client';
import { SortDirection } from '@mui/material/TableCell';
import {
  useGetStationsCountQuery,
} from '../generated/graphql';

export const GET_ALL_STATIONS = gql`
  query GetAllStations {
    stations(order_by: { nimi: asc }) {
      adress
      fid
      id
      kapasiteetti
      kaupunki
      name
      namn
      nimi
      operaattori
      osoite
      stad
      x
      y
    }
  }
`;

export const GET_PAGINATED_ORDERED_STATIONS = gql`
  query GetPaginatedOrderedStations(
    $offset: Int
    $limit: Int
    $order_by: [stations_order_by!]
  ) {
    stations(order_by: $order_by, limit: $limit, offset: $offset) {
      adress
      fid
      id
      kapasiteetti
      kaupunki
      name
      namn
      nimi
      operaattori
      osoite
      stad
      x
      y
			journey_departures
			journey_returns
    }
  }
`;

export const GET_STATIONS_COUNT = gql`
  query GetStationsCount {
    stations_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export const GetStationsCount = () => {
  const { loading, error, data } = useGetStationsCountQuery();
  return data?.stations_aggregate.aggregate?.count
    ? data?.stations_aggregate.aggregate?.count
    : 0;
};

export const GetPaginatedOrderedStations = (
  stationPage: number,
  rowsPerStationsPage: number,
  order: SortDirection,
  orderBy: String,
) => {
  const offset = stationPage * rowsPerStationsPage;
  const limit = rowsPerStationsPage;

  const returnable = useQuery(GET_PAGINATED_ORDERED_STATIONS, {
    variables: {
      offset: offset,
      limit: limit,
      order_by: {
        nimi: 'asc',
      },
    },
  });

  return returnable;
};

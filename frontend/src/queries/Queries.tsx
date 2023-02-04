import { gql, useQuery } from '@apollo/client';
import { SortDirection } from '@mui/material/TableCell';
import {
  useGetStationsCountQuery,
  useGetJourneysCountQuery,
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

export const GET_PAGINATED_ORDERED_JOURNEYS = gql`
  query GetPaginatedOrderedJourneys(
    $offset: Int
    $limit: Int
    $order_by: [journeys_order_by!]
  ) {
    journeys(order_by: $order_by, limit: $limit, offset: $offset) {
      Departure
      Return
      covered_distance_m
      departure_station_name
      duration_sec
      id
      return_station_name
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

export const GET_JOURNEYS_COUNT = gql`
  query GetJourneysCount {
    journeys_aggregate {
      aggregate {
        count
      }
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
	return (returnable);
};

export const GetStationsCount = () => {
  const { loading, error, data } = useGetStationsCountQuery();
  return data?.stations_aggregate.aggregate?.count
    ? data?.stations_aggregate.aggregate?.count
    : 0;
};

export const GetJourneysCount = () => {
  const { loading, error, data } = useGetJourneysCountQuery();
  return data?.journeys_aggregate.aggregate?.count
    ? data?.journeys_aggregate.aggregate?.count
    : 0;
};



export const GetPaginatedOrderedJourneys = (
  journeyPage: number,
  rowsPerJourneyPage: number,
  order: SortDirection,
  orderBy: string,
) => {
  const offset = journeyPage * rowsPerJourneyPage;
  const limit = rowsPerJourneyPage;

  const returnable = useQuery(GET_PAGINATED_ORDERED_JOURNEYS, {
    variables: {
      offset: offset,
      limit: limit,
      order_by: {
        [orderBy]: order,
      },
    },
  });

  return returnable;
};

import { gql, useQuery } from '@apollo/client';
import { SortDirection } from '@mui/material/TableCell';
import { DashboardData } from '../components/DashBoard/types';
import {
  useGetStationsCountQuery,
  useGetJourneysCountQuery,
  useGetTopDepartureStationsQuery,
  Stations,
  useGetTopReturnStationsQuery,
  useGetaverageStationUsageQuery,
	useGetaverageJourneysQuery,
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

export const GET_TOP_DEPARTURE_STATIONS = gql`
  query getTopDepartureStations {
    stations(order_by: { journey_departures: desc }, limit: 5) {
      id
      nimi
      journey_departures
    }
  }
`;

export const GET_average_STATION_USAGE = gql`
  query getaverageStationUsage {
    stations_aggregate {
      aggregate {
        avg {
          journey_departures
        }
      }
    }
  }
`;

export const GET_average_JOURNEYS = gql`
  query getaverageJourneys {
    journeys_aggregate {
      aggregate {
        avg {
          covered_distance_m
          duration_sec
        }
      }
    }
  }
`;

export const GET_TOP_RETURN_STATIONS = gql`
  query getTopReturnStations {
    stations(order_by: { journey_returns: desc }, limit: 5) {
      id
      nimi
      journey_returns
    }
  }
`;

export const GetPaginatedOrderedStations = (
  stationPage: number,
  rowsPerStationsPage: number,
  order: SortDirection,
  orderBy: string,
) => {
  const offset = stationPage * rowsPerStationsPage;
  const limit = rowsPerStationsPage;

  const returnable = useQuery(GET_PAGINATED_ORDERED_STATIONS, {
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

const GetTopDepartureStations = () => {
  const { loading, error, data } = useGetTopDepartureStationsQuery();

  if (loading) {
    console.log('loading');
    return null;
  } else if (error) {
    console.log('error', error);
    return null;
  } else if (data) {
    return data.stations;
  }
};

const GetTopReturnStations = () => {
  const { loading, error, data } = useGetTopReturnStationsQuery();

  if (loading) {
    console.log('loading');
    return null;
  } else if (error) {
    console.log('error', error);
    return null;
  } else if (data) {
    return data.stations;
  }
};

const GetaverageStationUsage = () => {
  const { loading, error, data } = useGetaverageStationUsageQuery();

  if (loading) {
    console.log('loading');
    return null;
  } else if (error) {
    console.log('error', error);
    return null;
  } else if (
    data &&
    data.stations_aggregate &&
    data.stations_aggregate.aggregate &&
    data.stations_aggregate.aggregate.avg &&
    data.stations_aggregate.aggregate.avg.journey_departures
  ) {
    return Math.floor(data.stations_aggregate.aggregate.avg.journey_departures);
  }
};

const GetaverageJourneys = () => {
  const { loading, error, data } = useGetaverageJourneysQuery();

  if (loading) {
    console.log('loading');
    return null;
  } else if (error) {
    console.log('error', error);
    return null;
  } else if (
    data &&
    data.journeys_aggregate &&
    data.journeys_aggregate.aggregate &&
    data.journeys_aggregate.aggregate.avg &&
    data.journeys_aggregate.aggregate.avg.covered_distance_m &&
    data.journeys_aggregate.aggregate.avg.duration_sec
  ) {
		const averageDuration = Math.floor(data.journeys_aggregate.aggregate.avg.duration_sec);
		const averageDistance = Math.floor(data.journeys_aggregate.aggregate.avg.covered_distance_m)
    return {averageDuration, averageDistance};
  }
};

export const GetDashboardData = () => {
  const topDepartureStations = GetTopDepartureStations();

  const topReturnStations = GetTopReturnStations();

  const averageStationsUsage = GetaverageStationUsage();

  const averageJourneys = GetaverageJourneys();
	const averageDuration = averageJourneys ? averageJourneys.averageDuration : null;
	const averageDistance = averageJourneys ? averageJourneys.averageDistance : null;

  return { topDepartureStations, topReturnStations, averageStationsUsage, averageDuration, averageDistance  };
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

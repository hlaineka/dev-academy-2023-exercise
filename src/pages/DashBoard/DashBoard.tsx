import { Paper } from '@mui/material';
import React from 'react';
import { GetDashboardData } from '../../queries/Queries';
import BasicPageLayout from '../../components/BasicPageLayout';
import {
  createDistanceString,
  createDurationString,
} from '../../functions/helpers';
import TopDepartures from './TopDepartures';
import TopReturns from './TopReturns';

const DashBoard = () => {
  // collecting data from multiple queries
  const dashboardData = GetDashboardData();

  return (
    <BasicPageLayout pageName="Dashboard">
      <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '3rem' }}>
        <p>
          Average distance of journey:{' '}
          {dashboardData?.averageDistance
            ? createDistanceString(dashboardData.averageDistance)
            : ''}
        </p>
        <p>
          Average duration of journey:{' '}
          {dashboardData?.averageDuration
            ? createDurationString(dashboardData.averageDuration)
            : ''}
        </p>
        <p>Average station usage: {dashboardData.averageStationsUsage}</p>
      </Paper>
      <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '3rem' }}>
        <TopDepartures
          topDepartureStations={dashboardData.topDepartureStations}
        />
      </Paper>
      <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '3rem' }}>
        <TopReturns topReturnStations={dashboardData.topReturnStations} />
      </Paper>
    </BasicPageLayout>
  );
};

export default DashBoard;

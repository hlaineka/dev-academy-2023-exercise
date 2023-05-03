import { Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { GetDashboardData } from '../../queries/Queries';
import BasicPageLayout from '../../components/BasicPageLayout';
import {
  createDistanceString,
  createDurationString,
} from '../../functions/helpers';
import TopDepartures from './TopDepartures';
import TopReturns from './TopReturns';

const DashBoardPage = () => {
  const { t } = useTranslation();

  // collecting data from multiple queries
  const dashboardData = GetDashboardData();

  return (
    <BasicPageLayout pageName="Dashboard">
      <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '3rem' }}>
        <p>
          {t('dashboard:journey_avarage')}
          {dashboardData?.averageDistance
            ? createDistanceString(dashboardData.averageDistance)
            : ''}
        </p>
        <p>
          {t('dashboard:average_duration')}
          {dashboardData?.averageDuration
            ? createDurationString(dashboardData.averageDuration)
            : ''}
        </p>
        <p>
          {t('dashboard:average_station_usage')}{' '}
          {dashboardData.averageStationsUsage}
        </p>
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

export default DashBoardPage;

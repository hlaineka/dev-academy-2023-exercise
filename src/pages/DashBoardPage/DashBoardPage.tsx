import { useTranslation } from 'react-i18next';
import { Paper, styled } from '@mui/material';
import { GetDashboardData } from '../../queries/Queries';
import BasicPageLayout from '../../components/BasicPageLayout';
import TopDepartures from './TopDepartures';
import TopReturns from './TopReturns';
import {
  createDistanceString,
  createDurationString,
} from '../../functions/helpers';

const DashboardPaper = styled(Paper)(() => ({
  padding: '2rem',
  marginBottom: '3rem',
}));

const DashBoardPage = () => {
  const { t } = useTranslation();

  // collecting data from multiple queries
  const dashboardData = GetDashboardData();

  return (
    <BasicPageLayout pageName="Dashboard">
      <DashboardPaper elevation={3}>
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
      </DashboardPaper>
      <DashboardPaper elevation={3}>
        <TopDepartures
          topDepartureStations={dashboardData.topDepartureStations}
        />
      </DashboardPaper>
      <DashboardPaper elevation={3}>
        <TopReturns topReturnStations={dashboardData.topReturnStations} />
      </DashboardPaper>
    </BasicPageLayout>
  );
};

export default DashBoardPage;

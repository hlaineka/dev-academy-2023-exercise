import BasicPageLayout from '../../components/BasicPageLayout';
import StationTable from './StationTable';

const StationsPage = () => {
  return (
    <BasicPageLayout pageName="Stations">
      <StationTable />
    </BasicPageLayout>
  );
};
export default StationsPage;

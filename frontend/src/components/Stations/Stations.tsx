import React from 'react';
import BasicPageLayout from '../BasicPageLayout';
import StationTable from './StationTable';

const StationsPage = () => {
  return (
    <BasicPageLayout pageName="Stations">
      <StationTable />
    </BasicPageLayout>
  );
};
export default StationsPage;

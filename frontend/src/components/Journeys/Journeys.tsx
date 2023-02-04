import React from 'react';
import BasicPageLayout from '../BasicPageLayout';
import JourneyTable from './JourneyTable';

const Journeys = () => {
  return (
    <BasicPageLayout pageName="Journeys">
      <JourneyTable />
    </BasicPageLayout>
  );
};
export default Journeys;

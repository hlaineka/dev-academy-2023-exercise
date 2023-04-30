import React from 'react';
import BasicPageLayout from '../../components/BasicPageLayout';
import JourneyTable from './JourneyTable';
import { useTranslation } from 'react-i18next';

const Journeys = () => {
  const { t } = useTranslation();

  return (
    <BasicPageLayout pageName={t('journeys:journeys').toString()} data-testid="journeys-container">
      <JourneyTable />
    </BasicPageLayout>
  );
};

export default Journeys;

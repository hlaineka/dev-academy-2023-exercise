import { useTranslation } from 'react-i18next';
import BasicPageLayout from '../../components/BasicPageLayout';
import JourneyTable from './JourneyTable';

const JourneysPage = () => {
  const { t } = useTranslation();

  return (
    <BasicPageLayout
      pageName={t('journeys:journeys').toString()}
      data-testid="journeys-container"
    >
      <JourneyTable />
    </BasicPageLayout>
  );
};

export default JourneysPage;

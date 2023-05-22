import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { StyledTableCell } from '../../theme/theme';
import { TypedKeyJourneys } from './types';

type ShowMoreJourneyButtonProps = {
  width: number;
  row: TypedKeyJourneys;
  toggleShowMore: () => void;
  showMore: boolean;
};

const ShowMoreJourneyButton: React.FC<ShowMoreJourneyButtonProps> = ({
  width,
  row,
  toggleShowMore,
  showMore,
}) => {
  const { t } = useTranslation();

  return (
    <StyledTableCell width={width}>
      <Button
        sx={{ color: '#14213D' }}
        onClick={toggleShowMore}
        aria-label={
          showMore
            ? t('journeys:show_less').toString()
            : t('journeys:show_more').toString()
        }
        aria-labelledby={`expandlabeldiv-${row.id}`}
      >
        {showMore ? (
          <>
            <ExpandLessIcon />{' '}
            <div id="expandlabeldiv" style={{ opacity: '0', width: '0' }}>
              {t('journeys:show_less')}
            </div>
          </>
        ) : (
          <>
            <ExpandMoreIcon />
            <div id="expandlabeldiv" style={{ opacity: '0', width: '0' }}>
              {t('journeys:show_more')}
            </div>
          </>
        )}
      </Button>
    </StyledTableCell>
  );
};

export default ShowMoreJourneyButton;

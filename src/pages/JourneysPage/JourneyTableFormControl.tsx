import { useTranslation } from 'react-i18next';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from '@mui/material';
import { GetSortByOptions } from './constants';

type JourneyTableFormControlProps = {
  orderByValue: string;
  handleOrderBy: (event: SelectChangeEvent) => void;
};

const StyledFormControl = styled(FormControl)(() => ({
  width: '20rem',
  color: '#14213D',
}));

const StyledMenuItem = styled(MenuItem)(() => ({
  color: '#14213D',
}));

const JourneyTableFormControl: React.FC<JourneyTableFormControlProps> = ({
  orderByValue,
  handleOrderBy,
}) => {
  const { t } = useTranslation();

  const sortByOptions = GetSortByOptions();

  return (
    <StyledFormControl>
      <InputLabel id="journeys-order-by">{t('tables:sort_by')}</InputLabel>
      <Select
        labelId="journeys-order-by-select-label"
        id="journeys-order-by-select"
        value={orderByValue}
        label={t('tables:sort_by')}
        onChange={handleOrderBy}
      >
        {sortByOptions.map((option: Array<string>, index) => (
          <StyledMenuItem key={`${index}-${option[1]}`} value={index}>
            {option[1]}
          </StyledMenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export default JourneyTableFormControl;

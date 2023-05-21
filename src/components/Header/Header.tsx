import AppBar from '@mui/material/AppBar';
import Navigation from '../Navigation';
import LanguageSelect from '../LanguageSelect';
import { styled } from '@mui/material';

const StyledAppBar = styled(AppBar)(() => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  height: '5rem',
  padding: '1rem 0',
  justifyContent: 'space-between',
}));

const Header = () => {
  return (
    <StyledAppBar position="static" data-testid="header">
      <Navigation />
      <LanguageSelect />
    </StyledAppBar>
  );
};
export default Header;

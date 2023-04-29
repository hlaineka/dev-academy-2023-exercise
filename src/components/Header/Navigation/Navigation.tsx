import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
  itemProps,
  ref,
) {
  return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

const Navigation = () => {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState(open);
    };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon style={{ color: '#FCA311' }} />{' '}
      </Button>
      <Drawer
        open={state}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#14213D',
          },
        }}
      >
        <Box
          sx={{
            width: 'auto',
            paddingRight: '2rem',
            backgroundColor: '#14213D',
          }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {['Dashboard', 'Journeys', 'Stations'].map(text => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={
                    text == 'Journeys'
                      ? '/journeys'
                      : text == 'Stations'
                      ? '/stations'
                      : '/'
                  }
                  sx={{ color: '#FFF' }}
                >
                  <ListItemIcon>
                    {text == 'Journeys' ? (
                      <DirectionsBikeIcon style={{ color: '#FCA311' }} />
                    ) : text == 'Stations' ? (
                      <LocationOnIcon style={{ color: '#FCA311' }} />
                    ) : (
                      <DashboardIcon style={{ color: '#FCA311' }} />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Navigation;

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { styled } from '@mui/material';

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
  itemProps,
  ref,
) {
  return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

const SelectableListItem = styled(ListItem)(() => ({
	height: '100%',
  '&.selected-item': {
    backgroundColor: '#FCA211',
    color: '#14213D',

		'& .MuiTypography-root': {
			color: '#14213D',
		},

		'& .MuiSvgIcon-root': {
			color: '#14213D !important',
		}
  },
}));

const CustomList = styled(List)(() => ({
  display: 'flex',
	padding: 0,
	height: '100%'
}));

const Navigation = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <Box
        sx={{
          width: 'auto',
          paddingRight: '2rem',
          backgroundColor: '#14213D',
					height: '5rem',
        }}
      >
        <CustomList>
          {['Dashboard', 'Journeys', 'Stations'].map((text, index) => (
            <SelectableListItem
              key={text}
              disablePadding
              onClick={() => handleListItemClick(index)}
              className={selectedIndex === index ? 'selected-item' : ''}
							data-testid={`navigation-${text}`}
            >
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
            </SelectableListItem>
          ))}
        </CustomList>
      </Box>
    </div>
  );
};

export default Navigation;

import { useNavigate } from 'react-router-dom';
import React from 'react';
import ListItem from '@mui/material/ListItem';
import List from '@mui/joy/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRightRounded';

export function SideBar() {
  let navigate = useNavigate();
  const styled = {
    width: '250px',
    height: '97vh',
    backgroundColor: 'blue',
    borderRadius: '20px',
    color: 'white'
  };
  return (
    <div>
      <List style={styled}>
        <ListItem style={{ marginTop: '90%', fontSize: '1.5rem' }}>
          <ListItemButton onClick={()=> navigate('/')}>
            <ListItemDecorator>
            </ListItemDecorator>
            <ListItemContent>DashBoard</ListItemContent>
            <KeyboardArrowRight fontSize="xl3" sx={{ color: 'red' }} />
          </ListItemButton>
        </ListItem>
        <ListItem style={{ marginTop: '5px', fontSize: '1.5rem' }}>
          <ListItemButton onClick={()=>navigate('/component')}>
            <ListItemDecorator>
            </ListItemDecorator>
            <ListItemContent>Component</ListItemContent>
            <KeyboardArrowRight fontSize="xl3" sx={{ color: 'red' }} />
          </ListItemButton>
        </ListItem>
        <ListItem style={{ marginTop: '5px', fontSize: '1.5rem' }}>
          <ListItemButton onClick={()=>navigate('/charts')}>
            <ListItemDecorator>
            </ListItemDecorator>
            <ListItemContent>Charts</ListItemContent>
            <KeyboardArrowRight fontSize="xl3" sx={{ color: 'red' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}
import { MenuOutlined } from '@mui/icons-material';
import {
  Box,
  IconButton,
  List,
  ListItem,
  Typography,
  useTheme,
} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

import HeaderContents from '../../store/HeaderContents';

export const MyDrawer = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = useCallback(
    (event) => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }

      setIsOpen(!isOpen);
    },
    [isOpen]
  );

  return (
    <>
      <IconButton color={'info'} onClick={toggleDrawer}>
        <MenuOutlined fontSize={'large'} />
      </IconButton>
      <Drawer open={isOpen} onClose={toggleDrawer} anchor={'right'}>
        <DrawerContainer>
          <List>
            {HeaderContents.map((content, idx) => {
              return (
                <a key={idx} href={content.route}>
                  <ListItem key={idx} sx={{ borderBottom: 'solid 2px white' }}>
                    <Typography variant={'h4'} color={'white'}>
                      {content.title}
                    </Typography>
                  </ListItem>
                </a>
              );
            })}
          </List>
        </DrawerContainer>
      </Drawer>
    </>
  );
};

const DrawerContainer = styled.div`
  width: 40vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 70%);
`;

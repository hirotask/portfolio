/**
 * ヘッダーのコンポーネント
 */
import { Box } from '@mui/material';
import styled from 'styled-components';
import { useMedia } from 'use-media';

import { ResponsiveMin } from '../../store/Responsive';
import { MyDrawer } from '../molecules/Drawer';
import { HeaderItemList } from '../molecules/HeaderItemList';

export const Header = () => {
  const isWide = useMedia({ minWidth: ResponsiveMin });

  return (
    <Wrapper>
      {isWide ? (
        <HeaderItemList />
      ) : (
        <Box textAlign={'right'}>
          <MyDrawer />
        </Box>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin-bottom: 80px;
  width: 100%;
`;

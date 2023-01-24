/**
 * ヘッダーのコンポーネント
 */
import { Box } from '@mui/material';
import styled from 'styled-components';
import { useMedia } from 'use-media';

import { MyDrawer } from '../molecules/Drawer';
import { HeaderItemList } from '../molecules/HeaderItemList';

export const Header = () => {
  const isWide = useMedia({ minWidth: '1100px' });

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

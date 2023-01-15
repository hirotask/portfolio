/**
 * ヘッダーのコンポーネント
 */
import styled from 'styled-components';

import { HeaderItemList } from '../molecules/HeaderItemList';

export const Header = () => {
  return (
    <Wrapper>
      <HeaderItemList />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin-bottom: 80px;
`;

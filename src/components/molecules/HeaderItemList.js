import styled from 'styled-components';

import HeaderContents from '../../store/HeaderContents';
import { HeaderItem } from '../atoms/HeaderItem';

export const HeaderItemList = () => {
  return (
    <Wrapper>
      {HeaderContents.map((content, idx) => {
        return (
          <HeaderItem key={idx} title={content.title} link={content.route} />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-around;
`;

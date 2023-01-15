import styled from 'styled-components';

import { MyIcon } from '../atoms/MyIcon';
import { DefaultContainer } from '../templates/DefaultContainer';

export const HomePage = () => {
  return (
    <DefaultContainer title='Home'>
      <Wrapper>
        <MyIcon size={350} />
        <Title>Hiroto Hashi</Title>
      </Wrapper>
    </DefaultContainer>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 100px 0;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Shadows Into Light', cursive;
  font-size: 128px;
  font-weight: bold;
  margin-left: 150px;
`;
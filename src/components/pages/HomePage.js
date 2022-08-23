import { DefaultContainer } from "../templates/DefaultContainer";
import { MyIcon } from "../atoms/MyIcon";
import styled from "styled-components";

export const HomePage = () => {
  return (
    <DefaultContainer title="Home">
      <Wrapper>
        <MyIcon size={350} />
        <Title>Hiroto Hashi</Title>
      </Wrapper>
    </DefaultContainer>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 80px 0;
`;

const Title = styled.h1`
  font-size: 128px;
  font-weight: bold;
  margin-left: 120px;
`;

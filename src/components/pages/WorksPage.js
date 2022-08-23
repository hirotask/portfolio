import { DefaultContainer } from "../templates/DefaultContainer";
import styled from "styled-components";
import { CategoryItemList } from "../molecules/CategoryItemList";

export const WorksPage = () => {
  return (
    <DefaultContainer title={"Work"}>
      <Wrapper>
        <Left>
          <CategoryItemList />
        </Left>
        <Right></Right>
      </Wrapper>
    </DefaultContainer>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Left = styled.div`
  border-right: #000 solid 2px;
  padding: 20px 30px 20px 0;
`;

const Right = styled.div``;

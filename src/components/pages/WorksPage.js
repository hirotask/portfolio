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
      </Wrapper>
    </DefaultContainer>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Left = styled.div`
  padding-right: 30px;
  border-right: #000 solid 2px;
`;

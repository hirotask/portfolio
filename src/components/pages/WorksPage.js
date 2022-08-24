import { DefaultContainer } from "../templates/DefaultContainer";
import styled from "styled-components";
import { CategoryItemList } from "../molecules/CategoryItemList";
import { WorksCard } from "../atoms/WorksCard";
import icon from "../../assets/img/myicon.png";

export const WorksPage = () => {
  return (
    <DefaultContainer title={"Work"}>
      <Wrapper>
        <Left>
          <CategoryItemList />
        </Left>
        <Right>
          <WorksCard
            imgSrc={icon}
            title={"アイコン"}
            description={"これはアイコンです"}
          ></WorksCard>
          <WorksCard
            imgSrc={icon}
            title={"アイコン"}
            description={"これはアイコンです"}
          ></WorksCard>
        </Right>
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

const Right = styled.div`
  display: flex;
  margin-left: 50px;
`;

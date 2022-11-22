import { DefaultContainer } from "../templates/DefaultContainer";
import styled from "styled-components";
import { CategoryItemList } from "../molecules/CategoryItemList";
import { WorksCarousel } from "../organisms/WorksCarousel";
import {useState} from "react";
import Works from "../../store/Works";

export const WorksPage = () => {
  const [categoryIdx, setCategoryIdx] = useState(0);

  return (
    <DefaultContainer title={"Work"}>
      <Wrapper>
        <Left>
          <CategoryItemList setCategoryIdx={setCategoryIdx} />
        </Left>
        <Right>
          <WorksCarousel categoryIdx={categoryIdx} workList={Works}/>
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
  margin-left: 50px;
`;

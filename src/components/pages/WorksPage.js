import { DefaultContainer } from "../templates/DefaultContainer";
import styled from "styled-components";
import icon from "../../assets/img/myicon.png";
import { CategoryItemList } from "../molecules/CategoryItemList";
import { WorksCarousel } from "../organisms/WorksCarousel";
import {useState} from "react";
import WorkCategory from "../../util/WorkCategory";

export const WorksPage = () => {
  const [categoryIdx, setCategoryIdx] = useState(0);

  const workList = [
    {
      category: WorkCategory.MOBILE_APPS,
      imgSrc: icon,
      title: "東北Tech道場10周年イベント",
      description: "aaaaa"
    }
  ]

  return (
    <DefaultContainer title={"Work"}>
      <Wrapper>
        <Left>
          <CategoryItemList setCategoryIdx={setCategoryIdx} />
        </Left>
        <Right>
          <WorksCarousel categoryIdx={categoryIdx} workList={workList}/>
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

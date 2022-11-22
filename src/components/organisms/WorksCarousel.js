import icon from "../../assets/img/myicon.png";
import { WorksCard } from "../atoms/WorksCard";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export const WorksCarousel = ({ categoryIdx, workList }) => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    speed: 800,
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true,
    arrow: false,
    centerPadding: 60,
  };

  return (
    <Wrapper>
      <Slick {...settings}>
        <WorksCard
          imgSrc={icon}
          title={"テスト"}
          description={"これはテストです"}
        />
        <WorksCard
          imgSrc={icon}
          title={"テスト"}
          description={"これはテストです"}
        />
        <WorksCard
          imgSrc={icon}
          title={"テスト"}
          description={"これはテストです"}
        />

        <WorksCard
          imgSrc={icon}
          title={"テスト"}
          description={"これはテストです"}
        />
      </Slick>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 40px;
  max-width: 900px;
`;

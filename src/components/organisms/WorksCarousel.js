import {WorksCard} from "../atoms/WorksCard";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export const WorksCarousel = ({workList}) => {
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

    if (workList.length >= 2) {
        return (
            <Wrapper>
                <Slick {...settings}>
                    {workList.map((work, idx) =>
                        <WorksCard
                            key={work.title + idx}
                            imgSrc={work.imgSrc}
                            title={work.title}
                            description={work.description}
                        />
                    )}
                </Slick>
            </Wrapper>

        );
    } else if (workList.length === 1) {
        return (
            <Wrapper>
                <WorksCard
                    imgSrc={workList[0].imgSrc}
                    title={workList[0].title}
                    description={workList[0].description}
                />

            </Wrapper>
        )
    } else {
        return <Wrapper/>
    }


};

const Wrapper = styled.div`
  margin-left: 40px;
  max-width: 900px;
`;

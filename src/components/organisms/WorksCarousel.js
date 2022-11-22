import {WorksCard} from "../atoms/WorksCard";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export const WorksCarousel = ({categoryIdx, workList}) => {
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
                        work.category === categoryIdx ? (
                            <WorksCard
                                key={idx}
                                imgSrc={work.icon}
                                title={work.title}
                                description={work.description}
                            />
                        ) : (
                            <></>
                        )
                    )}
                </Slick>
            </Wrapper>

        );
    } else if (workList.length === 1) {
        return (
            <Wrapper>
                {workList[0].category === categoryIdx ? (
                    <WorksCard
                        imgSrc={workList[0].icon}
                        title={workList[0].title}
                        description={workList[0].description}
                    />
                ) : (
                    <></>
                )}
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

import { HeaderItem } from "../atoms/HeaderItem";
import styled from "styled-components";

export const HeaderItemList = () => {
  return (
    <Wrapper>
      <HeaderItem title="Home" link="/portfolio/" />
      <HeaderItem title="About" link="/portfolio/about" />
      <HeaderItem title="Works" link="/portfolio/works" />
      <HeaderItem title="Contact" link="/portfolio/contact" />
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-around;
`;

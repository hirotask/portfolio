import { HeaderItem } from "../atoms/HeaderItem";
import styled from "styled-components";

export const HeaderItemList = () => {
  return (
    <Wrapper>
      <HeaderItem title="Home" link="/" />
      <HeaderItem title="About" link="/about" />
      <HeaderItem title="Works" link="/works" />
      <HeaderItem title="Contact" link="/contact" />
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-around;
`;

import { HeaderItem } from "../atoms/HeaderItem";
import styled from "styled-components";

export const HeaderItemList = () => {
  return (
    <Wrapper>
      <HeaderItem title="Home" link="/" />
      <HeaderItem title="About" link="/" />
      <HeaderItem title="Work" link="/" />
      <HeaderItem title="Contact" link="/" />
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-around;
`;

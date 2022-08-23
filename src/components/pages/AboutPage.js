/**
 * Aboutページ
 */
import { DefaultContainer } from "../templates/DefaultContainer";
import { MyIcon } from "../atoms/MyIcon";
import styled from "styled-components";
import { useState } from "react";

export const AboutPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [aboutme, _] = useState([
    "名前: 波紫寛斗",
    "所属大学: 岩手県立大学　ソフトウェア情報学部",
    "ニックネーム: hirotask",
    "誕生日: 2001年5月24日",
  ]);

  return (
    <DefaultContainer title={"About"}>
      <Wrapper>
        <MyIcon size={200} />
        <Messages>
          {aboutme.map((msg, key) => (
            <p key={key}>{msg}</p>
          ))}
        </Messages>
      </Wrapper>
    </DefaultContainer>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Messages = styled.div`
  margin-left: 120px;
  font-size: 32px;
`;

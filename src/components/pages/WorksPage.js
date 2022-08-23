import { DefaultContainer } from "../templates/DefaultContainer";
import styled from "styled-components";

export const WorksPage = () => {
  const kinds = ["Minecraft", "画像処理", "モバイルアプリ", "その他"];
  return (
    <DefaultContainer title={"Work"}>
      <Wrapper></Wrapper>
    </DefaultContainer>
  );
};

const Wrapper = styled.div``;

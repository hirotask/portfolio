/**
 * すべてのページの基礎となるコンポーネント
 */
import styled from "styled-components";
import { useEffect } from "react";
import { Header } from "../organisms/Header";

export const DefaultContainer = ({ children, title }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ページタイトルを変更する関数
  useEffect(() => {
    document.title = `${title} | Hirotask Portfolio`;
  }, [title]);

  return (
    <MainWrapper>
      <Header />
      {children}
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  max-width: 1440px;
  max-height: 100vh;
  border: #478dc0 20px solid;
  padding: 60px 120px;
  margin: 60px auto;
`;

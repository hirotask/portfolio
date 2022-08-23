/**
 * すべてのページの基礎となるコンポーネント
 */
import styled from "styled-components";
import { useEffect } from "react";

export const DefaultContainer = ({ children, title }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ページタイトルを変更する関数
  useEffect(() => {
    document.title = `${title} | Hirotask Portfolio`;
  }, [title]);

  return <MainWrapper>{children}</MainWrapper>;
};

const MainWrapper = styled.div`
  display: flex;
  border: #478dc0 20px solid;
  padding: 60px;
  margin: 30px;
`;

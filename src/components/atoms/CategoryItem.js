import styled from "styled-components";

export const CategoryItem = ({ text }) => {
  return (
    <CategoryItemText>
      <p>{text}</p>
    </CategoryItemText>
  );
};

const CategoryItemText = styled.div`
  padding: 0.5em 2em;
  margin: 2em 0;
  font-size: 18px;
  font-weight: bold;
  border: solid 2px #000000;
  overflow: hidden;
  position: relative;
  z-index: 1;
  cursor: pointer;

  &::after {
    background: rgba(125, 201, 255, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    transform-origin: left top;
    transition: 0.3s cubic-bezier(0.45, 0, 0.55, 1);
    z-index: -1;
    transform: skewY(-10deg) scale(1, 0);
    height: 140px; // ボタンの高さによって調整
  }

  &:hover::after {
    transform: skewY(-10deg) scale(1, 1);
  }

  & p {
    margin: 0;
    padding: 0;
  }
`;

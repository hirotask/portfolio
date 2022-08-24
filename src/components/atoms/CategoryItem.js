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

  & p {
    margin: 0;
    padding: 0;
  }
`;

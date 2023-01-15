/**
 * Headerにある一個一個の要素
 */
import styled from 'styled-components';

export const HeaderItem = ({ title, link }) => {
  return (
    <Item>
      <ItemLink href={link}>{title}</ItemLink>
    </Item>
  );
};

const Item = styled.li`
  transform: rotate(-20deg);
  color: #5a5a5a;
  border-bottom: 1px solid #000;
  list-style-type: none;
  font-size: 48px;
  text-decoration: none;
  font-weight: bold;
  font-family: 'Shadows Into Light', cursive;
`;

const ItemLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    background-color: rgba(125, 201, 255, 0.6);
  }
`;

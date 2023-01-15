import { useState } from 'react';
import styled from 'styled-components';

import Works from '../../store/Works';
import { WorksCarousel } from '../organisms/WorksCarousel';
import { DefaultContainer } from '../templates/DefaultContainer';

export const WorksPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [categoryIdx, _] = useState(0);

  return (
    <DefaultContainer title={'Work'}>
      <Wrapper>
        {/*<Left>*/}
        {/*  <CategoryItemList setCategoryIdx={setCategoryIdx} />*/}
        {/*</Left>*/}
        <Right>
          <WorksCarousel categoryIdx={categoryIdx} workList={Works} />
        </Right>
      </Wrapper>
    </DefaultContainer>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

// const Left = styled.div`
//   border-right: #000 solid 2px;
//   padding: 20px 30px 20px 0;
// `;

const Right = styled.div`
  margin-left: 50px;
`;

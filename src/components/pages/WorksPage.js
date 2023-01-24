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
        <WorksCarousel categoryIdx={categoryIdx} workList={Works} />
      </Wrapper>
    </DefaultContainer>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

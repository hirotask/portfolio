/**
 * Aboutページ
 */
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

import Aboutme from '../../store/Aboutme';
import Career from '../../store/Career';
import { MyIcon } from '../atoms/MyIcon';
import { DefaultContainer } from '../templates/DefaultContainer';

export const AboutPage = () => {
  return (
    <DefaultContainer title={'About'}>
      <Stack direction={'row'} justifyContent={'space-evenly'}>
        <MyIcon size={200} />
        <AboutmeContainer>
          {Aboutme.map((msg, key) => (
            <Typography key={key} variant={'body1'} fontFamily={'Arial'}>
              {msg}
            </Typography>
          ))}
          <CareerContainer>
            {Career.map((msg, key) => (
              <Typography key={key} variant={'body1'} fontFamily={'Arial'}>
                {msg}
              </Typography>
            ))}
          </CareerContainer>
        </AboutmeContainer>
      </Stack>
    </DefaultContainer>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const AboutmeContainer = styled.div`
  margin-left: 120px;
  font-size: 28px;
`;

const CareerContainer = styled.div`
  margin-top: 30px;
  color: #444444;
  font-size: 18px;
`;

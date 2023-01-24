/**
 * Aboutページ
 */
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { useMedia } from 'use-media';

import Aboutme from '../../store/Aboutme';
import Career from '../../store/Career';
import { ResponsiveWidth, SmartPhoneWidth } from '../../store/Responsive';
import { MyIcon } from '../atoms/MyIcon';
import { DefaultContainer } from '../templates/DefaultContainer';

export const AboutPage = () => {
  const isWide = useMedia({ minWidth: ResponsiveWidth });
  const isPhone = useMedia({ minWidth: SmartPhoneWidth });

  return (
    <DefaultContainer title={'About'}>
      {isWide ? (
        <Stack direction={'row'} justifyContent={'space-evenly'}>
          <MyIcon size={350} />
          <AboutmeContainer>
            {Aboutme.map((msg, key) => (
              <Typography key={key} variant={'subtitle1'} fontFamily={'Arial'}>
                {msg}
              </Typography>
            ))}
            <CareerContainer>
              {Career.map((msg, key) => (
                <Typography
                  key={key}
                  variant={'subtitle1'}
                  fontFamily={'Arial'}>
                  {msg}
                </Typography>
              ))}
            </CareerContainer>
          </AboutmeContainer>
        </Stack>
      ) : (
        <Stack
          direction={'column'}
          alignItems={'center'}
          textAlign={'center'}
          justifyContent={'space-evenly'}>
          <MyIcon size={isPhone ? 350 : 200} />
          <Stack direction={'column'} marginTop={3}>
            {Aboutme.map((msg, key) => (
              <Typography key={key} variant={'subtitle1'} fontFamily={'Arial'}>
                {msg}
              </Typography>
            ))}
          </Stack>
          <Stack direction={'column'} marginTop={3}>
            {Career.map((msg, key) => (
              <Typography
                key={key}
                variant={isPhone ? 'subtitle2' : 'body2'}
                fontFamily={'Arial'}
                color={'#444444'}>
                {msg}
              </Typography>
            ))}
          </Stack>
        </Stack>
      )}
    </DefaultContainer>
  );
};

const AboutmeContainer = styled.div`
  margin-left: 120px;
  font-size: 28px;
`;

const CareerContainer = styled.div`
  margin-top: 30px;
  color: #444444;
  font-size: 18px;
`;

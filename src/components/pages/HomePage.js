import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

import { MyIcon } from '../atoms/MyIcon';
import { DefaultContainer } from '../templates/DefaultContainer';

export const HomePage = () => {
  return (
    <DefaultContainer title='Home'>
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-evenly'}>
        <MyIcon size={350} />
        <Typography
          variant={'h1'}
          fontSize={'120px'}
          fontFamily={'Shadows Into Light'}
          fontStyle={'cursive'}
          marginLeft={'150px'}
          fontWeight={'bold'}>
          Hiroto Hashi
        </Typography>
      </Stack>
    </DefaultContainer>
  );
};

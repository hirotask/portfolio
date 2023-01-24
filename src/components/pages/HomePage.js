import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useMedia } from 'use-media';

import { ResponsiveWidth, SmartPhoneWidth } from '../../store/Responsive';
import { MyIcon } from '../atoms/MyIcon';
import { DefaultContainer } from '../templates/DefaultContainer';

export const HomePage = () => {
  const isWide = useMedia({ minWidth: ResponsiveWidth });
  const isPhone = useMedia({ minWidth: SmartPhoneWidth });

  return (
    <DefaultContainer title='Home'>
      {isWide ? (
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
      ) : (
        <Stack
          direction={'column'}
          alignItems={'center'}
          textAlign={'center'}
          justifyContent={'space-evenly'}>
          <MyIcon size={isPhone ? 350 : 200} />
          <Typography
            variant={'h1'}
            fontSize={isPhone ? '120px' : '80px'}
            fontFamily={'Shadows Into Light'}
            fontStyle={'cursive'}
            fontWeight={'bold'}>
            Hiroto Hashi
          </Typography>
        </Stack>
      )}
    </DefaultContainer>
  );
};

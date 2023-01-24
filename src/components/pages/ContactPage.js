import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { useMedia } from 'use-media';

import { ResponsiveWidth, SmartPhoneWidth } from '../../store/Responsive';
import { MyIcon } from '../atoms/MyIcon';
import { DefaultContainer } from '../templates/DefaultContainer';

export const ContactPage = () => {
  const isWide = useMedia({ minWidth: ResponsiveWidth });
  const isPhone = useMedia({ minWidth: SmartPhoneWidth });

  return (
    <DefaultContainer title={'Contact'}>
      {isWide ? (
        <Stack direction={'column'} alignItems={'center'} textAlign={'center'}>
          <MyIcon size={300} />
          <Typography
            variant={'h1'}
            fontSize={'120px'}
            fontFamily={'Shadows Into Light'}
            fontStyle={'cursive'}
            fontWeight={'bold'}>
            FOLLOW ME
          </Typography>
          <Stack direction={'row'}>
            <IconLink href={'https://github.com/hirotask'}>
              <GitHubIcon sx={{ fontSize: '70px', margin: '0' }} />
            </IconLink>
            <IconLink href={'https://twitter.com/Hirotask_'}>
              <TwitterIcon sx={{ fontSize: '70px', margin: '0' }} />
            </IconLink>
            <IconLink href={'https://www.instagram.com/hirotask_/?hl=ja'}>
              <InstagramIcon sx={{ fontSize: '70px', margin: '0' }} />
            </IconLink>
          </Stack>
        </Stack>
      ) : (
        <Stack direction={'column'} alignItems={'center'} textAlign={'center'}>
          <MyIcon size={isPhone ? 250 : 150} />
          <Typography
            variant={'h1'}
            fontSize={isPhone ? '120px' : '40px'}
            fontFamily={'Shadows Into Light'}
            fontStyle={'cursive'}
            fontWeight={'bold'}>
            FOLLOW ME
          </Typography>
          <Stack direction={isPhone ? 'row' : 'column'}>
            <IconLink href={'https://github.com/hirotask'}>
              <GitHubIcon
                sx={{ fontSize: isPhone ? '70px' : '50px', margin: '0' }}
              />
            </IconLink>
            <IconLink href={'https://twitter.com/Hirotask_'}>
              <TwitterIcon
                sx={{ fontSize: isPhone ? '70px' : '50px', margin: '0' }}
              />
            </IconLink>
            <IconLink href={'https://www.instagram.com/hirotask_/?hl=ja'}>
              <InstagramIcon
                sx={{ fontSize: isPhone ? '70px' : '50px', margin: '0' }}
              />
            </IconLink>
          </Stack>
        </Stack>
      )}
    </DefaultContainer>
  );
};

const IconLink = styled.a`
  color: inherit;
  text-decoration: none;
  margin-right: 20px;
`;

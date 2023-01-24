import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import { useMedia } from 'use-media';

import { ResponsiveWidth, SmartPhoneWidth } from '../../store/Responsive';
import Works from '../../store/Works';
import { WorksCard } from '../atoms/WorksCard';
import { WorksCarousel } from '../organisms/WorksCarousel';
import { DefaultContainer } from '../templates/DefaultContainer';

export const WorksPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [categoryIdx, _] = useState(0);
  const isWide = useMedia({ minWidth: ResponsiveWidth });
  const isPhone = useMedia({ minWidth: SmartPhoneWidth });

  return (
    <DefaultContainer title={'Work'}>
      {isWide ? (
        <Box
          alignItems={'center'}
          textAlign={'center'}
          justifyContent={'center'}>
          <WorksCarousel categoryIdx={categoryIdx} workList={Works} />
        </Box>
      ) : (
        <Stack
          direction={'column'}
          alignItems={'center'}
          textAlign={'center'}
          justifyContent={'center'}
          spacing={4}>
          {Works.map((work, idx) => {
            return (
              <WorksCard
                key={idx}
                mediaHeight={isPhone ? '250px' : '150px'}
                width={isPhone ? '450px' : '150px'}
                height={'500px'}
                imgSrc={work.imgSrc}
                title={work.title}
                description={work.description}
                link={work.link}
              />
            );
          })}
        </Stack>
      )}
    </DefaultContainer>
  );
};

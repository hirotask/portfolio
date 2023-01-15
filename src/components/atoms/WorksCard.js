import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useCallback } from 'react';

export const WorksCard = ({ imgSrc, title, description, link }) => {
  const onClickAction = useCallback(() => {
    window.open(link);
  }, [link]);

  return (
    <Card sx={{ minWidth: 300, maxWidth: 350, height: 450 }}>
      <CardActionArea onClick={onClickAction}>
        <CardMedia
          component='img'
          height='150'
          image={imgSrc}
          src={'picture'}
        />
        <CardContent>
          <Typography
            gutterBottom
            height={50}
            variant='h5'
            component='div'
            marginBottom={5}>
            {title}
          </Typography>
          <Typography variant='body1' height={260} color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
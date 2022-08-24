import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "styled-components";

export const WorksCard = ({ imgSrc, title, description, onClickAction }) => {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 350, height: 450 }}>
      <CardActionArea onClick={onClickAction}>
        <CardMedia component="img" height="140" image={imgSrc} />
        <CardContent>
          <Typography gutterBottom height={50} variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" height={260} color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

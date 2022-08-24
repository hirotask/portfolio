import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "styled-components";

export const WorksCard = ({ imgSrc, title, description, onClickAction }) => {
  return (
    <Wrapper>
      <Card sx={{ minWidth: 350, minHeight: 450 }} onClick={onClickAction}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={imgSrc} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-right: 40px;
`;

import { DefaultContainer } from "../templates/DefaultContainer";
import styled from "styled-components";
import { MyIcon } from "../atoms/MyIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export const ContactPage = () => {
  return (
    <DefaultContainer title={"Contact"}>
      <Wrapper>
        <MyIcon size={300} />
        <Title>FOLLOW ME</Title>
        <IconLink href={"https://github.com/hirotask"}>
          <GitHubIcon sx={{ fontSize: "70px", margin: "0" }} />
        </IconLink>
        <IconLink href={"https://twitter.com/Hirotask_"}>
          <TwitterIcon sx={{ fontSize: "70px", margin: "0" }} />
        </IconLink>
        <IconLink href={"https://www.instagram.com/hirotask_/?hl=ja"}>
          <InstagramIcon sx={{ fontSize: "70px", margin: "0" }} />
        </IconLink>
      </Wrapper>
    </DefaultContainer>
  );
};

const Wrapper = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
`;

const Title = styled.h1`
  font-family: "Shadows Into Light", cursive;
  font-size: 80px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const IconLink = styled.a`
  color: inherit;
  text-decoration: none;
  margin-right: 20px;
`;

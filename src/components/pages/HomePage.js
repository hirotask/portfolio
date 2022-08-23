import { DefaultContainer } from "../templates/DefaultContainer";
import { MyIcon } from "../atoms/MyIcon";

export const HomePage = () => {
  return (
    <DefaultContainer title="Home">
      <MyIcon size={350} />
    </DefaultContainer>
  );
};

import icon from "../../assets/img/myicon.png";
import Avatar from "react-avatar";

export const MyIcon = ({ size }) => {
  return (
    <Avatar
      size={size}
      name={"アイコン"}
      round
      color={"#ddd"}
      alt={"アイコン"}
      src={icon}
    />
  );
};

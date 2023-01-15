import Avatar from 'react-avatar';

import icon from '../../assets/img/myicon.png';

export const MyIcon = ({ size }) => {
  return (
    <Avatar
      size={size}
      name='アイコン'
      round
      color='#ddd'
      alt='アイコン'
      src={icon}
    />
  );
};

import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IcBackDark, IcBackLight} from '../../assets';
const IconOnly = props => {
  const {onPress, icon} = props;
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IcBackDark />;
    }
    if (icon === 'back-light') {
      return <IcBackLight />;
    }
    return <IcBackDark />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

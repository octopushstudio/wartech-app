import React from 'react';
import {TouchableOpacity} from 'react-native';
import {BundlingFonts as bf} from './../../assets';
import {Input, Item} from 'native-base';
import {Vector_Icon} from 'react-native-vector-icons/FontAwesome5Pro';

const CustomInputText = (props) => {
  const {leftIcon, rightIcon, onPressRight} = props;
  return (
    <Item>
      {leftIcon ? (
        <Vector_Icon name={leftIcon} size={20} color={'#B3B3B3'} />
      ) : null}
      <Input
        {...props}
        style={bf.pop_medium_12}
        placeholderTextColor="#A9A9A9"
      />
      {rightIcon ? (
        <TouchableOpacity onPress={onPressRight}>
          <Vector_Icon name={rightIcon} size={20} color={'#B3B3B3'} />
        </TouchableOpacity>
      ) : null}
    </Item>
  );
};
export default CustomInputText;

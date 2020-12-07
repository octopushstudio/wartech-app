import React, {useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import CustomText from '../../CustomText';
import Gap from '../../Gap';

const SelectedPage = (props) => {
  const {title, data, callbackData} = props;
  const [btnStyleOnPress, setbtnStyleOnPress] = useState({
    bgColor: 'white',
  });

  const onPressIn = (item) => {
    callbackData(item);
  };

  return (
    <View style={styles.container}>
      <CustomText size="xtralarge" weight="bold">
        {title}
      </CustomText>
      <Gap height={10} />
      {data.map((item, index) => (
        <TouchableOpacity
          key={'key' + index}
          onPressIn={() => onPressIn(item)}
          style={styles.item(btnStyleOnPress)}>
          <CustomText size="medium" weight="regular">
            {item.desc}
          </CustomText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SelectedPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  item: (styleProps) => ({
    backgroundColor: styleProps.bgColor,
    padding: 10,
  }),
  onPressIn: {
    backgroundColor: 'yellow',
  },
});

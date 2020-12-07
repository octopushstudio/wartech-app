import React, {Fragment, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors} from '../../../constants/Colors';
import {fonts} from '../../../utils';
import {Gap} from '../../../components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Pecel} from '../../../assets';
import ImagePicker from 'react-native-image-picker';

const UploadImageField = (props) => {
  const {photo} = props;
  const [photoArr, setPhotoArr] = useState(photo);
  const [count, setCount] = useState(0);

  const options = {
    width: 300,
    height: 300,
    quality: 0.5,
    title: 'Pilih Foto',
    // customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const openImagePicker = () => {
    ImagePicker.showImagePicker(options, (response) => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        const source = 'data:image/jpeg;base64,' + response.data;

        // const source = response.data;
        photoArr.push({img: source, name: response.fileName});
        setCount(count + 1);
      }
    });
  };

  return (
    <View>
      <Text style={styles.label}>Foto Produk</Text>
      <Gap height={6} />
      <View style={{flexDirection: 'row'}}>
        {photoArr.map((item, i) => (
          <Fragment key={'key' + i}>
            <Image source={{uri: item.img}} style={styles.image} />
            <Gap width={15} />
          </Fragment>
        ))}
        {photoArr.length >= 4 ? null : (
          <TouchableOpacity
            onPress={() => openImagePicker()}
            activeOpacity={0.5}>
            <View style={styles.box}>
              <Icon name="plus" size={18} />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default UploadImageField;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
  box: {
    width: 70,
    height: 70,
    backgroundColor: '#E9E9E9',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
});

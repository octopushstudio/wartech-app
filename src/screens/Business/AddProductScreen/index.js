import React, {useEffect, useRef, useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {StyleSheet} from 'react-native';
import {
  CustomContainer,
  CustomInput,
  Gap,
  CustomBody,
  UploadImageField,
  CustomText,
  CustomTextArea,
  CustomButton,
  CustomHeader,
  SelectedPage,
  CustomSelectedButton,
} from '../../../components';
import {useForm} from '../../../utils';
import {Fire} from '../../../config';

const AddProductScreen = () => {
  // Use Ref :
  const RBSheetRef = useRef();
  // Data
  const [dataReady, setDataReady] = useState(false);
  const [form, setForm] = useForm({
    productName: '',
    photo: [],
    productDesc: '',
    price: '',
    sale: '',
    category: '',
  });

  const addProduct = () => {
    const urlProduct = 'products';

    Fire.database()
      .ref(urlProduct)
      .push(form)
      .then((res) => {
        console.log('Product created successfully');
        console.log("Form : ", form);
      })
      .catch((err) => {
        console.log(err.message);
        // showError(err.message);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setDataReady(true);
    }, 2000);
  }, []);

  const onSubmit = () => {
    console.log('Form : ', form.photo);
    addProduct();
  };

  const selectCategory = () => {
    RBSheetRef.current.open();
  };

  return (
    <CustomContainer>
      <CustomHeader title="Tambah Produk" />
      <CustomBody type={'medium'}>
        <CustomInput
          errorType="normal"
          label="Nama Product"
          value={form.productName}
          onChangeText={(value) => {
            setForm('productName', value);
          }}
        />
        <Gap height={30} />
        {dataReady ? (
          <>
            <UploadImageField photo={form.photo} />
            <Gap height={30} />
          </>
        ) : null}
        <CustomTextArea
          errorType="normal"
          label="Deskripsi Produk"
          value={form.productDesc}
          onChangeText={(value) => {
            setForm('productDesc', value);
          }}
        />
        <Gap height={30} />
        <CustomInput
          errorType="normal"
          label="Harga "
          keyboardType="numeric"
          value={form.price.toString()}
          onChangeText={(value) => {
            setForm('price', value);
          }}
        />
        <Gap height={30} />
        <CustomInput
          label="Diskon"
          keyboardType="numeric"
          value={form.sale}
          onChangeText={(value) => {
            setForm('sale', value.toString());
          }}
        />
        <Gap height={30} />
        <CustomSelectedButton
          label="Kategori"
          value={form.category}
          onPress={() => selectCategory()}
        />
        <Gap height={30} />
        <CustomButton title="Simpan" onPress={() => onSubmit()} />
        <Gap height={90} />
      </CustomBody>
      {/* BottomSheet */}
      <RBSheet
        ref={RBSheetRef}
        height={300}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}>
        <SelectedPage
          title="Kategori"
          value={form.category}
          data={[{desc: 'Hello'}, {desc: 'Makanan'}, {desc: 'Minuman'}]}
          callbackData={(value) => {
            setForm('category', value.desc);
            RBSheetRef.current.close();
          }}
        />
      </RBSheet>
    </CustomContainer>
  );
};

export default AddProductScreen;

const styles = StyleSheet.create({});

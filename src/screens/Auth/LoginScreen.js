import React from 'react';
import {StyleSheet} from 'react-native';
import {
  CustomBody,
  CustomButton,
  CustomContainer,
  CustomInput,
  Gap,
  Link,
  CustomToast,
} from '../../components';
import {useForm} from '../../utils';
import {authenticate} from '../../services/UserServices';

// Constant :
const validator = require('email-validator');

// Functional Component :
const LoginScreen = () => {
  const [indicator, setIndicator] = useForm({
    email: false,
    password: false,
  });
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onLogin = () => {
    let check = validator.validate(form.email);
    if (!check) {
      setIndicator('email', true);
    } else {
      // Jika Email valid
      setIndicator('email', false);
    }
  };

  testLogin = () => {
    authenticate(form, (callback) => {
      console.log("ini callback : ", callback);
      if (callback.status === 'success') {
        CustomToast({
          type: 'success',
          text: 'Success login!',
        });
      } else {
        CustomToast({
          type: 'danger',
          text: 'Failed login!',
        });
      }
    });
  }

  return (
    <CustomContainer>
      <CustomBody type={'medium'}>
        <CustomInput
          isError={indicator.email}
          errorType="email"
          label="Email Address"
          value={form.email}
          onChangeText={(value) => {
            setForm('email', value);
          }}
        />
        <Gap height={30} />
        <CustomInput
          label="Kata Sandi"
          value={form.password}
          onChangeText={(value) => {
            setForm('password', value);
          }}
        />
        <Gap height={10} />
        <Link
          title="Lupa Kata Sandi"
          size={12}
          //   onPress={() => navigation.navigate('Register')}
        />
        <Gap height={25} />
        <CustomButton title="Masuk" onPress={() => testLogin()} />
      </CustomBody>
    </CustomContainer>
  );
};

export default LoginScreen;

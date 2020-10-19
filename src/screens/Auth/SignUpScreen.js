import React, {useState} from 'react';
import {
  CustomBody,
  CustomButton,
  CustomContainer,
  CustomInput,
  Gap,
  CustomToast,
} from '../../components';
import {useForm} from '../../utils';
import {CheckBox} from '@ui-kitten/components';

// Constant :
const validator = require('email-validator');

// Functional Component :
const SignUpScreen = () => {
  const [checked, setChecked] = useState(false);
  const [indicator, setIndicator] = useForm({
    email: false,
    password: false,
  });
  const [form, setForm] = useForm({
    fullName: '',
    email: '',
    password1: '',
    password2: '',
  });

  const onSubmit = () => {
    let check = validator.validate(form.email);
    if (!check) {
      setIndicator('email', true);
    } else {
      setIndicator('email', false);
      CustomToast({
        type: 'success',
        text: 'Success login!',
      });
    }
  };

  return (
    <CustomContainer>
      <CustomBody type={'medium'}>
        <CustomInput
          label="Nama Lengkap"
          value={form.fullName}
          onChangeText={(value) => {
            setForm('fullName', value);
          }}
        />
        <Gap height={30} />
        <CustomInput
          label="Email"
          isError={indicator.email}
          errorType="email"
          value={form.email}
          onChangeText={(value) => {
            setForm('email', value);
          }}
        />
        <Gap height={30} />
        <CustomInput
          label="Kata Sandi"
          value={form.password1}
          onChangeText={(value) => {
            setForm('password1', value);
          }}
        />
        <Gap height={30} />
        <CustomInput
          label="ulangi Sandi"
          value={form.password2}
          onChangeText={(value) => {
            setForm('password2', value);
          }}
        />
        <Gap height={10} />
        <CheckBox
          checked={checked}
          onChange={(nextChecked) => setChecked(nextChecked)}>
          {`Saya menerima syarat & ketentuan`}
        </CheckBox>
        <Gap height={25} />
        <CustomButton title="Masuk" onPress={() => onSubmit()} />
      </CustomBody>
    </CustomContainer>
  );
};

export default SignUpScreen;

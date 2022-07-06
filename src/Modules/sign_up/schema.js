/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const signUpSchema = () =>
  yup.object().shape({
    account: yup.string().required('Account is Required.').min(5, 'Account is Too Short.'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
    email: yup.string().email().required('Email is Required.'),
    phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid')
  })

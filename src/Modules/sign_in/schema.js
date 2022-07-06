/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import * as yup from 'yup'

export const signInSchema = () =>
  yup.object().shape({
    account: yup.string().required('Account is Required.'),
    password: yup
      .string()
      .required('Password is Required.')
  })

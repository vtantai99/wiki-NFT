import { schemaRequired } from 'Utils'
import * as yup from 'yup'

export const Schema = (name) => yup.object().shape({
  collectDes: yup
    .string()
    .required(schemaRequired(name))
})

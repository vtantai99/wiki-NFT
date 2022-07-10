import { schemaRequired } from 'Utils'
import * as yup from 'yup'

export const Schema = (name) => yup.object().shape({
  tags: yup
    .string()
    .required(schemaRequired(name))
})

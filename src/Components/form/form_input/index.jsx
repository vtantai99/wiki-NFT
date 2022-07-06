import React from 'react'
import { Input } from 'antd'
import { useController, useFormContext } from 'react-hook-form'
import styled from 'styled-components'
import { FormItemStyled } from './styled'

const WrapperLabel = styled.div`
  width: 100%;
  font-size: 13px;
`

const FormInput = ({ label, name, rules, defaultValue = '', wrapperProps, type = '', ...rest }) => {
  const { control } = useFormContext()
  const {
    field: { onChange, value },
    fieldState: { error }
  } = useController({ name, control, rules, defaultValue })

  return (
    <FormItemStyled
      {...wrapperProps}
      label={label && <WrapperLabel>{label}</WrapperLabel>}
      validateStatus={error ? 'error' : ''}
      help={error?.message}
    >
      {type === 'password' ? (
        <Input.Password onChange={onChange} value={value} {...rest} />
      ) : (
        <Input onChange={onChange} value={value} {...rest} />
      )}
    </FormItemStyled>
  )
}

export default FormInput

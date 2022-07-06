/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useState } from 'react'
import { Input } from 'antd'
import { useController, useFormContext } from 'react-hook-form'
import styled from 'styled-components'
import { FormItemStyled } from './styled'

const WrapperLabel = styled.div`
  width: 100%;
  font-size: 13px;
`

const FormTextArea = ({
  label,
  name,
  rules,
  defaultValue = '',
  wrapperProps,
  total,
  showTextCount = true,
  ...rest
}) => {
  const { control } = useFormContext()
  const {
    field: { onChange, value },
    fieldState: { error }
  } = useController({ name, control, rules, defaultValue })

  const handleChange = (e) => {
    const val = e.target.value
    onChange(val)
  }

  return (
    <FormItemStyled
      {...wrapperProps}
      label={label && <WrapperLabel>{label}</WrapperLabel>}
      help={error?.message}
      validateStatus={error ? 'error' : ''}
    >
      <Input.TextArea onChange={handleChange} value={value} {...rest} />
    </FormItemStyled>
  )
}

export default FormTextArea

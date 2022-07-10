/* eslint-disable react/prop-types */
import React, { useCallback, useState, useMemo, useEffect } from 'react'
import { Form, Upload, ConfigProvider } from 'antd'
import { useController, useFormContext } from 'react-hook-form'
import styled from 'styled-components'
import { PlusOutlined } from '@ant-design/icons'
import axios from 'axios'

import { getS3PresinedUrl } from 'Apis'

const FILE_SIZE = 10 // 10mb
const FILE_FORMATS = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']

const WrapperFormItem = styled(Form.Item)`
  height: max-content;
  width: 100%;
  margin-bottom: 10px;

  .ant-input {
    min-height: 38px;
    border-radius: 4px;
  }

  .ant-form-item-label {
    font-size: 14px;
    overflow: unset;
    white-space: unset;
  }

  .ant-form-item-children-icon {
	  display: none;
  }

  .ant-upload-list-item-info {
    font-size: .5rem;
  }
`

const WrapperLabel = styled.div`
  width: 100%;
  font-size: 13px;
`

const FormUploadImage = ({
  label,
  name,
  rules,
  defaultValue = '',
  size = FILE_SIZE,
  sizeRequired = '10240 KB',
  ...rest
}) => {
  const { control, setError, setValue, clearErrors, formState: { errors } } = useFormContext()
  const { field: { onChange, value }, fieldState: { error } } = useController({ name, control, rules, defaultValue })
  const [files, setFiles] = useState([])

  const handleChange = useCallback(({ fileList }) => {
    setFiles(fileList)
  }, [])

  const uploadImage = useCallback(async (options) => {
    const { onSuccess, onError, file } = options
    setValue('file', file)
    const fileList = [{ fileName: file.name, fileType: file.type }]
    const config = {
      headers: { 'content-type': file.type }
    }
    try {
      if (!FILE_FORMATS.includes(file.type)) {
        onError('Error')
        setError(name, {
          type: 'manual',
          message: 'error_message:validation.incorrect_file_type'
        })
      } else if (file.size / 1024 > size * 1024) {
        onError('Error')
        setError(name, {
          type: 'manual',
          message: 'error_message:validation.max_file_size'
        })
      } else {
        const { data } = await getS3PresinedUrl({ fileList })
        await axios.put(data[0].preSignedURL, file, config)
        onChange(data[0].url)
        onSuccess('Ok')
      }
    } catch (err) {
      onError({ err })
    }
  }, [files])

  useEffect(() => {
    if (value) {
      setFiles([{ url: value }])
    } else {
      setFiles([])
    }
  }, [value])

  useEffect(() => {
    if (error) {
      setError(name, {
        type: 'manual',
        message: 'error_message:validation.max_file_size'
      })
    }
  }, [])

  const uploadButton = useMemo(() => (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8, fontSize: '.7rem' }}>Upload image</div>
    </div>
  ), [])

  return (
    <WrapperFormItem
      label={label && <WrapperLabel>{label}</WrapperLabel>}
      help={error?.message || errors.file?.message}
      validateStatus={error || errors.file ? 'error' : ''}
    >
      <ConfigProvider>
        <Upload
          accept="image/png,image/jpg,image/jpeg,image/gif"
          onChange={handleChange}
          customRequest={uploadImage}
          onRemove={() => {
            onChange('')
            setValue('file', null)
            clearErrors([name, 'file'])
          }}
          listType="picture-card"
          fileList={files}
          {...rest}
        >
          {files.length > 0 ? null : uploadButton}
        </Upload>
      </ConfigProvider>
    </WrapperFormItem>
  )
}

export default FormUploadImage

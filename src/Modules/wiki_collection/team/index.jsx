import { CopyOutlined, DingtalkOutlined, InfoCircleOutlined, LinkedinOutlined, ShareAltOutlined, TwitterOutlined } from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import { message } from 'antd'
import { BoxEdit, FormInput, FormUploadImage, Image, TextNormal } from 'Components'
import { useWikiCollect } from 'Hooks'
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { IMAGE_DEFAULT } from '../store/text'
import { Schema } from './schema'
import { Wrapper } from './styled'

const Team = () => {
  // const form = useForm({
  //   resolver: yupResolver(Schema('collectDes'))
  // })
  const form = useForm()
  const { handleSubmit, setValue } = form

  const [isEdit, setIsEdit] = useState(false)

  const { changeTeamAction, team } = useWikiCollect()
  const { data, isSubmitting } = team

  const onSubmit = (formData) => {
    changeTeamAction({ data: formData, name: 'notable holders', callback: () => setIsEdit(false) })
  }

  const setInitData = () => {
    setValue('image', data.image)
    setValue('name', data.name)
    setValue('attribute', data.attribute)
    setValue('title', data.title)
  }

  useEffect(() => {
    if (data) {
      setInitData()
    }
  }, [data])

  const onRestore = () => setInitData()
  const onClose = () => setIsEdit(false)
  const onOpenForm = () => setIsEdit(true)

  return (
    <BoxEdit
      marginTop={20}
      padding="5px 10px"
      minHeight={70}
      isSubmitting={isSubmitting}
      isEdit={isEdit}
      onSubmit={handleSubmit(onSubmit)}
      onRestore={onRestore}
      onClose={onClose}
      onOpenForm={onOpenForm}
    >
      <TextNormal fontWeight="fw_700">Team:</TextNormal>
      <Wrapper>
        <FormProvider {...form}>
          <div className="team__item">
            {isEdit ? (
              <FormUploadImage name="image" />
            ) : (
              <Image
                className="team__item__image"
                style={{ objectFit: 'cover', borderRadius: 10 }}
                width={200}
                height={200}
                src={data.image}
              />
            )}
            <TextNormal
              fontSize="size_64"
              fontWeight="fw_900"
              color="text_blue_dark"
              textCenter
              marginTop={40}
              marginBottom={20}
              className="team__item__name"
            >
              {isEdit ? <FormInput name="name" /> : data.name}
            </TextNormal>
            <TextNormal fontWeight="fw_500" color="text_blue_dark" textCenter>
              {isEdit ? <FormInput name="attribute" /> : data.attribute}
            </TextNormal>
            <TextNormal fontWeight="fw_500" color="text_blue_dark" textCenter>
              {isEdit ? <FormInput name="title" /> : data.title}
            </TextNormal>
            <div className="team__item__social">
              <TwitterOutlined />
              <LinkedinOutlined />
            </div>
          </div>
        </FormProvider>
      </Wrapper>
    </BoxEdit>
  )
}

export default Team

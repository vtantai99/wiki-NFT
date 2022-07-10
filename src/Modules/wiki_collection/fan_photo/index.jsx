import { message } from 'antd'
import { BoxEdit, FormUploadImage, Image, TextNormal } from 'Components'
import { useWikiCollect } from 'Hooks'
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Wrapper } from './styled'

const FanPhotos = () => {
  const form = useForm()
  const { handleSubmit, setValue, watch } = form

  const { code } = watch()

  const [isEdit, setIsEdit] = useState(false)

  const { changeFanPhotoAction, fanPhoto } = useWikiCollect()
  const { data, isSubmitting } = fanPhoto

  const onSubmit = (formData) => {
    changeFanPhotoAction({ data: formData, name: 'fan photo', callback: () => setIsEdit(false) })
  }

  const setInitData = () => {
    setValue('image1', data.image1)
    setValue('image2', data.image2)
    setValue('image3', data.image3)
    setValue('image4', data.image4)
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
      <TextNormal fontWeight="fw_700">Fan photo:</TextNormal>
      <Wrapper>
        <FormProvider {...form}>
          <div className="fanPhoto__item">
            {isEdit ? (
              <FormUploadImage name="image1" />
            ) : (
              <Image
                style={{ objectFit: 'cover', borderRadius: 10 }}
                src={data.image1}
              />
            )}
          </div>
          <div className="fanPhoto__item">
            {isEdit ? (
              <FormUploadImage name="image2" />
            ) : (
              <Image
                style={{ objectFit: 'cover', borderRadius: 10 }}
                src={data.image2}
              />
            )}
          </div>
          <div className="fanPhoto__item">
            {isEdit ? (
              <FormUploadImage name="image3" />
            ) : (
              <Image
                style={{ objectFit: 'cover', borderRadius: 10 }}
                src={data.image3}
              />
            )}
          </div>
          <div className="fanPhoto__item">
            {isEdit ? (
              <FormUploadImage name="image4" />
            ) : (
              <Image
                style={{ objectFit: 'cover', borderRadius: 10 }}
                src={data.image4}
              />
            )}
          </div>
        </FormProvider>
      </Wrapper>
    </BoxEdit>
  )
}

export default FanPhotos

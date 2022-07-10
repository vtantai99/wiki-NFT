
import { BoxEdit, FormInput, FormUploadImage, Image, TextNormal } from 'Components'
import { useWikiCollect } from 'Hooks'
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Wrapper } from './styled'

const SwagForSale = () => {
  const form = useForm()
  const { handleSubmit, setValue } = form

  const [isEdit, setIsEdit] = useState(false)

  const { changeSwagAction, swag } = useWikiCollect()

  const { data, isSubmitting } = swag

  const onSubmit = (formData) => {
    changeSwagAction({ data: formData, name: 'swag for sale', callback: () => setIsEdit(false) })
  }

  const setInitData = () => {
    setValue('image', data.image)
    setValue('des', data.des)
    setValue('price', data.price)
    setValue('brand', data.brand)
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
      <TextNormal fontWeight="fw_700">Swag for sale:</TextNormal>
      <Wrapper>
        <FormProvider {...form}>
          <div className="swag">
            {isEdit ? (
              <FormUploadImage name="image" />
            ) : (
              <Image
                className="swag__image"
                style={{ objectFit: 'cover', borderRadius: 10 }}
                width={300}
                height={350}
                src={data.image}
              />
            )}
            <TextNormal marginTop={20} className="swag__name">
              {isEdit ? (
                <FormInput name="des" />
              ) : data.des}
            </TextNormal>
            <TextNormal marginBottom={5} marginTop={5} fontWeight="fw_900">
              {isEdit ? <FormInput name="price" /> : `$${data.price}`}
            </TextNormal>
            <TextNormal>{isEdit ? <FormInput name="brand" /> : data.brand}</TextNormal>
          </div>
        </FormProvider>
      </Wrapper>
    </BoxEdit>
  )
}

export default SwagForSale

import { yupResolver } from '@hookform/resolvers/yup'
import { BoxEdit, FormInput, FormTextArea, FormUploadImage, TextNormal } from 'Components'
import { useWikiCollect } from 'Hooks'
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Schema } from './schema'

const CollectionDes = () => {
  const form = useForm({
    resolver: yupResolver(Schema('collectDes'))
  })
  const { handleSubmit, setValue } = form

  const [isEdit, setIsEdit] = useState(false)

  const { collectDes, changeCollectDesAction } = useWikiCollect()
  const { data, isSubmitting } = collectDes

  const onSubmit = (formData) => {
    const { collectDes } = formData
    changeCollectDesAction({ data: collectDes, name: 'collection description', callback: () => setIsEdit(false) })
  }

  const setInitData = () => setValue('collectDes', data)

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
      minHeight={250}
      isSubmitting={isSubmitting}
      isEdit={isEdit}
      onSubmit={handleSubmit(onSubmit)}
      onRestore={onRestore}
      onClose={onClose}
      onOpenForm={onOpenForm}
    >
      {isEdit ? (
        <FormProvider {...form}>
          <form>
            <FormTextArea name="collectDes" rows={6} />
          </form>
        </FormProvider>
      ) : (
        <TextNormal style={{ textAlign: 'center' }}>{data}</TextNormal>
      )}
    </BoxEdit>
  )
}

export default CollectionDes

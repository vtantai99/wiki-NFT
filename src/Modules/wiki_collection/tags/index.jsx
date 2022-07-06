import { yupResolver } from '@hookform/resolvers/yup'
import { BoxEdit, FormInput, FormTextArea, TextNormal } from 'Components'
import { useWikiCollect } from 'Hooks'
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Schema } from './schema'

const Tags = () => {
  const form = useForm({
    resolver: yupResolver(Schema('collectDes'))
  })
  const { handleSubmit, setValue } = form

  const [isEdit, setIsEdit] = useState(false)

  const { tags, changeTagsAction } = useWikiCollect()
  const { data, isSubmitting } = tags

  const onSubmit = (formData) => {
    const { tags } = formData
    changeTagsAction({ data: tags, name: 'tags', callback: () => setIsEdit(false) })
  }

  const setInitData = () => setValue('tags', data)

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
      {isEdit ? (
        <FormProvider {...form}>
          <form>
            <FormTextArea name="tags" rows={6} />
          </form>
        </FormProvider>
      ) : (
        <TextNormal style={{ textAlign: 'center' }}>{data}</TextNormal>
      )}
    </BoxEdit>
  )
}

export default Tags

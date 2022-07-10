import { BoxEdit, FormInput, TextNormal } from 'Components'
import { useWikiCollect } from 'Hooks'
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Wrapper } from './styled'

const Trivia = () => {
  const form = useForm()
  const { handleSubmit, setValue } = form

  const [isEdit, setIsEdit] = useState(false)

  const { changeTriviaAction, trivia } = useWikiCollect()
  const { data, isSubmitting } = trivia

  const onSubmit = (formData) => {
    changeTriviaAction({ data: formData, name: 'fan photo', callback: () => setIsEdit(false) })
  }

  const setInitData = () => {
    setValue('text1', data.text1)
    setValue('text2', data.text2)
    setValue('text3', data.text3)
    setValue('text4', data.text4)
    setValue('text5', data.text5)
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
      <TextNormal fontWeight="fw_700">Trivia</TextNormal>
      <Wrapper>
        <FormProvider {...form}>
          <div className="faq">
            {isEdit ? (
              <FormInput name="text1" />
            ) : (
              <TextNormal textCenter fontSize="size_26" fontWeight="fw_700">{data.text1}</TextNormal>
            )}
          </div>
          <div className="faq">
            {isEdit ? (
              <FormInput name="text2" />
            ) : (
              <TextNormal textCenter fontSize="size_26" fontWeight="fw_700">{data.text2}</TextNormal>
            )}
          </div>
          <div className="faq">
            {isEdit ? (
              <FormInput name="text3" />
            ) : (
              <TextNormal textCenter fontSize="size_26" fontWeight="fw_700">{data.text3}</TextNormal>
            )}
          </div>
          <div className="faq">
            {isEdit ? (
              <FormInput name="text4" />
            ) : (
              <TextNormal textCenter fontSize="size_26" fontWeight="fw_700">{data.text4}</TextNormal>
            )}
          </div>
                    <div className="faq">
            {isEdit ? (
              <FormInput name="text5" />
            ) : (
              <TextNormal textCenter fontSize="size_26" fontWeight="fw_700">{data.text5}</TextNormal>
            )}
          </div>
        </FormProvider>
      </Wrapper>
    </BoxEdit>
  )
}

export default Trivia

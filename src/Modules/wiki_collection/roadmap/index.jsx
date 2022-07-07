import { yupResolver } from '@hookform/resolvers/yup'
import { BoxEdit, FormTextArea, TextNormal } from 'Components'
import { useWikiCollect } from 'Hooks'
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Schema } from './schema'

const RoadMap = () => {
  const form = useForm({
    resolver: yupResolver(Schema('collectDes'))
  })
  const { handleSubmit, setValue } = form

  const [isEdit, setIsEdit] = useState(false)

  const { roadMap, changeRoadMapAction } = useWikiCollect()
  const { data, isSubmitting } = roadMap

  const onSubmit = (formData) => {
    const { roadMap } = formData
    changeRoadMapAction({ data: roadMap, name: 'road map', callback: () => setIsEdit(false) })
  }

  const setInitData = () => setValue('roadMap', data)

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
      minHeight={100}
      isSubmitting={isSubmitting}
      isEdit={isEdit}
      onSubmit={handleSubmit(onSubmit)}
      onRestore={onRestore}
      onClose={onClose}
      onOpenForm={onOpenForm}
    >
      <TextNormal fontWeight="fw_700">Roadmap:</TextNormal>
      {isEdit ? (
        <FormProvider {...form}>
          <form>
            <FormTextArea name="roadMap" rows={6} />
          </form>
        </FormProvider>
      ) : (
        <TextNormal>{data}</TextNormal>
      )}
    </BoxEdit>
  )
}

export default RoadMap

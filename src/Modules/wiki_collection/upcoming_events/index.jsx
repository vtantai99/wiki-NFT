import { Calendar, notification } from 'antd'
import { BoxEdit, TextNormal } from 'Components'
import { useWikiCollect } from 'Hooks'
import moment from 'moment'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { CHANGE_SUCCESS } from 'Stores/actionType'
import { CardCalendar, Wrapper } from './styled'

const UpcomingEvents = () => {
  // const form = useForm({
  //   resolver: yupResolver(Schema('collectDes'))
  // })
  const form = useForm()
  const { handleSubmit } = form

  const [isEdit, setIsEdit] = useState(false)

  const onSubmit = (formData) => {
    setIsEdit(false)
    notification.success({
      message: CHANGE_SUCCESS('upcoming events')
  })
  }

  const onRestore = () => console.log(2)
  const onClose = () => setIsEdit(false)
  const onOpenForm = () => setIsEdit(true)

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode)
  }

  return (
    <BoxEdit
      marginTop={20}
      padding="5px 10px"
      minHeight={70}
      isEdit={isEdit}
      onSubmit={handleSubmit(onSubmit)}
      onRestore={onRestore}
      onClose={onClose}
      onOpenForm={onOpenForm}
    >
      <TextNormal fontWeight="fw_700">Upcoming Events:</TextNormal>
      <Wrapper>
        <FormProvider {...form}>
          <CardCalendar isEdit={isEdit}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </CardCalendar>
        </FormProvider>
      </Wrapper>
    </BoxEdit>
  )
}

export default UpcomingEvents

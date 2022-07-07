import { ShareAltOutlined } from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import { BoxEdit, FormTextArea, FormUploadImage, Image, TextNormal } from 'Components'
import { useWikiCollect } from 'Hooks'
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Schema } from './schema'
import { Wrapper } from './styled'

const NotableHolder = () =>
{
  const form = useForm({
    resolver: yupResolver(Schema('collectDes'))
  })
  const { handleSubmit, setValue, watch } = form

  const { image } = watch()
  console.log('Boy ~ file: index.jsx ~ line 18 ~ watchAll', image)

  const [isEdit, setIsEdit] = useState(false)

  const { tags, changeTagsAction } = useWikiCollect()
  const { data, isSubmitting } = tags

  const onSubmit = (formData) =>
  {
    const { tags } = formData
    changeTagsAction({ data: tags, name: 'tags', callback: () => setIsEdit(false) })
  }

  const setInitData = () => {
    setValue('image', 'https://joeschmoe.io/api/v1/random')
  }

  useEffect(() =>
  {
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
      <TextNormal fontWeight="fw_700">Notable Holders:</TextNormal>
      <Wrapper>
        <div className="notable__item">
          {isEdit
            ?
              <FormProvider {...form}>
                <form>
                  <FormUploadImage name="image" />
                </form>
            </FormProvider>
            : <>
                <Image width={150} height={100} src="https://joeschmoe.io/api/v1/random" />
                <ShareAltOutlined className="notable__item__icon" />
            </>
          }

        </div>
        {/* <div className="notable__item">
          <Image width={150} height={100} src="https://joeschmoe.io/api/v1/random" />
          <ShareAltOutlined className="notable__item__icon" />
        </div>
        <div className="notable__item">
          <Image width={150} height={100} src="https://joeschmoe.io/api/v1/random" />
          <ShareAltOutlined className="notable__item__icon" />
        </div> */}
      </Wrapper>
      {/* {isEdit ? (
        <FormProvider {...form}>
          <form>
            <FormTextArea name="tags" rows={6} />
          </form>
        </FormProvider>
      ) : (
        <TextNormal style={{ textAlign: 'center' }}>{data}</TextNormal>
      )} */}
    </BoxEdit>
  )
}

export default NotableHolder

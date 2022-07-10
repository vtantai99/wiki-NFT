import {
  CopyOutlined,
  DingtalkOutlined,
  GitlabOutlined,
  InfoCircleFilled,
  InfoCircleOutlined,
  ShareAltOutlined
} from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import { message } from 'antd'
import { BoxEdit, FormInput, FormTextArea, FormUploadImage, Image, TextNormal } from 'Components'
import { useWikiCollect } from 'Hooks'
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Schema } from './schema'
import { Wrapper } from './styled'

const NFTS = ['NFTS', 'Collections', 'Top Holding']

const NotableHolder = () => {
  // const form = useForm({
  //   resolver: yupResolver(Schema('collectDes'))
  // })
  const form = useForm()
  const { handleSubmit, setValue, watch } = form

  const { code } = watch()

  const [isEdit, setIsEdit] = useState(false)

  const { changeNotableHolderAction, notable_holders } = useWikiCollect()
  const { data, isSubmitting } = notable_holders

  const onSubmit = (formData) => {
    changeNotableHolderAction({ data: formData, name: 'notable holders', callback: () => setIsEdit(false) })
  }

  const setInitData = () => {
    setValue('image', data.image)
    setValue('code', data.code)
    setValue('justin', data.justin)
    setValue('whale', data.whale)
    setValue('blueChip', data.blueChip)
    setValue('nfts', data.nfts)
    setValue('collection', data.collection)
    setValue('topHolding', data.topHolding)
  }

  useEffect(() => {
    if (data) {
      setInitData()
    }
  }, [data])

  const onRestore = () => setInitData()
  const onClose = () => setIsEdit(false)
  const onOpenForm = () => setIsEdit(true)

  const copyFileOrFolderPath = async () => {
    try {
      await navigator.clipboard.writeText(decodeURIComponent(code))
      message.success('Copy successful')
    } catch (err) {
      message.error('Copy failure')
    }
  }

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
        <FormProvider {...form}>
          <div className="notable__item">
            {isEdit ? (
              <FormUploadImage name="image" />
            ) : (
              <Image style={{ objectFit: 'cover', borderRadius: 10 }} width={250} height={150} src={data.image} />
            )}
            <ShareAltOutlined className="notable__item__icon" />
            <TextNormal
              className="notable__item__code"
              fontSize="size_22"
              fontWeight="fw_700"
              color="grey_text"
            >
              {isEdit ? <FormInput name="code" /> : data.code}
              <CopyOutlined onClick={copyFileOrFolderPath} />
            </TextNormal>
            <div className="notable__item__tags">
              <div className="notable__item__tags--item">
                <DingtalkOutlined />
                <TextNormal fontWeight="fw_500" color="grey_text">
                  {isEdit ? <FormInput name="justin" /> : data.justin}
                </TextNormal>
              </div>
              <div className="notable__item__tags--item">
                <DingtalkOutlined />
                <TextNormal fontWeight="fw_500" color="grey_text">
                  {isEdit ? <FormInput name="whale" /> : data.whale}
                </TextNormal>
              </div>
              <div className="notable__item__tags--item">
                <DingtalkOutlined />
                <TextNormal fontWeight="fw_500" color="grey_text">
                  {isEdit ? <FormInput name="blueChip" /> : data.blueChip}
                </TextNormal>
              </div>
            </div>
            <div className="notable__item__nft">
              <div className="notable__item__nft--item">
                <TextNormal fontWeight="fw_500">
                  NFTS
                  <InfoCircleOutlined />
                </TextNormal>
                <TextNormal fontWeight="fw_700">{isEdit ? <FormInput name="nfts" /> : data.nfts}</TextNormal>
              </div>
              <div className="notable__item__nft--item">
                <TextNormal fontWeight="fw_500">
                  Collections
                  <InfoCircleOutlined />
                </TextNormal>
                <TextNormal fontWeight="fw_700">
                  {isEdit ? <FormInput name="collection" /> : data.collection}
                </TextNormal>
              </div>
              <div className="notable__item__nft--item">
                <TextNormal fontWeight="fw_500">
                  Top Holding
                  <InfoCircleOutlined />
                </TextNormal>
                <TextNormal fontWeight="fw_700">
                  {isEdit ? <FormInput name="topHolding" /> : data.topHolding}
                </TextNormal>
              </div>
            </div>
          </div>
        </FormProvider>
      </Wrapper>
    </BoxEdit>
  )
}

export default NotableHolder

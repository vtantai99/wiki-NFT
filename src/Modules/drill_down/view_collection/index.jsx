import {
  BgColorsOutlined,
  CheckCircleTwoTone,
  ClockCircleOutlined,
  HeartOutlined,
  PieChartOutlined,
  UpOutlined,
  WindowsOutlined
} from '@ant-design/icons'
import { Button } from 'antd'
import { Image, TextNormal } from 'Components'
import React from 'react'
import { BoxWrapper } from 'Themes'
import { IMAGE_DEFAULT } from '../store/text'
import { Wrapper } from './styled'

const ViewCollection = () => {
  return (
    <BoxWrapper marginTop={20} borderColor="grey_mid">
      <Wrapper>
        <div className="header">
          <TextNormal fontWeight="fw_700" className="header__left">
            <WindowsOutlined />
            More From This Collection
          </TextNormal>
          <UpOutlined />
        </div>
        <div className="content">
          <div className="content__item">
            <Image className="content__item__img" src={IMAGE_DEFAULT} height={300} />
            <div className="content__item__texts">
              <TextNormal color="title_grey" fontSize="size_18" className="text__icon">
                Bored Ape Yac.. <CheckCircleTwoTone />
              </TextNormal>
              <TextNormal color="title_grey" fontSize="size_18">
                Price
              </TextNormal>
            </div>
            <div className="content__item__texts">
              <TextNormal fontSize="size_18" fontWeight="fw_700">
                3969
              </TextNormal>
              <TextNormal fontSize="size_18" fontWeight="fw_700" className="text__icon">
                <BgColorsOutlined /> 138
              </TextNormal>
            </div>
            <div className="content__item__time">
              <TextNormal color="title_grey" fontSize="size_18">
                <ClockCircleOutlined />2 days left
              </TextNormal>
            </div>
            <div className="content__item__social">
              <PieChartOutlined />
              <TextNormal color="title_grey" fontSize="size_18">
                <HeartOutlined />
                42
              </TextNormal>
            </div>
          </div>
          <div className="content__item">
            <Image className="content__item__img" src={IMAGE_DEFAULT} height={300} />
            <div className="content__item__texts">
              <TextNormal color="title_grey" fontSize="size_18" className="text__icon">
                Bored Ape Yac.. <CheckCircleTwoTone />
              </TextNormal>
              <TextNormal color="title_grey" fontSize="size_18">
                Price
              </TextNormal>
            </div>
            <div className="content__item__texts">
              <TextNormal fontSize="size_18" fontWeight="fw_700">
                3969
              </TextNormal>
              <TextNormal fontSize="size_18" fontWeight="fw_700" className="text__icon">
                <BgColorsOutlined /> 138
              </TextNormal>
            </div>
            <div className="content__item__time">
              <TextNormal color="title_grey" fontSize="size_18">
                <ClockCircleOutlined />2 days left
              </TextNormal>
            </div>
            <div className="content__item__social">
              <PieChartOutlined />
              <TextNormal color="title_grey" fontSize="size_18">
                <HeartOutlined />
                42
              </TextNormal>
            </div>
          </div>
          <div className="content__item">
            <Image className="content__item__img" src={IMAGE_DEFAULT} height={300} />
            <div className="content__item__texts">
              <TextNormal color="title_grey" fontSize="size_18" className="text__icon">
                Bored Ape Yac.. <CheckCircleTwoTone />
              </TextNormal>
              <TextNormal color="title_grey" fontSize="size_18">
                Price
              </TextNormal>
            </div>
            <div className="content__item__texts">
              <TextNormal fontSize="size_18" fontWeight="fw_700">
                3969
              </TextNormal>
              <TextNormal fontSize="size_18" fontWeight="fw_700" className="text__icon">
                <BgColorsOutlined /> 138
              </TextNormal>
            </div>
            <div className="content__item__time">
              <TextNormal color="title_grey" fontSize="size_18">
                <ClockCircleOutlined />2 days left
              </TextNormal>
            </div>
            <div className="content__item__social">
              <PieChartOutlined />
              <TextNormal color="title_grey" fontSize="size_18">
                <HeartOutlined />
                42
              </TextNormal>
            </div>
          </div>
          <div className="content__item">
            <Image className="content__item__img" src={IMAGE_DEFAULT} height={300} />
            <div className="content__item__texts">
              <TextNormal color="title_grey" fontSize="size_18" className="text__icon">
                Bored Ape Yac.. <CheckCircleTwoTone />
              </TextNormal>
              <TextNormal color="title_grey" fontSize="size_18">
                Price
              </TextNormal>
            </div>
            <div className="content__item__texts">
              <TextNormal fontSize="size_18" fontWeight="fw_700">
                3969
              </TextNormal>
              <TextNormal fontSize="size_18" fontWeight="fw_700" className="text__icon">
                <BgColorsOutlined /> 138
              </TextNormal>
            </div>
            <div className="content__item__time">
              <TextNormal color="title_grey" fontSize="size_18">
                <ClockCircleOutlined />2 days left
              </TextNormal>
            </div>
            <div className="content__item__social">
              <PieChartOutlined />
              <TextNormal color="title_grey" fontSize="size_18">
                <HeartOutlined />
                42
              </TextNormal>
            </div>
          </div>
        </div>
        <div className="view__collection">
          <Button type="primary">View Collection</Button>
        </div>
      </Wrapper>
    </BoxWrapper>
  )
}

export default ViewCollection

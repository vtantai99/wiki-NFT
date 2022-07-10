import {
  CloseOutlined,
  EnvironmentOutlined,
  FullscreenOutlined,
  HeartOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  MessageOutlined,
  MinusOutlined,
  PlusSquareOutlined,
  SearchOutlined
} from '@ant-design/icons'
import { Image, TextNormal } from 'Components'
import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { BoxWrapper } from 'Themes'
import { IMAGE_DEFAULT } from '../store/text'
import { Wrapper } from './styled'

const data = [
  {
    name: 'NFT A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'NFT B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'NFT C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'NFT D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'NFT E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  }
]

const Instagram = () => {
  return (
    <BoxWrapper marginTop={20}>
      <Wrapper>
        <div className="title">
          <TextNormal textCenter fontSize="size_30">
            Instagram Feed
          </TextNormal>
          <div className="title__close">
            <div className="title__close__item">
              <MinusOutlined />
            </div>
            <div className="title__close__item">
              <FullscreenOutlined />
            </div>
            <div className="title__close__item">
              <CloseOutlined />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="content__header">
            <Image
              width={150}
              src="https://cdn2.downdetector.com/static/uploads/logo/Instagram_Logo_Large.png"
            />
            <div className="content__header__search">
              <SearchOutlined />
              <TextNormal color="title_grey">Search</TextNormal>
            </div>
            <div className="content__header__icons">
              <HomeOutlined />
              <MessageOutlined />
              <PlusSquareOutlined />
              <EnvironmentOutlined />
              <HeartOutlined />
              <InfoCircleOutlined />
            </div>
          </div>
          <div className="content__main">
            <Image className="content__main__img" src={IMAGE_DEFAULT} />
            <Image className="content__main__img" src={IMAGE_DEFAULT} />
            <Image className="content__main__img" src={IMAGE_DEFAULT} />
            <Image className="content__main__img" src={IMAGE_DEFAULT} />
            <Image className="content__main__img" src={IMAGE_DEFAULT} />
            <Image className="content__main__img" src={IMAGE_DEFAULT} />
          </div>
        </div>
      </Wrapper>
    </BoxWrapper>
  )
}

export default Instagram

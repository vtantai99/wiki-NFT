import { AimOutlined, CaretDownOutlined, HeartOutlined, MessageOutlined, RadarChartOutlined } from '@ant-design/icons'
import { Image, TextNormal } from 'Components'
import React from 'react'
import { IMAGE_DEFAULT } from '../store/text'
import { HeaderWrapper } from './styled'

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header__left">
        <div className="header__left__title">
          <div className="header__left__title--icons">
            <AimOutlined />
            <RadarChartOutlined />
          </div>
          <div className="header__left__title--icons">
            <HeartOutlined />
            38
          </div>
        </div>
        <Image className="header__left__img" src={IMAGE_DEFAULT} />
      </div>
      <div className="header__right">
        <div className="header__right__visit">
          <div className="header__right__visit--content">
            <TextNormal>Visit the Collection Page</TextNormal>
          </div>
        </div>
        <TextNormal fontWeight="fw_700" marginBottom={30}>
          Bored Ape Yacht Club
        </TextNormal>
        <TextNormal fontWeight="fw_700" marginBottom={40} fontSize="size_36">
          #8247
        </TextNormal>
        <div className="header__right__visit">
          <div className="header__right__visit--content">
            <TextNormal>Contact via Blockchat</TextNormal>
          </div>
        </div>
        <TextNormal marginTop={30} marginBottom={30} className="header__right__code">
          Owned by: 0x7C2C3Fc16179Dcf8CEB1b35bC2f82FBacfAd4c27
          <MessageOutlined />
        </TextNormal>
        <div className="header__right__favorite">
          <TextNormal>Favorites: 243</TextNormal>
          <TextNormal>Visitors: 4.3K</TextNormal>
        </div>
        <div className="header__right__price">
          <TextNormal className="header__right__price--title">Last Know Price</TextNormal>
          <div className="header__right__price--number">
            <TextNormal fontSize="size_40" fontWeight="fw_700">
              87.5
            </TextNormal>
            <RadarChartOutlined />
            <TextNormal>$108,850.32</TextNormal>
          </div>
          <div className="header__right__price--content">
            <TextNormal>Buy It Now / Make an Offer</TextNormal>
            <div className="arrow__down">
              <CaretDownOutlined />
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header

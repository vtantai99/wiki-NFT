import {
  BehanceSquareOutlined,
  GlobalOutlined,
  InstagramOutlined,
  MediumOutlined,
  MoreOutlined,
  RadarChartOutlined,
  TwitterOutlined
} from '@ant-design/icons'
import { TextNormal } from 'Components'
import React, { Fragment } from 'react'
import { BoxWrapper } from 'Themes'
import { Socials } from './styled'

const ClaimProject = () => {
  return (
    <Fragment>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
        <BoxWrapper padding="5px 10px" borderRadius={10} width="max-content">
          <TextNormal fontSize="size_16">Claim Project</TextNormal>
        </BoxWrapper>
      </div>
      <BoxWrapper padding="10px 20px" marginBottom={10}>
        <TextNormal style={{ textAlign: 'center' }} fontSize="size_26">
          Collection Name: CartoonsNFT
        </TextNormal>
        <TextNormal style={{ textAlign: 'center' }} fontSize="size_18">
          Token Name: Cartoon #0
        </TextNormal>
      </BoxWrapper>
      <BoxWrapper borderWidth={2} borderColor="bg_grey_low" borderRadius={10}>
        <Socials>
          <div className="social__item">
            <GlobalOutlined />
          </div>
          <div className="social__item">
            <BehanceSquareOutlined />
          </div>
          <div className="social__item">
            <MediumOutlined />
          </div>
          <div className="social__item">
            <InstagramOutlined />
          </div>
          <div className="social__item">
            <TwitterOutlined />
          </div>
          <div className="social__item">
            <RadarChartOutlined />
          </div>
          <div className="social__item">
            <MoreOutlined />
          </div>
        </Socials>
      </BoxWrapper>
    </Fragment>
  )
}

export default ClaimProject

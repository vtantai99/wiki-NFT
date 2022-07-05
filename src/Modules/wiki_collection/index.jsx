import { Container } from 'Components'
import HomeLayout from 'Modules/layouts/home'
import React from 'react'
import Avatar from './avatar'
import ClaimProject from './claim_project'
import FloorPrice from './floor_price'
import NumberOfOwner from './number_of_owners'
import { ContentTop } from './styled'
import VolumeByDay from './volume_by_day'

const WikiCollection = () => {
  return (
    <HomeLayout>
      <Container>
        <ContentTop>
          <div className="content__left">
            <div style={{ padding: '0px 80px' }}>
              <ClaimProject />
              <FloorPrice />
            </div>
          </div>
          <div className="content__right">
            <div style={{ padding: '0px 80px' }}>
              <Avatar />
              <NumberOfOwner />
              <VolumeByDay />
            </div>
          </div>
        </ContentTop>
      </Container>
    </HomeLayout>
  )
}

export default WikiCollection

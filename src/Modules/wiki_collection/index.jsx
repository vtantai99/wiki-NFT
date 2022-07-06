import { Container } from 'Components'
import { useWikiCollect } from 'Hooks'
import HomeLayout from 'Modules/layouts/home'
import React from 'react'
import AllAnnouncement from './all_announcements'
import Avatar from './avatar'
import ClaimProject from './claim_project'
import CollectionDes from './collection_des'
import FloorPrice from './floor_price'
import NumberOfOwner from './number_of_owners'
import PriceEta from './price_eta'
import { ContentTop } from './styled'
import VolumeByDay from './volume_by_day'

const WikiCollection = () => {
  return (
    <HomeLayout>
      <Container>
        <ContentTop>
          <div className="content__left">
            <div style={{ padding: '0px 40px' }}>
              <ClaimProject />
              <FloorPrice />
              <AllAnnouncement />
            </div>
          </div>
          <div className="content__right">
            <div style={{ padding: '0px 40px' }}>
              <Avatar />
              <NumberOfOwner />
              <VolumeByDay />
            </div>
            <PriceEta />
            <CollectionDes />
          </div>
        </ContentTop>
      </Container>
    </HomeLayout>
  )
}

export default WikiCollection

import { Container } from 'Components'
import HomeLayout from 'Modules/layouts/home'
import React from 'react'
import AllAnnouncement from './all_announcements'
import Avatar from './avatar'
import ClaimProject from './claim_project'
import CollectionDes from './collection_des'
import FanPhotos from './fan_photo'
import FAQ from './faq'
import FloorPrice from './floor_price'
import Instagram from './instagram'
import NotableHolder from './notable_holders'
import NumberOfOwner from './number_of_owners'
import PriceEta from './price_eta'
import RoadMap from './roadmap'
import { ContentTop } from './styled'
import SwagForSale from './swag_for_sale'
import Tags from './tags'
import Team from './team'
import Trivia from './trivia'
import UpcomingEvents from './upcoming_events'
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
            <Tags />
          </div>
        </ContentTop>
        <NotableHolder />
        <Team />
        <RoadMap />
        <UpcomingEvents />
        <SwagForSale />
        <Instagram />
        <FanPhotos />
        <FAQ />
        <Trivia />
      </Container>
    </HomeLayout>
  )
}

export default WikiCollection

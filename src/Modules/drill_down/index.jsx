import { Container } from 'Components'
import HomeLayout from 'Modules/layouts/home'
import React from 'react'
import CollectionDes from './collection_des'
import FanPhotos from './fan_photo'
import RecentSales from './recent_sales'
import PriceEtaChart from './price_eta_chart'
import Header from './header'
import NotableHolder from './notable_holders'
import PriceEta from './price_eta'
import { ContentTop } from './styled'
import Tags from './tags'
import ItemSales from './item_sale'
import ViewCollection from './view_collection'
import PreviousOwner from './previours_owners'
import NFTGraph from './NFT_graph'

const DrillDown = () => {
  return (
    <HomeLayout>
      <Container>
        <Header />
        <ContentTop>
          <div className="content__left">
            <div style={{ padding: '0px 40px' }}>
              <PriceEta />
              <CollectionDes />
              <Tags />
            </div>
          </div>
          <div className="content__right">
            <div style={{ padding: '0px 40px' }}>
              <PriceEtaChart />
              <RecentSales />
              <ItemSales />
            </div>
          </div>
        </ContentTop>
        <NotableHolder />
        <ViewCollection />
        <FanPhotos />
        <PreviousOwner />
        <NFTGraph />
      </Container>
    </HomeLayout>
  )
}

export default DrillDown

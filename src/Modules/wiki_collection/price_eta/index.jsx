import { TextNormal } from 'Components'
import React from 'react'
import { BoxWrapper } from 'Themes'

const PriceEta = () =>
{
  return (
    <BoxWrapper padding="5px 10px" marginTop={20}>
      <TextNormal style={{ textAlign: 'center' }}>
        <span style={{ fontWeight: 700 }}>chain: </span>Ethereum
      </TextNormal>
      <TextNormal style={{ textAlign: 'center' }} fontWeight="fw_700">
        Collection Address:
      </TextNormal>
      <TextNormal style={{ textAlign: 'center' }} marginBottom={20}>
        0xee29700134aab4f45b113e43e29ff06ce10687b7
      </TextNormal>
      <TextNormal style={{ textAlign: 'center' }} marginBottom={20}>
        <span style={{ fontWeight: 700 }}>Price Estimate: </span>0.009 - 0.0146 ETH, ~ 0.0122 ETH
      </TextNormal>
      <TextNormal style={{ textAlign: 'center' }} fontWeight="fw_700">
        Items: 7,800 NFTs
      </TextNormal>
      <TextNormal style={{ textAlign: 'center' }} fontWeight="fw_700">
        Owners: 4,700
      </TextNormal>
      <TextNormal style={{ textAlign: 'center' }} fontWeight="fw_700">
        Floor Price: 0.009 ETH
      </TextNormal>
      <TextNormal style={{ textAlign: 'center' }} fontWeight="fw_700" marginBottom={20}>
        Total Volume: 1,400 ETH
      </TextNormal>
      <TextNormal style={{ textAlign: 'center' }} fontWeight="fw_700">
        Attributes (list all attributes here):
      </TextNormal>
      <TextNormal style={{ textAlign: 'center' }}>
        Background | Gradient (Rarity %)
      </TextNormal>
      <TextNormal style={{ textAlign: 'center' }}>
        Body | Red and Blue Overalls (Rarity %)
      </TextNormal>
      <TextNormal style={{ textAlign: 'center' }}>
        Character | Cloudy (Rarity %)
      </TextNormal>
      <TextNormal style={{ textAlign: 'center' }}>
        Face | Wink (Rarity %)
      </TextNormal>
      <TextNormal style={{ textAlign: 'center' }}>
        Sprout | Hat (Rarity %)
      </TextNormal>
    </BoxWrapper>
  )
}

export default PriceEta
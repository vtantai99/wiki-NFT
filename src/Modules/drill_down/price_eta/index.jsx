import { TextNormal } from 'Components'
import React from 'react'
import { BoxWrapper } from 'Themes'

const PriceEta = () => {
  return (
    <BoxWrapper padding="5px 10px" marginTop={20}>
      <TextNormal textCenter>
        <span style={{ fontWeight: 700 }}>chain: </span>Ethereum
      </TextNormal>
      <TextNormal style={{ display: 'flex', justifyContent: 'center' }} fontWeight="fw_700">
        Collection Address:
        <TextNormal>Bored Ape Yacht Club</TextNormal>
      </TextNormal>
      <TextNormal textCenter marginBottom={20}>
        0xee29700134aab4f45b113e43e29ff06ce10687b7
      </TextNormal>
      <TextNormal textCenter>
        <span style={{ fontWeight: 700 }}>Price Estimate: </span>87.5 ETH - 96.4 ETH, ~ 92.5
      </TextNormal>
      <TextNormal textCenter fontWeight="fw_700">
        Rarity Rank: <span style={{ fontWeight: 400 }}>450</span>
      </TextNormal>
      <TextNormal textCenter fontWeight="fw_700">
        Number of Owners: <span style={{ fontWeight: 400 }}>5</span>
      </TextNormal>
      <TextNormal textCenter fontWeight="fw_700">
        Notable Owners: <span style={{ fontWeight: 400 }}>?</span>
      </TextNormal>
      <TextNormal textCenter fontWeight="fw_700" marginTop={20}>
        Items: 10,000 NFTs
      </TextNormal>
      <TextNormal textCenter fontWeight="fw_700">
        Owners: 6,400
      </TextNormal>
      <TextNormal textCenter fontWeight="fw_700">
        Floor Price: 87.5 ETH
      </TextNormal>
      <TextNormal textCenter fontWeight="fw_700">
        Total Volume: 607,100 ETH
      </TextNormal>
      <TextNormal textCenter fontWeight="fw_700" marginTop={20}>
        Attributes (list all attributes here):
      </TextNormal>
      <TextNormal textCenter>Background | Purple (Rarity %)</TextNormal>
      <TextNormal textCenter>Eyes | Hypnotized (Rarity %)</TextNormal>
      <TextNormal textCenter>Fur | Golden Brown (Rarity %)</TextNormal>
      <TextNormal textCenter>Hat | Sushi Chef Head (Rarity %)</TextNormal>
      <TextNormal textCenter>Mouth | Phoneme Wah (Rarity %)</TextNormal>
    </BoxWrapper>
  )
}

export default PriceEta

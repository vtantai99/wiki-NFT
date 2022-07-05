import { Image, TextNormal } from 'Components'
import React from 'react'
import { BoxWrapper } from 'Themes'
import { AvatarDes } from './styled'

const Avatar = () => {
  return (
    <BoxWrapper>
      <Image src="https://cdn.simplehash.com/assets/7ead1dac2255d43abffa8ddd3942dac84d2af00e2b5e0c9a18fe3cdb4946cfb0.jpg" />
      <AvatarDes>
        <TextNormal fontWeight="fw_700" fontSize="size_14">cdn.si mpl ehash.com</TextNormal>
        <TextNormal color="grey_low" fontSize="size_14">Simplehash</TextNormal>
      </AvatarDes>
    </BoxWrapper>
  )
}

export default Avatar
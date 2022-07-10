import { Image, TextNormal } from 'Components'
import React from 'react'
import { BoxWrapper } from 'Themes'
import { IMAGE_DEFAULT } from '../store/text'
import { AvatarDes } from './styled'

const Avatar = () => {
  return (
    <BoxWrapper>
      <Image src={IMAGE_DEFAULT} />
      <AvatarDes>
        <TextNormal fontWeight="fw_700" fontSize="size_14">cdn.si mpl ehash.com</TextNormal>
        <TextNormal color="grey_low" fontSize="size_14">Simplehash</TextNormal>
      </AvatarDes>
    </BoxWrapper>
  )
}

export default Avatar
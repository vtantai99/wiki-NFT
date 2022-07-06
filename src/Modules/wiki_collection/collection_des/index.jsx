import { BoxEdit, TextNormal } from 'Components'
import { useWikiCollect } from 'Hooks'
import React from 'react'

const CollectionDes = () =>
{
  const { collectDes, changeCollectDesAction } = useWikiCollect()
  const { data, isLoading } = collectDes
  console.log('Boy ~ file: index.jsx ~ line 8 ~ collectDes', collectDes)
  const handleChange = () => {
    changeCollectDesAction({ data: 'Hello', name: 'Collection description' })
  }
  return (
    <BoxEdit marginTop={20} padding="5px 10px" onClick={handleChange} isLoading={isLoading}>
      <TextNormal style={{ textAlign: 'center' }}>
        {data}
      </TextNormal>
    </BoxEdit>
  )
}

export default CollectionDes
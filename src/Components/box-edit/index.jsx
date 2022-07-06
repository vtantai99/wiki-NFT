import { EditOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { BoxWrapper } from './styled'

const BoxEdit = ({ children, onClick, isLoading, ...rest }) => {
  return (
    <BoxWrapper {...rest}>
      <Button onClick={onClick} icon={<EditOutlined />} className="box__btn__edit" loading={isLoading} />
      {children}
    </BoxWrapper>
  )
}

export default BoxEdit
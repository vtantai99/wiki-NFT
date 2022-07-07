import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import React from 'react'
import { WrapperLoading } from './styled'

const antIcon = <LoadingOutlined style={{ fontSize: 44 }} spin />

const LoadingScreen = () => (
    <WrapperLoading>
        <Spin size="large" indicator={antIcon} />
    </WrapperLoading>
)

export default LoadingScreen

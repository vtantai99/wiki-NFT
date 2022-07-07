import { CloseOutlined } from '@ant-design/icons'
import { TextNormal } from 'Components'
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { BoxWrapper } from 'Themes'
import { Wrapper } from './styled'

const data = [
  {
    name: 'NFT A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'NFT B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  }
]

const VolumeByDay = () => {
  return (
    <BoxWrapper marginTop={20}>
      <Wrapper>
        <div className="title">
          <TextNormal style={{ textAlign: 'center' }}>Volume by Day</TextNormal>
          <div className="title__close">
            <CloseOutlined />
          </div>
        </div>
        <div className="content">
          <BarChart width={400} height={150} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
      </Wrapper>
    </BoxWrapper>
  )
}

export default VolumeByDay

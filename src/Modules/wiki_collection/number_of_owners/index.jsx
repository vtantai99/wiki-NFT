import { CloseOutlined } from '@ant-design/icons'
import { TextNormal } from 'Components'
import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
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
  },
  {
    name: 'NFT C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'NFT D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'NFT E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  }
]

const NumberOfOwner = () => {
  return (
    <BoxWrapper marginTop={20}>
      <Wrapper>
        <div className="title">
          <TextNormal style={{ textAlign: 'center' }}>Number of owners: 4,700</TextNormal>
          <div className="title__close">
            <CloseOutlined />
          </div>
        </div>
        <div className="content">
          <LineChart width={400} height={150} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </Wrapper>
    </BoxWrapper>
  )
}

export default NumberOfOwner

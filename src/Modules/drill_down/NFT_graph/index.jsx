import { CloseOutlined } from '@ant-design/icons'
import { TextNormal } from 'Components'
import React from 'react'
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts'
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

const NFTGraph = () => {
  return (
    <BoxWrapper marginTop={20}>
      <Wrapper>
        <div className="title">
          <TextNormal fontWeight="fw_700">NFT Flow Graph</TextNormal>
          <div className="title__close">
            <CloseOutlined />
          </div>
        </div>
        <div className="content">
          <RadarChart outerRadius={90} width={730} height={250} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </div>
      </Wrapper>
    </BoxWrapper>
  )
}

export default NFTGraph

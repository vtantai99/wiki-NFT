/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { Header } from 'Components'

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  background: no-repeat center ${({ theme }) => theme.white};
  background-size: cover;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
`
const HomeLayout = ({ children, bgImage }) => {
  const history = useHistory()
  const { pathname } = history.location

  return (
    <Wrapper bgImage={bgImage}>
      <Header />
      <Body pathname={pathname}>{children}</Body>
    </Wrapper>
  )
}

export default HomeLayout

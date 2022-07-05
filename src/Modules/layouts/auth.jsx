/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { Header } from '../../Components'
// import Footer from '../../components/footer'
import { MEDIA_WIDTHS } from '../../Themes'

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: no-repeat center ${({ bgImage, theme }) => `url(${bgImage})` || theme.white};
  background-size: cover;
`
const Body = styled.div`
  display: flex;
  width: 100%;
  padding: 36px 0;
  justify-content: center;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToLarge}px) {
    background: ${({ theme }) => theme.white};
  }
`

const AuthLayout = ({ children, isFooter = true, bgImage }) => (
  <Wrapper bgImage={bgImage}>
    <Header />
    <Body>
      {children}
    </Body>
    {/* {isFooter && <Footer />} */}
  </Wrapper>
)

export default AuthLayout

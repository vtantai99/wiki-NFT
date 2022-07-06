import { React, useEffect, useState } from 'react'
import { notification, Spin } from 'antd'
import { parse, stringfiy } from 'qs'
import styled from 'styled-components'

import Approutes from './Routes'
import { store } from '.'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import { setLocalStorage, STORAGE } from 'Utils'

const LoadingStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLocalStorage(STORAGE.TOKEN, 'eyJhbGciOiJIUzUxMiJ9.eyJhdWQiOiIxNjU3MzMzMjA4Mzc3IiwidGZhQ2hlY2tlZCI6ZmFsc2UsInVzZXJJZCI6NTEzMn0.M4C442exDDJ_jX5gf5YuyUrZ2oBi57LxhivWzBY4pBSMGjqw32YxxKhjg-d6zuhwggdFdVjBEi4SBdG-GKnKjw')
  }, [])

  if (!loading) {
    return (
      <LoadingStyled>
        <Spin size="large" />
      </LoadingStyled>
    )
  }

  return (
    <>
      <Approutes />
    </>
  )
}

export default App

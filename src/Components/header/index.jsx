import React from 'react'
import { TextNormal } from '../index'
import { Wrapper, Left, Right } from './styled'
import { Avatar, Button } from 'antd'
import { getLocalStorage, removeLocalStorage, STORAGE } from 'Utils'
import { Link, useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()
  const currentUser = JSON.parse(getLocalStorage(STORAGE.CURRENT_USER))

  const handleLogout = () => {
    history.push('/sign-in')
    removeLocalStorage(STORAGE.CURRENT_USER)
  }
  return (
    <Wrapper>
      <Left>
        <Link to="/">
          <TextNormal fontSize="size_32" fontWeight="fw_700" color="white">
            WIKI-NFT
          </TextNormal>
        </Link>
      </Left>
      {currentUser && (
        <Right>
          <Link to="/drill-down">
            <TextNormal fontSize="size_22" fontWeight="fw_700" color="white">
              Dill-down
            </TextNormal>
          </Link>
          <Avatar size={70}>{currentUser.account}</Avatar>
          <Button onClick={handleLogout}>Sign out</Button>
        </Right>
      )}
    </Wrapper>
  )
}

export default Header

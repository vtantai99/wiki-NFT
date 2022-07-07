import React, { useState } from 'react'
import { LinkIcon } from '../index'
import { Wrapper, Left, Right } from './styled'
import { LOGO_COMPANY } from 'Assets'
import { Avatar, Button } from 'antd'
import { getLocalStorage, removeLocalStorage, STORAGE } from 'Utils'
import { useHistory } from 'react-router-dom'

const Header = () =>
{
    const history = useHistory()
    const currentUser = JSON.parse(getLocalStorage(STORAGE.CURRENT_USER))

    const handleLogout = () => {
        history.push('/sign-in')
        removeLocalStorage(STORAGE.CURRENT_USER)
    }
    return (
        <Wrapper>
            <Left>
                <LinkIcon to="/" className="logo__company" src={LOGO_COMPANY} />
            </Left>
            <Right>
                <Avatar size={70}>{currentUser.account}</Avatar>
                <Button onClick={handleLogout}>Sign out</Button>
            </Right>
        </Wrapper>
    )
}

export default Header
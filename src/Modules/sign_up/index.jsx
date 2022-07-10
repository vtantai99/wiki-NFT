import { UserAddOutlined } from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import { Avatar, Button, Col, notification, Row } from 'antd'
import { FormInput, TextNormal } from 'Components'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { getLocalStorage, setLocalStorage, STORAGE } from 'Utils'
import { signUpSchema } from './schema'
import { BoxContent, Wrapper } from './styled'

const SignUp = () =>
{
  const history = useHistory()
  const users = JSON.parse(getLocalStorage(STORAGE.USERS))

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm({
    resolver: yupResolver(signUpSchema())
  })
  const { handleSubmit } = form

  const signUpSuccess = () => setTimeout(() => {
    history.push('/sign-in')
    notification.success({
      message: 'Sign up success !'
    })
    setIsLoading(false)
  }, 1000)
  

  const onRegister = async (formData) =>
  {
    const { account } = formData
    setIsLoading(true)
    if (!users) {
      console.log('Boy')
      const newUsers = []
      newUsers.push(formData)
      await setLocalStorage(STORAGE.USERS, JSON.stringify(newUsers))
      signUpSuccess()
    } else {
      const existUser = users.find(user => user.account === account)
      if (existUser) {
        setIsLoading(false)
        notification.error({
          message: 'Account already exist !'
        })
      } else {
        const newUser = [...users]
        newUser.push(formData)
        setLocalStorage(STORAGE.USERS, JSON.stringify(newUser))
        signUpSuccess()
      }
    }
  }
  return (
    <Wrapper>
      <BoxContent>
        <div className="sign__up__content">
          <TextNormal style={{ textAlign: 'center' }}>
            <Avatar icon={<UserAddOutlined />} />
          </TextNormal>
          <TextNormal style={{ textAlign: 'center' }}>Sign up</TextNormal>
          <FormProvider {...form}>
            <form>
              <Row gutter={[24, 24]}>
                <Col span={12}>
                  <FormInput
                    name="account"
                    label="Account"
                    wrapperProps={{
                      colon: false,
                      labelCol: { span: 8 },
                      wrapperCol: { span: 16 },
                      labelAlign: 'right'
                    }}
                  />
                </Col>
                <Col span={12}>
                  <FormInput
                    name="password"
                    label="Password"
                    type="password"
                    wrapperProps={{
                      colon: false,
                      labelCol: { span: 8 },
                      wrapperCol: { span: 16 },
                      labelAlign: 'right'
                    }}
                  />
                </Col>
                <Col span={12}>
                  <FormInput
                    name="email"
                    label="Email"
                    wrapperProps={{
                      colon: false,
                      labelCol: { span: 8 },
                      wrapperCol: { span: 16 },
                      labelAlign: 'right'
                    }}
                  />
                </Col>
                <Col span={12}>
                  <FormInput
                    name="phoneNumber"
                    label="Phone number"
                    wrapperProps={{
                      colon: false,
                      labelCol: { span: 8 },
                      wrapperCol: { span: 16 },
                      labelAlign: 'right'
                    }}
                  />
                </Col>
              </Row>
              <div className="button__submit">
                <Button onClick={handleSubmit(onRegister)} loading={isLoading}>Register</Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </BoxContent>
    </Wrapper>
  )
}

export default SignUp

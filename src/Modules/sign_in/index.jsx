import { LoginOutlined } from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import { Avatar, Button, Col, notification, Row } from 'antd'
import { FormInput, TextNormal } from 'Components'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { getLocalStorage, setLocalStorage, STORAGE } from 'Utils'
import { signInSchema } from './schema'
import { BoxContent, Wrapper } from './styled'

const SignIn = () => {
  const history = useHistory()
  const users = JSON.parse(getLocalStorage(STORAGE.USERS))
  console.log('Boy ~ file: index.jsx ~ line 13 ~ SignIn ~ users', users)

  const form = useForm({
    resolver: yupResolver(signInSchema())
  })
  const { handleSubmit } = form
  const onRegister = (formData) => {
    const { account, password } = formData
    const userLogging = (users || []).find((user) => (user.account === account && user.password === password))

    if (userLogging) {
      setLocalStorage(STORAGE.CURRENT_USER, JSON.stringify(userLogging))
      history.push('/')
    } else {
      notification.error({
        message: 'Account or password incorrect!'
      })
    }
  }
  return (
    <Wrapper>
      <BoxContent>
        <div className="sign__up__content">
          <TextNormal style={{ textAlign: 'center' }}>
            <Avatar icon={<LoginOutlined />} />
          </TextNormal>
          <TextNormal style={{ textAlign: 'center' }}>Sign in</TextNormal>
          <FormProvider {...form}>
            <form>
              <Row gutter={[24, 24]}>
                <Col span={24}>
                  <FormInput
                    name="account"
                    label="Account"
                    wrapperProps={{
                      colon: false,
                      labelCol: { span: 6 },
                      wrapperCol: { span: 18 },
                      labelAlign: 'right'
                    }}
                  />
                </Col>
                <Col span={24}>
                  <FormInput
                    name="password"
                    label="Password"
                    type="password"
                    wrapperProps={{
                      colon: false,
                      labelCol: { span: 6 },
                      wrapperCol: { span: 18 },
                      labelAlign: 'right'
                    }}
                  />
                </Col>
              </Row>
              <div className="button__submit">
                <Button onClick={handleSubmit(onRegister)}>Login</Button>
                <Link to="/sign-up">Do you have account? Register now</Link>
              </div>
            </form>
          </FormProvider>
        </div>
      </BoxContent>
    </Wrapper>
  )
}

export default SignIn

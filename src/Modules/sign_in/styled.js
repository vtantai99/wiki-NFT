import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`

export const BoxContent = styled.div`
  min-width: 50%;
  min-height: 500px;
  position: absolute;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${({ theme }) => theme.grey_mid};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 5px;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    margin-top: 30px;
    .button__submit {
      width: 100%;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

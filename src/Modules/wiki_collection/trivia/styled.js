import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 50px 0;

  .faq {
    border: 1px solid ${({ theme }) => theme.bd_grey_dark};
    border-radius: 5px;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    .ant-form-item {
      width: 60%;
      margin: 0 auto;
    }
  }
`

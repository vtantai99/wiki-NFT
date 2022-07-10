import styled from 'styled-components'

export const Wrapper = styled.div`
  .title {
    border-bottom: 1px solid ${({ theme }) => theme.bd_grey_dark};
    border-radius: 0 0 5px 5px;
    display: flex;
    align-items: center;
    padding: 1px;
    p {
      flex: 1;
    }
    &__close {
      display: flex;
      align-items: center;
      justify-content: center;
      &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px;
        margin-left: 2px;
      }
    }
  }
  .content {
    margin-top: 20px;
    .faq {
      border: 1px solid ${({ theme }) => theme.bd_grey_dark};
      border-radius: 5px;
      width: 70%;
      padding: 10px;
      margin: 0 auto 10px auto;
    }
  }
`

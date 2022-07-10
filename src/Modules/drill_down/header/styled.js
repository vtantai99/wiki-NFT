import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  margin-top: 20px;

  .header__left {
    width: 30%;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.grey_mid};
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    &__title {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      &--icons {
        display: flex;
        align-items: center;
        .anticon {
          margin: 0 5px;
        } 
      }
    }
    &__img {
      border-radius: 10px;
    }
  }

  .header__right {
    flex: 1;
    padding-left: 20px;
    &__visit {
      display: flex;
      justify-content: flex-end;
      &--content {
        border-radius: 5px;
        padding: 5px 10px;
        border: 1px solid ${({ theme }) => theme.bd_grey_dark};
      }
    }
    &__code {
      display: flex;
      align-items: center;
      .anticon {
        margin-left: 10px;
      }
    }
    &__favorite {
      display: flex;
      p {
        font-style: italic;
        &:first-child {
          margin-right: 40px;
        }
      }
    }
    &__price {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      &--title {
        font-style: italic;
      }
      &--number {
        margin: 10px 0;
        display: flex;
        align-items: center;
        .anticon {
          font-size: 40px;
          margin: 0 10px;
        }
      }
      &--content {
        border-radius: 5px;
        padding: 5px 10px;
        border: 1px solid ${({ theme }) => theme.bd_grey_dark};
        display: flex;
        align-items: center;
        .arrow__down {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid black;
          border-radius: 5px;
          padding: 5px;
          margin-left: 10px;
          .anticon {
            font-size: 20px;
          }
        }
      }
    }
  }
`
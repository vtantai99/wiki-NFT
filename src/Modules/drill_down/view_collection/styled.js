import styled from 'styled-components'

export const Wrapper = styled.div`
  .header {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.grey_mid};
    &__left {
      display: flex;
      align-items: center;
      .anticon {
        font-weight: 700;
        margin-right: 10px;
      }
    }
  }

  .content {
    display: flex;
    padding: 20px 0;
    &__item {
      margin: 0 15px;
      width: calc((100% / 4) - 30px);
      border-radius: 10px;
      border: 1px solid ${({ theme }) => theme.grey_mid};

      .ant-image {
        width: 100%;
        .ant-image-img {
          border-radius: 10px;
        }
      }

      &__texts {
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
        padding: 0 15px;
        p {
          .anticon {
            margin: 0 10px;
          }
          &.text__icon {
            display: flex;
            align-items: center;
          }
        }
      }

      &__time {
        display: flex;
        justify-content: flex-end;
        padding: 0 15px;
        margin-bottom: 20px;
        p {
          display: flex;
          align-items: center;
          .anticon {
            margin-right: 10px;
          }
        }
      }

      &__social {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        background: ${({ theme }) => theme.text_grey_low};
        border-radius: 0 0 10px 10px;
        p {
          display: flex;
          align-items: center;
          .anticon {
            margin-right: 10px;
          }
        }
      }
    }
  }

  .view__collection {
    display: flex;
    justify-content: center;
    padding: 20px;
    border-top: 1px solid ${({ theme }) => theme.grey_mid};
    .ant-btn {
      border-radius: 5px;
      padding: 10px 15px;
      height: auto;
    }
  }
`

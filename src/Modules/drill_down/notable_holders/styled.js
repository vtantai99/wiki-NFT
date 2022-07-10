import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  .notable__item {
    width: 50%;
    border: 1px solid ${({ theme }) => theme.grey_mid};
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 5px;
    padding: 20px;
    position: relative;

    .ant-upload-picture-card-wrapper {
      display: flex;
      justify-content: center;
    }

    .ant-image {
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      object-fit: contain;
    }
    &__icon {
      position: absolute;
      right: 10px;
      top: 10px;
    }
    &__code {
      display: flex;
      justify-content: center;
      text-decoration: underline;
      text-align: center;

      .anticon {
        margin-left: 10px;
      }
    }

    &__tags {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin: 15px 0 25px 0;
      &--item {
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 10px;
        padding: 5px;
        background: ${({ theme }) => theme.bg_items};
        .anticon {
          margin-right: 5px;
        }
      }
    }

    &__nft {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      background: ${({ theme }) => theme.bg_items};
      width: 80%;
      margin: 0 auto;
      padding: 10px 20px;
      border-radius: 10px;
      p {
        text-align: center;
        &:first-child {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
          .anticon {
            margin-left: 5px;
          }
        }
      }
    }
  }
`

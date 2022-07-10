import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  .swag {
    width: 300px;
    &__image {
      border-radius: 10px;
    }

    &__name {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .ant-upload-picture-card-wrapper {
      display: flex;
      justify-content: center;
    }

    .ant-image {
      // top: -40px;
      left: 50%;
      transform: translateX(-50%);
    }

    &__social {
      width: 30%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      margin-top: 10px;
      .anticon {
        font-size: 30px;
        color: ${({ theme }) => theme.text_blue_dark};
        &.anticon-linkedin {
          margin-left: 20px;
        }
      }
    }
  }
`

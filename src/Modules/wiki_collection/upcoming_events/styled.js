import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  .ant-input {
    width: 30%;
  }

  .team__item {
    width: 50%;
    border: 1px solid ${({ theme }) => theme.grey_mid};
    background: ${({ theme }) => theme.bg_item_team};
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 5px;
    padding: 20px;
    position: relative;

    &__image {
      margin-bottom: 10px;
      border-radius: 10px;
      box-shadow: 8px 7px 0 0 ${({ theme }) => theme.text_blue_dark};
    }

    &__name {
      text-transform: uppercase;
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

export const CardCalendar = styled.div`
  width: 300px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  pointer-events: ${({ isEdit }) => isEdit ? 'auto' : 'none'};
`

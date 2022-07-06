import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;

  .notable__item {
    width: calc(100% / 3);
    border: 1px solid ${({ theme }) => theme.grey_mid};
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 5px;
    padding: 20px;
    position: relative;
    .ant-image {
      top: -70px;
      left: 50%;
      transform: translateX(-50%);
    }
    &__icon {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
`

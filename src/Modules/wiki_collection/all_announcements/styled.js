import styled from 'styled-components'

export const Box = styled.div`
  color: white;
  background: ${({ theme }) => theme.bg_black_grey};
  margin-top: 30px;

  padding: 5px 10px;
  .announce__item {
    background: ${({ theme }) => theme.bg_black_low};
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      .anticon  {
        transform: scale(1.3);
        transition: 0.6s;
      }
    }
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &--left {
        display: flex;
        align-items: center;
        .name {
          margin-left: 10px;
        }
      }
    }
  }
`
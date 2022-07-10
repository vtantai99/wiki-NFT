import styled from "styled-components";

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
    padding: 10px;
    &__header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid ${({ theme }) => theme.text_grey_low};
      padding-bottom: 10px;
      &__search {
        display: flex;
        align-items: center;
        border-radius: 5px;
        background: ${({ theme }) => theme.text_grey_low};
        width: 300px;
        padding: 0 15px;
        .anticon {
          color: ${({ theme }) => theme.title_grey};
          margin-right: 10px;
        }
      }
      &__icons {
        display: flex;
        align-items: center;
        .anticon {
          font-size: 26px;
          margin: 0 10px;
        }
      }
    }
    &__main {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      // gap: 30px;
      .ant-image {
        margin: 15px 15px;
        width: calc((100% / 3) - 30px);
      }
      &__img {
        width: 100%;
        border-radius: 10px;
      }
    }
  }
`
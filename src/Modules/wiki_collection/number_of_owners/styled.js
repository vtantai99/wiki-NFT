import styled from "styled-components";

export const Wrapper = styled.div`
  .title {
    border-bottom: 1px solid ${({ theme }) => theme.bd_grey_dark};
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
      border: 1px solid black;
      border-radius: 5px;
      padding: 5px;
    }
  }
  .content {
    padding: 10px;
  }
`
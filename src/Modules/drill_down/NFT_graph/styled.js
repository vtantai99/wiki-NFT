import styled from "styled-components";

export const Wrapper = styled.div`
  .title {
    display: flex;
    align-items: center;
    padding: 5px 10px;
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
    .recharts-wrapper {
      margin: 0 auto;
    }
  }
`
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  margin: 50px 0;

  .fanPhoto__item {
    margin: 0 15px;
    width: calc((100% / 4) - 30px);
    .ant-image {
      width: 100%;
      .ant-image-img {
        height: 250px;
      }
    }
    .ant-upload {
      width: 100%;
      height: 250px;
    }
    .ant-upload-list-picture-card-container {
      width: 100%;
      height: 250px;
    }
  }
`

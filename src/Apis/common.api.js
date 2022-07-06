import AxiosClient from './api'

function getS3PresinedUrl({ fileList }) {
  return AxiosClient.post('https://lms-dev-api.growthcollege.jp/api/v1/file/pre-signed', fileList)
    .then(({ data }) => data)
}

export { getS3PresinedUrl }
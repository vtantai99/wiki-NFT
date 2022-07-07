import { TwitterOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { TextNormal } from 'Components'
import React from 'react'
import { Box } from './styled'

const AllAnnouncement = () => {
  return (
    <Box>
      <TextNormal color="white" fontSize="size_32" fontWeight="fw_700" marginBottom={20}>
        All Announcements
      </TextNormal>
      {[...new Array(5)].map((item) => (
        <div className="announce__item">
          <div className="announce__item__header">
            <div className="announce__item__header--left">
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <div className="name">
                <TextNormal color="white" fontSize="size_18" fontWeight="fw_700">
                  masoncrowe#8888
                </TextNormal>
                <TextNormal color="grey_disable" fontSize="size_14">
                  about 3 hours ago
                </TextNormal>
              </div>
            </div>
            <TwitterOutlined style={{ fontSize: 30 }} />
          </div>
          <div className="announce__item__content">
            <TextNormal color="grey_disable" fontSize="size_18" fontWeight="fw_700">
              @everyone
            </TextNormal>
            <TextNormal color="grey_disable" fontSize="size_14">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, pariatur explicabo. Facere ex
              quaerat accusamus aliquam sint. Dignissimos, tempora repellat?
            </TextNormal>
          </div>
        </div>
      ))}
    </Box>
  )
}

export default AllAnnouncement

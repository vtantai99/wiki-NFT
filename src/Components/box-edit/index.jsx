import { CheckOutlined, CloseOutlined, EditOutlined, RedoOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { BoxWrapper } from './styled'

const BoxEdit = ({ children, onSubmit, isSubmitting, isEdit, setIsEdit, onRestore, onClose, onOpenForm, ...rest }) => {
  return (
    <BoxWrapper {...rest}>
      <div className="box__btn__edit">
        {isEdit ? (
          <>
            <Button type="primary" onClick={onSubmit} icon={<CheckOutlined />} loading={isSubmitting} />
            <Button type="dashed" onClick={onRestore} icon={<RedoOutlined />} />
            <Button onClick={onClose} icon={<CloseOutlined />} danger />
          </>
        ) : (
          <Button onClick={onOpenForm} icon={<EditOutlined />} />
        )}
      </div>
      {children}
    </BoxWrapper>
  )
}

export default BoxEdit

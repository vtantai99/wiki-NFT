import styled from 'styled-components'
import { Checkbox } from 'antd'

export const CheckboxStyled = styled(Checkbox)`
  .ant-checkbox-inner {
    border: 3px solid #d9d9d9;
    background: transparent;
    width: 18px;
    height: 18px;
  }
  .ant-checkbox-checked {
    background: ${({ theme }) => theme.quote_text};
    .ant-checkbox-inner {
      border: 3px solid ${({ theme }) => theme.quote_text};
    }
  }
  span {
    font-size: 20px;
    line-height: 22px;
  }
`

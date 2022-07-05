import styled from 'styled-components'

export const WrapperCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxWrapper = styled.div`
  border-radius: ${({ borderRadius }) => borderRadius ? `${borderRadius}px` : '5px'};
  border: ${({ borderWidth }) => borderWidth || 1}px solid ${({ theme, borderColor }) => borderColor ? theme[borderColor] : theme.bd_grey_dark};
  background: ${({ theme }) => theme.white};
  width: ${({ width }) => width || '100%'};
  padding: ${({ padding }) => padding || 0};
  margin-top: ${({ marginTop }) => marginTop ? `${marginTop}px` : 0 };
  margin-bottom: ${({ marginBottom }) => marginBottom ? `${marginBottom}px` : 0 };

  &.no__border__bottom {
    border-bottom: none;
  }
`

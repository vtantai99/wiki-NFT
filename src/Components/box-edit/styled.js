import styled from "styled-components";

export const BoxWrapper = styled.div`
  border-radius: ${({ borderRadius }) => borderRadius ? `${borderRadius}px` : '5px'};
  border: ${({ borderWidth }) => borderWidth || 1}px solid ${({ theme, borderColor }) => borderColor ? theme[borderColor] : theme.bd_grey_dark};
  background: ${({ theme }) => theme.white};
  width: ${({ width }) => width || '100%'};
  min-height: ${({ minHeight }) => minHeight ? `${minHeight}px` : ''};
  padding: ${({ padding }) => padding || 0};
  margin-top: ${({ marginTop }) => marginTop ? `${marginTop}px` : 0};
  margin-bottom: ${({ marginBottom }) => marginBottom ? `${marginBottom}px` : 0};

  position: relative;

  .box__btn__edit {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(100%);
  }
`
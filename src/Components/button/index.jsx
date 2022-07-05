import { Image, TextNormal } from 'Components'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const WrapperButton = styled.div`
  cursor: pointer;
  position: relative;
  .login__text {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const ButtonImage = ({ text, onClick, color, fontSize, fontWeight, imageButton, ...rest }) => (
  <WrapperButton onClick={onClick} {...rest}>
    <Image src={imageButton} alt="button__img" />
    <TextNormal className="login__text" color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {text}
    </TextNormal>
  </WrapperButton>
)

ButtonImage.defaultProps = {
  text: '',
  color: 'white',
  fontSize: 'size_20',
  fontWeight: 'fw_400'
}

ButtonImage.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  imageButton: PropTypes.string
}

export { ButtonImage }

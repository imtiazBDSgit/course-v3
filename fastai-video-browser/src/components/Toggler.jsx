import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

const StyledToggleWrapper = styled.span`
  padding: 5% 0;
  z-index: 20;
  color: white;
  cursor: pointer;
  font-size: 2rem;
  width: 30px;
  position: absolute;
  top: 1.7rem;
  text-align: center;
  right: ${props => props.right || 'inherit'};
  left: ${props => props.left || 'inherit'};
  background-color: var(--fastai-blue);
`

const Icon = styled(FontAwesome)`
  vertical-align: middle;
  font-size: 1rem;
`

const Toggler = ({ onClick, condition, iconTrue, iconFalse, styles }) => (
  <StyledToggleWrapper {...styles} onClick={onClick} role="button" tabIndex="0">
    {condition ? <Icon className={iconTrue} name={iconTrue}/> : <Icon className={iconFalse} name={iconFalse} />}
  </StyledToggleWrapper>
)

export default Toggler

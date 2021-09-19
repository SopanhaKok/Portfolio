import React from 'react'
import styled from 'styled-components'

const CustomButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

const StyledButton = styled.button`
  display: flex;
  font-family: 'Poppins', sans-serif;
  padding: 0.75rem 2rem;
  cursor: pointer;
`

export default CustomButton

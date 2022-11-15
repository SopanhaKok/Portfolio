import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  const year = new Date().getFullYear()
  return <StyledContainer> &copy; Copyright {year}, Vatanak Chamroeun</StyledContainer>
}

const StyledContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 10rem 0 1rem 0;
  text-align: center;
  font-weight: lighter;
`
export default Footer

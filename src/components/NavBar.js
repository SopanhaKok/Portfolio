import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { fadeIn } from '../animations'

const NavBar = ({
  goToSkill,
  goToPortfolio,
  goToEducation,
  goToContact,
  themeToggler,
}) => {
  return (
    <StyledContainer
      className='navbar'
      variants={fadeIn}
      initial='hidden'
      animate='show'
      transition={{ type: 'spring', delay: 0.2, bounce: 0.3 }}
    >
      <h3>VC.</h3>
      <StyledNavBarContainer>
        <StyledNavList onClick={goToPortfolio}>Portfolio</StyledNavList>
        <StyledNavList onClick={goToSkill}>Skills</StyledNavList>
        <StyledNavList onClick={goToContact}>Contacts</StyledNavList>
        <StyledNavList onClick={goToEducation}>Educations</StyledNavList>
        <StyledNavList onClick={themeToggler}>
          <FontAwesomeIcon className='icon' icon={faMoon} />
        </StyledNavList>
      </StyledNavBarContainer>
    </StyledContainer>
  )
}

const StyledContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  @media (max-width: 820px) {
    justify-content: space-around;
    flex-wrap: wrap;
  }
  @media (max-width: 400px) {
    display: block;
    text-align: center;
  }
`

const StyledNavBarContainer = styled.div`
  width: 20rem;
  font-size: 0.9rem;
  font-weight: lighter;
  display: flex;
  justify-content: space-between;
  @media (max-width: 400px) {
    margin: 2rem auto 0;
    justify-contetn: center;
    text-align: center;
  }
`

const StyledNavList = styled.div`
  cursor: pointer;
`

export default NavBar

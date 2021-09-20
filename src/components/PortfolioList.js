import React from 'react'
import styled from 'styled-components'
import Portfolio from './Portfolio'
import { portfolioDatas } from '../datas/Portfolio'
import { fadeIn } from '../animations'
import { motion } from 'framer-motion'
const PortfolioList = ({ portfolioSection, isDarkMode }) => {
  return (
    <StyledContainer
      ref={portfolioSection}
      variants={fadeIn}
      initial='hidden'
      animate='show'
    >
      <StyledTitle>Portfolios</StyledTitle>
      {portfolioDatas.map((data, index) => (
        <Portfolio
          key={index}
          title={data.title}
          content={data.content}
          technologyImages={data.technologyImages}
          links={data.links}
          projectImages={data.projectImages}
          isDarkMode={isDarkMode}
        />
      ))}
    </StyledContainer>
  )
}

const StyledContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 64px;
  color: #ced6f3;
`

const StyledTitle = styled.h2`
  text-align: center;
  font-weight: lighter;
`

export default PortfolioList

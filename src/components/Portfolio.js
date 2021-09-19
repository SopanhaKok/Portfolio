import React from 'react'
import styled from 'styled-components'
import CustomButton from './Button'

import { Link } from 'react-router-dom'

const Portfolio = ({
  title,
  content,
  technologyImages,
  links,
  projectImages,
  isDarkMode,
}) => {
  return (
    <StyledListContainer>
      <StyledContent>
        <h3>{title}</h3>
        <StyledText>{content}</StyledText>
        <StyledListTechnology>
          {technologyImages.map((img) => (
            <StyledTechnologyImage src={img} />
          ))}
        </StyledListTechnology>
        <StyledButtonContainer>
          {links.map((url) => (
            <a
              href={url.src}
              target='_blank'
              style={{ textDecoration: 'none' }}
            >
              <CustomButton style={{ marginRight: '1rem' }}>
                {url.title}
              </CustomButton>
            </a>
          ))}
        </StyledButtonContainer>
      </StyledContent>
      <StyledImageContainer>
        <StyledImageBorder>
          {projectImages.map((img) => (
            <StyledImage src={img} />
          ))}
        </StyledImageBorder>
      </StyledImageContainer>
    </StyledListContainer>
  )
}

const StyledListContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: block;
    text-align: center;
  }
`

const StyledContent = styled.div`
  flex: 3;
  margin-right: 2rem;
  @media (max-width: 800px) {
    margin-right: 0;
  }
`

const StyledImageContainer = styled.div`
  flex: 2;
  @media (max-width: 800px) {
    max-width: 100%;
    width: 100%;
  }
`

const StyledImage = styled.img`
  margin-right: 0.5rem;
  width: 6.25rem;
  @media (max-width: 800px) {
    width: 230px;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    margin-right: 0;
  }
`

const StyledText = styled.p`
  margin: 0.5rem 0;
`

const StyledButtonContainer = styled.div`
  display: flex;
  @media (max-width: 800px) {
    justify-content: center;
    margin-bottom: 2rem;
  }
`

const StyledImageBorder = styled.div`
  background-color: ${(props) =>
    props.isDarkMode ? `rgba(255, 255, 255, 0.08)` : `rgba(0, 0, 0, 0.08)`};

  border-radius: 4px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 800px) {
    display: block;
    width: 100%;
    height: 500px;
    text-align: center;
  }
`

const StyledListTechnology = styled.div`
  margin-bottom: 1rem;
  max-width: 25rem;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    width: 100%;
    max-width: 100%;
    justify-content: center;
  }
`

const StyledTechnologyImage = styled.img`
  margin: 0.3rem 0.3rem 0 0;
`

export default Portfolio

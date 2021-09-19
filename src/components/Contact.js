import React from 'react'
import styled from 'styled-components'
import CustomButton from './Button'
import { FaGithub } from 'react-icons/fa'

import DynamicFaIcon from '../utils/getDynamicIcons'
import { contactsData } from '../datas/Contacts'

const Contact = ({ contactSection }) => {
  return (
    <StyledContainer ref={contactSection}>
      <StyledTitle>Contacts</StyledTitle>
      <StyledContactContainer>
        <CustomButton style={{ alignSelf: 'center', marginBottom: '1rem' }}>
          Contact
        </CustomButton>
        <StyledIconContainer>
          {contactsData.map((data) => (
            <StyledIcon>
              <a href={data.url} target='_blank'>
                <DynamicFaIcon
                  className={data.icon === 'FaGithub' ? 'icon' : ''}
                  name={data.icon}
                  size={data.size}
                  color={data.color}
                />
              </a>
            </StyledIcon>
          ))}
        </StyledIconContainer>
      </StyledContactContainer>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  padding-top: 64px;
  color: #ced6f3;
  text-align: center;
`

const StyledTitle = styled.h2`
  font-weight: lighter;
  margin-bottom: 2rem;
`

const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledIconContainer = styled.div`
  max-width: 10rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`

const StyledIcon = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 1rem 1rem 1rem;
  cursor: pointer;
`

export default Contact

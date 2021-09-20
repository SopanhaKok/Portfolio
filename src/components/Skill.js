import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { skillsData } from '../datas/Skills'
import DynamicFaIcon from '../utils/getDynamicIcons'

const Skill = ({ skillSection }) => {
  return (
    <StyledContainer ref={skillSection}>
      <StyledTitle>Skills</StyledTitle>
      <StyledSkillContainer>
        {skillsData.map((data, index) => (
          <StyledButtonSkill
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <StyledIconGitHub>
              <DynamicFaIcon
                name={data.icon}
                size={data.size}
                color={data.color}
              />
            </StyledIconGitHub>
            {data.text}
          </StyledButtonSkill>
        ))}
      </StyledSkillContainer>
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
`

const StyledSkillContainer = styled.div`
  max-width: 36rem;
  margin: 2rem auto 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const StyledButtonSkill = styled(motion.button)`
  display: flex;
  margin: 0 1rem 1rem 0;
  padding: 0.75rem 1.25rem;
`

const StyledIconGitHub = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  cursor: pointer;
`

export default Skill

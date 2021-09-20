import React from 'react'
import styled from 'styled-components'
import CustomButton from './Button'
import { fadeIn } from '../animations'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

const Introduction = () => {
  return (
    <StyledContainer
      variants={fadeIn}
      initial='hidden'
      animate='show'
      transition={{ type: 'spring', delay: 0.4, bounce: 0.3 }}
    >
      <div>
        <h1>
          Hi, I'm&nbsp;
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Vatanak')
                .pauseFor(1500)
                .deleteAll()
                .start()
            }}
            options={{
              loop: true,
            }}
          />
        </h1>
        <h2 style={{ fontWeight: 'lighter' }}>Mobile Developer!</h2>
      </div>
      <StyledTextContainer>
        <p>
          A junior in Computer Science school at CADT - passionate in developing cross-platform mobile
          applications. Based in Phnom Penh, Cambodia📍
        </p>
      </StyledTextContainer>
      <StyledButtonContainer>
        <a
          style={{ textDecoration: 'none' }}
          href='https://doc-0o-3s-docs.googleusercontent.com/docs/securesc/d2q4vvbqhb05om9otlmpdie8kmcmbd89/2h5blkdbel7nhf67lk793tk5idg631ef/1632064350000/09656665915129857030/09656665915129857030/11iO1e7yWHgV8DzRLfKzsyZMZndDXnx5O?e=download&authuser=0&nonce=t3ttsk9jhnbvc&user=09656665915129857030&hash=21gm3d5p95k26cpoc0nmupbomlh1mtem'
        >
          <CustomButton>CV</CustomButton>
        </a>
      </StyledButtonContainer>
    </StyledContainer>
  )
}

const StyledContainer = styled(motion.div)`
  padding-top: 64px;
  text-align: center;
`

const StyledTextContainer = styled.div`
  margin-top: 1.5rem;
`

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`

export default Introduction

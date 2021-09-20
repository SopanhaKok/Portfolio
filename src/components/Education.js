import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'

import SchoolIcon from '@mui/icons-material/School'
import Typography from '@mui/material/Typography'

import { educationData } from '../datas/Education'

const Education = ({ educationSection, isDarkMode }) => {
  return (
    <StyledContainer ref={educationSection}>
      <StyledTitle>Educations</StyledTitle>
      <Timeline className='education' position='alternate' sx={{ pt: '2rem' }}>
        {educationData.map((data, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: '1.75rem 0' }}
              variant='body2'
              color='text.main'
            >
              <Typography variant='h6' component='span'>
                {data.title}
              </Typography>
              <Typography
                variant='subtitle1'
                style={{
                  fontWeight: 'lighter',
                }}
              >
                {data.subtitle}
              </Typography>
              <Typography variant='subtitle2'>{data.subtitle2}</Typography>
            </TimelineOppositeContent>
            {index === 0 ? (
              <TimelineSeparator className='line'>
                <TimelineConnector />
                <TimelineDot color='inherit'>
                  <SchoolIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
            ) : (
              <TimelineSeparator className='line'>
                <TimelineConnector />
                <TimelineDot
                  color='inherit'
                  style={{
                    width: '34px',
                    height: '34px',
                  }}
                ></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
            )}

            <TimelineContent sx={{ m: 'auto 0' }}>
              {data.timeline}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 64px;
  color: #ced6f3;
  text-align: center;
`

const StyledTitle = styled.h2`
  font-weight: lighter;
`

export default Education

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
          <TimelineItem>
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
        {/* <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: '1.75rem 0' }}
            align='right'
            variant='body2'
            color='text.main'
          >
            <Typography variant='h6'>Computer Science Student</Typography>
            <Typography
              variant='subtitle1'
              style={{ color: '#0ACF83', fontWeight: 'lighter' }}
            >
              Cambodia Academy of Digital Technology
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='inherit' style={{ borderColor: '#0ACF83' }}>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ m: 'auto 0' }}>
            Jun 29, 2021 - Current
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: '1.75rem 0' }}
            variant='body2'
            color='text.main'
          >
            <Typography variant='h6' component='span'>
              English
            </Typography>
            <Typography
              variant='subtitle1'
              style={{ color: '#0ACF83', fontWeight: 'lighter' }}
            >
              Australian Center for Education
            </Typography>
            <Typography variant='subtitle2'>
              An open source mobile with API project. Term 6, Project 1 at CADT
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              color='inherit'
              style={{ borderColor: '#0ACF83', width: '34px', height: '34px' }}
            ></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ m: 'auto 0' }}>
            Jun 29, 2021 - Current
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: '1.75rem 0' }}
            variant='body2'
            color='text.main'
          >
            <Typography variant='h6' component='span'>
              HighSchool
            </Typography>
            <Typography
              variant='subtitle1'
              style={{ color: '#0ACF83', fontWeight: 'lighter' }}
            >
              Chea Sim Sonthormuk High School
            </Typography>
            <Typography variant='subtitle2'>
              An open source mobile with API project. Term 6, Project 1 at CADT
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              color='inherit'
              style={{ borderColor: '#0ACF83', width: '34px', height: '34px' }}
            ></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ m: 'auto 0' }}>
            Graduated in 2019
          </TimelineContent>
        </TimelineItem> */}
      </Timeline>
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

export default Education

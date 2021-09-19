import React, { useRef } from 'react'
import Introduction from '../components/Introduction'

import NavBar from '../components/NavBar'
import PortfolioList from '../components/PortfolioList'
import Skill from '../components/Skill'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = ({ themeToggler }) => {
  const skillSection = useRef(null)
  const portfolioSection = useRef(null)
  const educationSection = useRef(null)
  const contactSection = useRef(null)
  const goToSkill = () => {
    window.scrollTo({ top: skillSection.current.offsetTop, behavior: 'smooth' })
  }
  const goToPortfolio = () => {
    window.scrollTo({
      top: portfolioSection.current.offsetTop,
      behavior: 'smooth',
    })
  }
  const goToEducation = () => {
    window.scrollTo({
      top: educationSection.current.offsetTop,
      behavior: 'smooth',
    })
  }
  const goToContact = () => {
    window.scrollTo({
      top: contactSection.current.offsetTop,
      behavior: 'smooth',
    })
  }
  return (
    <div className='Home'>
      <NavBar
        themeToggler={themeToggler}
        goToSkill={goToSkill}
        goToPortfolio={goToPortfolio}
        goToEducation={goToEducation}
        goToContact={goToContact}
      />
      <Introduction />
      <PortfolioList portfolioSection={portfolioSection} />
      <Skill skillSection={skillSection} />
      <Education educationSection={educationSection} />
      <Contact contactSection={contactSection} />
      <Footer />
    </div>
  )
}

export default Home

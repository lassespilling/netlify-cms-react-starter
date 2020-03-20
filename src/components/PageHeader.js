import React from 'react'
import PropTypes from 'prop-types'
import Logo from './Logo'

import Content from './Content'
import BackgroundImage from './BackgroundImage'
import './PageHeader.scss'
const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = '',
  coronaImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/220px-SARS-CoV-2_without_background.png',
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>
      <Logo size="8rem" color="white" />
      <img src={coronaImg} class="coronaParticles" id="corona1" alt="" />
      <img src={coronaImg} class="coronaParticles" id="corona1" alt="" />
      <img src={coronaImg} class="coronaParticles" id="corona2" alt="" />
      <img src={coronaImg} class="coronaParticles" id="corona3" alt="" />
      <img src={coronaImg} class="coronaParticles" id="corona4" alt="" />
      <img src={coronaImg} class="coronaParticles" id="corona5" alt="" />
      {backgroundImage && (
        <BackgroundImage src={backgroundImage} opacity={0.4} />
      )}
      <div className="container relative">
        {subtitle && (
          <Content className="PageHeader--Subtitle" src={subtitle} />
        )}
        <h1 className="PageHeader--Title">{title}</h1>
      </div>
    </div>
  )
}
PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default PageHeader

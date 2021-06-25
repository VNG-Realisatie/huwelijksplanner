import React from 'react'
import { StyledContainer, StyledSubParagraph, StyledTextContainer, StyledHeading, StyledParagraph, StyledIntro, StyledImage } from './index.styles.js'
import ResponsiveImage from '../ResponsiveImage'
import couple_on_bike_near_city from '../../images/couple_on_bike_near_city.svg'

const Payoff = () => (
  <StyledContainer>
    <StyledIntro>
      <StyledTextContainer>
        <StyledHeading>Huwelijksplanner</StyledHeading>
        <StyledParagraph>Een applicatie gebouwd op open source commonground componenten</StyledParagraph>
        <StyledSubParagraph>Met de huwelijksplanner realiseren we componenten (zowel registratiecomponenten als gebruikersinterface) waarmee gemeenten een goed werkend trouwproces kunnen inrichten. Daarmee voegen we waarde toe en ontzorgen de burger bij het plannen van een huwelijk.</StyledSubParagraph>
        <StyledSubParagraph>
            <h4><b>Snelle links:</b></h4>
            <a target="_blank" href="https://github.com/VNG-Realisatie/huwelijksplanner">Github repository</a><br/>
            <a target="_blank" href="https://componentencatalogus.commonground.nl/producten/74/omschrijving">VNG componenten catalogus</a>
        </StyledSubParagraph>
      </StyledTextContainer>
    </StyledIntro>
    <StyledImage>
      <ResponsiveImage src={couple_on_bike_near_city} alt="Illustratie van een koppel op een scooter in stad" />
    </StyledImage>
  </StyledContainer>
)

export default Payoff

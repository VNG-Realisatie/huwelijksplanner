import React from 'react'
import { StyledContainer, StyledSubParagraph, StyledTextContainer, StyledHeading, StyledParagraph, StyledIntro, StyledImage } from './index.styles.js'
import ResponsiveImage from '../ResponsiveImage'
import undraw_choosing_house_v37h from '../../images/undraw_choosing_house_v37h.svg'

const Payoff = () => (
  <StyledContainer>
    <StyledIntro>
      <StyledTextContainer>
        <StyledHeading>Huwelijksplanner</StyledHeading>
        <StyledParagraph>Een applicatie gebouwd op open source commonground componenten</StyledParagraph>
        <StyledSubParagraph>Met de huwelijksplanner realiseren we componenten (zowel registratiecomponenten als gebruikersinterface) waarmee gemeenten een goed werkend trouwproces kunnen inrichten. Daarmee voegen we waarde toe en ontzorgen de burger bij het plannen van een huwelijk.</StyledSubParagraph>
        <StyledSubParagraph><a target="_blank" href="https://componentencatalogus.commonground.nl/producten/74/omschrijving">Lees hier meer over de huwelijksplanner.</a></StyledSubParagraph>
      </StyledTextContainer>
    </StyledIntro>
    <StyledImage>
      <ResponsiveImage src={undraw_choosing_house_v37h} alt="Illustratie van vrouw op straat in stad" />
    </StyledImage>
  </StyledContainer>
)

export default Payoff

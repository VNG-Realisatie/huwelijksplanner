import React from 'react'
import { StyledContainer, StyledSubParagraph, StyledTextContainer, StyledHeading, StyledParagraph, StyledIntro, StyledImage } from './index.styles.js'
import ResponsiveImage from '../ResponsiveImage'
import undraw_choosing_house_v37h from '../../images/undraw_choosing_house_v37h.svg'

const Payoff = () => (
  <StyledContainer>
    <StyledIntro>
      <StyledTextContainer>
        <StyledHeading>Wedding planner</StyledHeading>
        <StyledParagraph>An application built on open source commonground components</StyledParagraph>
        <StyledSubParagraph>With the wedding planner we realize components (both registration components and user interface) with which municipalities can set up a properly functioning wedding process. In this way we add value and unburden citizens when planning a wedding.</StyledSubParagraph>
        <StyledSubParagraph><a target="_blank" href="https://componentencatalogus.commonground.nl/producten/74/omschrijving">Read more about the wedding planner.</a></StyledSubParagraph>
      </StyledTextContainer>
    </StyledIntro>
    <StyledImage>
      <ResponsiveImage src={undraw_choosing_house_v37h} alt="Illustration of woman walking down the street in city" />
    </StyledImage>
  </StyledContainer>
)

export default Payoff

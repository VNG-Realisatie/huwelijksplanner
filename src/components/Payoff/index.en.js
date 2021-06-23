import React from 'react'
import { StyledContainer, StyledSubParagraph, StyledTextContainer, StyledHeading, StyledParagraph, StyledIntro, StyledImage } from './index.styles.js'
import ResponsiveImage from '../ResponsiveImage'
import undraw_choosing_house_v37h from '../../images/undraw_choosing_house_v37h.svg'

const Payoff = () => (
  <StyledContainer>
    <StyledIntro>
      <StyledTextContainer>
        <StyledHeading>Demodam</StyledHeading>
        <StyledParagraph>A digital municipality built on open source commonground components</StyledParagraph>
        <StyledSubParagraph>Demodam is a fictitious municipal website that shows which reusable open source products and services are available for municipalities.</StyledSubParagraph>
        <StyledSubParagraph><a href="https://commonground.nl/blog/view/6c422c0a-e541-41c8-8261-9c8bc90f4d87/doe-mee-met-demodam-de-common-ground-showcase-website">Read more about Demo dam (dutch)</a></StyledSubParagraph>
      </StyledTextContainer>
    </StyledIntro>
    <StyledImage>
      <ResponsiveImage src={undraw_choosing_house_v37h} alt="Illustration of woman walking down the street in city" />
    </StyledImage>
  </StyledContainer>
)

export default Payoff

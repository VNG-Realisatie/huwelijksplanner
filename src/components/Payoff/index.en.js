import React from 'react'
import {
    StyledContainer,
    StyledSubParagraph,
    StyledTextContainer,
    StyledHeading,
    StyledParagraph,
    StyledIntro,
    StyledImage
} from './index.styles.js'
import ResponsiveImage from '../ResponsiveImage'
import couple_on_bike_near_city from '../../images/couple_on_bike_near_city.svg'

const Payoff = () => (
    <StyledContainer>
        <StyledIntro>
            <StyledTextContainer>
                <StyledHeading>Wedding planner</StyledHeading>
                <StyledParagraph>An application built on open source commonground components</StyledParagraph>
                <StyledSubParagraph>With the wedding planner we realize components (both registration components and
                    user interface) with which municipalities can set up a properly functioning wedding process. In this
                    way we add value and unburden citizens when planning a wedding.</StyledSubParagraph>
                {/*<StyledSubParagraph><a target="_blank" href="https://componentencatalogus.commonground.nl/producten/74/omschrijving">Read more about the wedding planner.</a></StyledSubParagraph>*/}
                <StyledSubParagraph>
                    <h4><b>Quick links:</b></h4>
                    <a target="_blank" href="https://github.com/VNG-Realisatie/huwelijksplanner">Github
                        repository</a><br/>
                    <a target="_blank" href="https://componentencatalogus.commonground.nl/producten/74/omschrijving">VNG
                        componenten catalogus</a>
                </StyledSubParagraph>
            </StyledTextContainer>
        </StyledIntro>
        <StyledImage>
            <ResponsiveImage src={couple_on_bike_near_city}
                             alt="Illustration of woman walking down the street in city"/>
        </StyledImage>
    </StyledContainer>
)

export default Payoff

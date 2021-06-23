import React from 'react'
import { StyledContainer } from './index.styles.js'


import dimpact from './images/dimpact.png'
import maykin from './images/maykinmedia.png'
import conduction from './images/conduction.png'


import foundationForPublicCode from './images/foundation-for-public-code.png'
import kadaster from './images/kadaster.png'

const Logos = () => (
  <StyledContainer>

    <a href="https://conduction.nl/" target="_blank" rel="noopener noreferrer"><img src={conduction} height="45" alt="Logo conduction" /></a>
    <a href="https://www.maykinmedia.nl/" target="_blank" rel="noopener noreferrer"><img src={maykin} height="40" alt="Logo Maykin Media B.V." /></a>

    <a href="https://www.dimpact.nl" target="_blank" rel="noopener noreferrer"><img src={dimpact} height="40" alt="Logo Vereniging Dimpact" /></a>
    <a href="https://www.kadaster.nl" target="_blank" rel="noopener noreferrer"><img src={kadaster} height="60" alt="Het Kadaster" /></a>
    <a href="https://publiccode.net/" target="_blank" rel="noopener noreferrer"><img src={foundationForPublicCode} height="45" alt="Logo Foundation for Public Code" /></a>
  </StyledContainer>
)

export default Logos

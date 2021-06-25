import styled from 'styled-components/macro'

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 ${(p) => p.theme.tokens.spacing05};
  max-width: ${(p) => p.theme.tokens.containerWidth};
  
  th {
    text-align: left;
  }
`

export default Container

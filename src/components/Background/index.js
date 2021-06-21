import styled from 'styled-components/macro'

const Background = styled.div`
  background-color: ${(p) => p.backgroundColor || "#ffffff"};
  color: ${(p) => p.color || "#000000"};

  a {
    color: ${(p) => p.color || "#000000"};
  }
`

export default Background

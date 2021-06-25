import React from 'react'

import SEO from '../components/SEO'
import Navigation from '../components/Navigation'
import Layout from '../components/Layout'
import Flex from '../components/Flex'
import Box from '../components/Box'
import ResponsiveImage from '../components/ResponsiveImage'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Payoff from '../components/Payoff/index.en.js'
import Heading from '../components/Heading'
import Span from '../components/Span'
import Background from '../components/Background'
import Logos from '../components/Logos'
import Timeline from '../components/Timeline'

import casesImage from '../images/undraw_file_analysis_8k9b.svg'
import selectionImage from '../images/undraw_personal_settings_kihd.svg'
import authorizationImage from '../images/undraw_two_factor_authentication_namy.svg'
import dashboardImage from '../images/undraw_dashboard_nklg.svg'
import integrationImage from '../images/undraw_hologram_fjwp.svg'

const IndexPage = ({ location }) => (
  <Layout>
    <SEO title="Wedding planner" />
    <Background backgroundColor="#CC0000">
      <Container>
        <Navigation as="nav" location={location} />
        <Section>
          <Payoff />
        </Section>
      </Container>
    </Background>
    <Background backgroundColor="#2A5587">
      <Container>
        <Logos />
      </Container>
    </Background>
    <Container>
      <Section id="about-demodam">
        <Flex>
          <Box>
            <h2>Introduction</h2>
            <p>With the wedding planner we develop a tool that makes planning a wedding easier
              makes for future bridal couples. So that they can record location, date and wedding official digitally
              can plan, just from the couch, during the weekend, without having to contact the municipality for it
              need for additional explanation.
            </p>
            <p>
              When planning a wedding, a notification is immediately sent, and checks are immediately made
              performed on being allowed to marry. In this way, respondents immediately know whether there are any objections. It
              file, including notification, is submitted for processing in the BRP and BS. Citizens becomes
              better served digitally, and actions for civil servants are limited (savings).
            </p> </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={2/5}>
            <ResponsiveImage src={casesImage} alt="Illustratie van persoon en document" />
          </Box>
          <Box width={3/5}>
            <h2>History</h2>
            <p>The wedding planner project arose from a merger of projects from the
              municipality of Utrecht and the covenant municipalities. These projects had such a lot of overlap and
              connected that in the context of common ground and together they organize being together
              gone. </p></Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={3/5}>
            <h2>Who</h2>
            <p>The wedding planner project is being developed in co-creation by a number of parties.
              Utrecht, Almere and Hoorn are participating from the municipalities. Conduction is from the start
              involved as a developing party and during the process, Eend joined as
              expert on the front end.
            </p> </Box>
          <Box width={2/5}>
            <ResponsiveImage src={selectionImage} alt="Illustratie van documenten met checklist" />
          </Box>
        </Flex>
      </Section>

    </Container>
    <Background backgroundColor="#2A5587">
      <Container>
        <Section>
          <Heading align="center" fontSize="2rem">Roadmap</Heading>
        </Section>
      </Container>
    </Background>
    <Container>
      <Timeline>
        <Timeline.ContainerGreen align="left">
          <Timeline.Content>
            {/*<Span fontSize="0.9rem">Juni 2021</Span>*/}
            <Heading as="h3" fontSize="1.5rem">Result</Heading>
            <p>Mapping current results of Utrecht and the Covenant Municipalities</p>
          </Timeline.Content>
        </Timeline.ContainerGreen>
        <Timeline.ContainerGreen align="right">
          <Timeline.Content>
            {/*<Span fontSize="0.9rem">Juni 2021</Span>*/}
            <Heading as="h3" fontSize="1.5rem">Regroup</Heading>
            <p>Who is going to do what and when</p>
          </Timeline.Content>
        </Timeline.ContainerGreen>
        <Timeline.ContainerGreen align="left">
          <Timeline.Content>
            {/*<Span fontSize="0.9rem">Juni 2021</Span>*/}
            <Heading as="h3" fontSize="1.5rem">BPMn developing wedding <br/> process</Heading>
            {/*<p>Wie gaat wat doen en wanneer</p>*/}
          </Timeline.Content>
        </Timeline.ContainerGreen>
        <Timeline.ContainerGreen align="right">
          <Timeline.Content>
            {/*<Span fontSize="0.9rem">Juni 2021</Span>*/}
            <Heading as="h3" fontSize="1.5rem">Better connection to <br/> Common Ground</Heading>
            {/*<p>Wie gaat wat doen en wanneer</p>*/}
          </Timeline.Content>
        </Timeline.ContainerGreen>
        <Timeline.ContainerGreen align="left">
          <Timeline.Content>
            {/*<Span fontSize="0.9rem">Juni 2021</Span>*/}
            <Heading as="h3" fontSize="1.5rem">User research with fidelity</Heading>
            {/*<p>Wie gaat wat doen en wanneer</p>*/}
          </Timeline.Content>
        </Timeline.ContainerGreen>
        <Timeline.ContainerGreen align="right">
          <Timeline.Content>
            {/*<Span fontSize="0.9rem">Juni 2021</Span>*/}
            <Heading as="h3" fontSize="1.5rem">UX redesign of the customer <br/> journey</Heading>
            {/*<p>Wie gaat wat doen en wanneer</p>*/}
          </Timeline.Content>
        </Timeline.ContainerGreen>
        <Timeline.ContainerGreen align="left">
          <Timeline.Content>
            {/*<Span fontSize="0.9rem">Juni 2021</Span>*/}
            <Heading as="h3" fontSize="1.5rem">Drawing up implementation <br/>roadmap</Heading>
            {/*<p>Wie gaat wat doen en wanneer</p>*/}
          </Timeline.Content>
        </Timeline.ContainerGreen>
        <Timeline.Container align="right">
          <Timeline.Content>
            {/*<Span fontSize="0.9rem">Juni 2021</Span>*/}
            <Heading as="h3" fontSize="1.5rem">Development user interface <br/> “free marriage”
            </Heading>
            {/*<p>Wie gaat wat doen en wanneer</p>*/}
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="left">
          <Timeline.Content>
            {/*<Span fontSize="0.9rem">Juni 2021</Span>*/}
            <Heading as="h3" fontSize="1.5rem">Implementation <br/> “free marriage”
            </Heading>
            {/*<p>Wie gaat wat doen en wanneer</p>*/}
          </Timeline.Content>
        </Timeline.Container>
      </Timeline>
    </Container>
    <Footer location={location} />
  </Layout>
)

export default IndexPage

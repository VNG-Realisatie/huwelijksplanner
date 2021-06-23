import React from 'react'

import SEO from '../components/SEO'
import Navigation from '../components/Navigation'
import ResponsiveImage from '../components/ResponsiveImage'
import Layout from '../components/Layout'

import Footer from '../components/Footer'
import Section from '../components/Section'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Background from '../components/Background'
import Timeline from '../components/Timeline'
import Span from '../components/Span'

import doorontwikkeling from '../images/doorontwikkeling.svg'
import communityImg from '../images/community.svg'
import sprint from '../images/sprint.svg'
import connectingTeams from '../images/connecting-teams.svg'
import startOntwikkeling from '../images/start-ontwikkeling.svg'
import startInitiatief from '../images/start-initiatief.svg'


const RoadmapPage = ({ location }) => (
  <Layout>
    <SEO title="Roadmap" />
    <Background backgroundColor="#ffffff">
    <Container>
      <Navigation as="nav" location={location} />
    </Container>
    </Background>
    <Background backgroundColor="#f5f5f6">
      <Container>
        <Section>
          <Heading align="center">Roadmap</Heading>
        </Section>
      </Container>
    </Background>
    <Container>
      <Section>
          Do you have any ideas about the future development of Demodam or do you miss certain functionality? Take a look at the <a href="https://github.com/orgs/open-zaak/projects/2">feature request backlog</a>.
      </Section>
    </Container>
    <Container>
      <Timeline>
      <Timeline.Container align="right">
          <Timeline.Content>
            <Span fontSize="0.9rem">Q3 - 2019</Span>
            <Heading as="h3" fontSize="1.5rem">Milestone</Heading>
            <p></p>
            <ResponsiveImage src={startOntwikkeling} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="left">
          <Timeline.Content>
            <Span fontSize="0.9rem">Q4 - 2019</Span>
            <Heading as="h3" fontSize="1.5rem">Milestone</Heading>
            <p></p>
            <ResponsiveImage src={startInitiatief} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="right">
          <Timeline.Content>
            <Span fontSize="0.9rem">Q1 - 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Milestone</Heading>
            <p></p>
            <ResponsiveImage src={connectingTeams} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="left">
          <Timeline.Content>
            <Span fontSize="0.9rem">Q2 - 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Milestone</Heading>
            <p></p>
            <ResponsiveImage src={sprint} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="right">
          <Timeline.Content>
            <Span fontSize="0.9rem">Q3 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Milestone</Heading>
            <p></p>
            <ResponsiveImage src={communityImg} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="left">
          <Timeline.Content>
            <Span fontSize="0.9rem">Q4 -2020</Span>
            <Heading as="h3" fontSize="1.5rem">Roadmap</Heading>
            <p>Milestone</p>
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="right">
          <Timeline.Content>
            <Span fontSize="0.9rem">2021</Span>
            <Heading as="h3" fontSize="1.5rem">Milestone</Heading>
            <p>Lorem ipsum</p>
            <ResponsiveImage src={doorontwikkeling} />
          </Timeline.Content>
        </Timeline.Container>
      </Timeline>
    </Container>
    <Footer />
  </Layout>
)

export default RoadmapPage

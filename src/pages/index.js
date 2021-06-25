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
import Payoff from '../components/Payoff'
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

const IndexPage = ({location}) => (
    <Layout>
        <SEO title="Huwelijksplanner"/>
        <Background backgroundColor="#CC0000">
            <Container>
                <Navigation as="nav" location={location}/>
                <Section>
                    <Payoff/>
                </Section>
            </Container>
        </Background>
        <Background backgroundColor="#2A5587">
            <Container>
                <Logos/>
            </Container>
        </Background>
        <Container>
            <Section id="over-demodam">
                <Flex>
                    <Box>
                        <h2>Inleiding</h2>
                        <p>Met de huwelijksplanner ontwikkelen we een tool die het plannen van een huwelijk eenvoudiger
                            maakt voor toekomstige bruidsparen. Zodat ze locatie, datum en trouwambtenaar digitaal
                            kunnen plannen, gewoon vanaf de bank, in het weekend, zonder dat ze daar de gemeente voor
                            nodig hebben voor extra toelichting.
                        </p>
                        <p>
                            Bij het plannen van een huwelijk wordt meteen een melding, én er worden meteen checks
                            uitgevoerd op het mogen trouwen. Zo weten stellen meteen of er geen bezwaren zijn. Het
                            dossier, inclusief melding, wordt aangeleverd voor verwerking in de BRP en BS. Burgers wordt
                            beter digitaal bediend, en acties voor ambtenaren worden beperkt (besparing).
                        </p>
                    </Box>
                </Flex>
            </Section>

            {/*<Section textAlign="center">*/}
            {/*  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jTK-sbee2qM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/}
            {/*</Section>*/}

            <Section>
                <Flex>
                    <Box width={2 / 5}>
                        <ResponsiveImage src={casesImage} alt="Illustratie van persoon en document"/>
                    </Box>
                    <Box width={3 / 5}>
                        <h2>Historie</h2>
                        <p>Het huwelijksplanner project is voortgekomen uit een samenvoeging van projecten van de
                            gemeente Utrecht en de convenant gemeenten. Deze projecten hadden dermate veel overlap en
                            aansluiting hadden dat in het kader van common ground en samen organiseren ze samen zijn
                            gegaan.</p>
                    </Box>
                </Flex>
            </Section>

            <Section>
                <Flex>
                    <Box width={3 / 5}>
                        <h2>Wie</h2>
                        <p>Het huwelijksplanner project wordt in co-creatie ontwikkeld door een aantal partijen.
                            Vanuit de gemeenten nemen Utrecht, Almere en Hoorn deel. Conduction is vanaf het begin
                            betrokken als ontwikkelende partij en gedurende het traject is daar Eend bij gekomen als
                            expert op de front-end.
                        </p>
                    </Box>
                    <Box width={2 / 5}>
                        <ResponsiveImage src={selectionImage} alt="Illustratie van documenten met checklist"/>
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
                {/*<Timeline.Container align="left">*/}
                {/*    <Timeline.Content>*/}
                {/*        <Span fontSize="0.9rem">Juni 2021</Span>*/}
                {/*        <Heading as="h3" fontSize="1.5rem">Kick-off Demodam</Heading>*/}
                {/*        <p>Lancering van Demodam</p>*/}
                {/*    </Timeline.Content>*/}
                {/*</Timeline.Container>*/}
                <Timeline.ContainerGreen align="left">
                    <Timeline.Content>
                        {/*<Span fontSize="0.9rem">Juni 2021</Span>*/}
                        <Heading as="h3" fontSize="1.5rem">Resultaat</Heading>
                        <p>Huidige resultaten Utrecht en Convenant gemeenten in kaart brengen</p>
                    </Timeline.Content>
                </Timeline.ContainerGreen>
                <Timeline.ContainerGreen align="right">
                    <Timeline.Content>
                        {/*<Span fontSize="0.9rem">Juni 2021</Span>*/}
                        <Heading as="h3" fontSize="1.5rem">Hergroeperen</Heading>
                        <p>Wie gaat wat doen en wanneer</p>
                    </Timeline.Content>
                </Timeline.ContainerGreen>
                <Timeline.ContainerGreen align="left">
                    <Timeline.Content>
                        {/*<Span fontSize="0.9rem">Juni 2021</Span>*/}
                        <Heading as="h3" fontSize="1.5rem">BPMn trouwproces ontwikkelen</Heading>
                        {/*<p>Wie gaat wat doen en wanneer</p>*/}
                    </Timeline.Content>
                </Timeline.ContainerGreen>
                <Timeline.ContainerGreen align="right">
                    <Timeline.Content>
                        {/*<Span fontSize="0.9rem">Juni 2021</Span>*/}
                        <Heading as="h3" fontSize="1.5rem">Betere aansluiting bij <br/> Common Ground</Heading>
                        {/*<p>Wie gaat wat doen en wanneer</p>*/}
                    </Timeline.Content>
                </Timeline.ContainerGreen>
                <Timeline.ContainerGreen align="left">
                    <Timeline.Content>
                        {/*<Span fontSize="0.9rem">Juni 2021</Span>*/}
                        <Heading as="h3" fontSize="1.5rem">Gebruikersonderzoek met <br/> trouw stellen</Heading>
                        {/*<p>Wie gaat wat doen en wanneer</p>*/}
                    </Timeline.Content>
                </Timeline.ContainerGreen>
                <Timeline.ContainerGreen align="right">
                    <Timeline.Content>
                        {/*<Span fontSize="0.9rem">Juni 2021</Span>*/}
                        <Heading as="h3" fontSize="1.5rem">UX redesign van de klantreis</Heading>
                        {/*<p>Wie gaat wat doen en wanneer</p>*/}
                    </Timeline.Content>
                </Timeline.ContainerGreen>
                <Timeline.ContainerGreen align="left">
                    <Timeline.Content>
                        {/*<Span fontSize="0.9rem">Juni 2021</Span>*/}
                        <Heading as="h3" fontSize="1.5rem">Opstellen implementatie <br/> routekaart</Heading>
                        {/*<p>Wie gaat wat doen en wanneer</p>*/}
                    </Timeline.Content>
                </Timeline.ContainerGreen>
                <Timeline.Container align="right">
                    <Timeline.Content>
                        {/*<Span fontSize="0.9rem">Juni 2021</Span>*/}
                        <Heading as="h3" fontSize="1.5rem">Ontwikkeling user interface <br/>“gratis trouwen”
                        </Heading>
                        {/*<p>Wie gaat wat doen en wanneer</p>*/}
                    </Timeline.Content>
                </Timeline.Container>
                <Timeline.Container align="left">
                    <Timeline.Content>
                        {/*<Span fontSize="0.9rem">Juni 2021</Span>*/}
                        <Heading as="h3" fontSize="1.5rem">Implementatie <br/> “gratis trouwen”
                        </Heading>
                        {/*<p>Wie gaat wat doen en wanneer</p>*/}
                    </Timeline.Content>
                </Timeline.Container>
            </Timeline>
        </Container>
        <Footer/>
    </Layout>
)

export default IndexPage

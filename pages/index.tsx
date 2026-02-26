import type { NextPage } from "next";
import { Box, Container, extendTheme, Heading, Text } from "@chakra-ui/react";
import Section from "../components/Section";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Container maxW="container.md">
      <Box >
        <Box display="flex" justifyContent="center">
          {/* <Box display="flex" flexDirection="column" justifyContent="space-between">
            <p>Developer</p>
            <p>Food Explorer</p>
            <p>Climber & Gamer</p>
          </Box> */}
          <Box
          flexShrink={0}
          // ml="auto"
          textAlign="center"
          float="right"
          >
          <Box
            w="150px"
            h="150px"
            display="inline-block"
            borderRadius="100%"
            overflow="hidden"
          > 
          <img src="/images/pic.jpg" alt="profile_pic" style={{width: "100%", height: "100%", objectFit: "cover"}}/>
          </Box>
        </Box>
        </Box>
      </Box>
      <Section delay={0.2}>
        <Heading variant="section-title">About</Heading>
        <Box>
          <Text textStyle="h1" word-wrap="break-word" whiteSpace="pre-line">
            Full stack developer who excels at integrating diverse technologies and collaborating across stakeholders to deliver end-to-end solutions that prioritize user experience.
            <br/>
            <br/>
            Over 5 years, I have delivered backend systems, AI-powered tools, and infrastructure 
            improvements generating $1M+ in contract revenue including authentication systems 
            enabling $500k enterprise deals to Python computer vision pipelines driving $660k in 
            client revenue.
            <br/>
            <br/>
            I focus on shipping complete solutions that balance technical excellence with business impact.
          </Text>
        </Box>
        </Section>
      <Section delay={0.2}>
        <Heading variant="section-title">Bio</Heading>
        <Text>2021-2026: Full Stack Developer @ Threekit</Text>
        <Text>2020: Transition to Dev</Text>
        <Text>2016 - 2020: Various Engineering Positions</Text>
        <Text>2016: B. Engineering @ McMaster</Text>
      </Section>
      <Section delay={0.2}>
        <Heading variant="section-title">Achievements</Heading>
        <Text>Queen Venture Scout, Collegiate eSports Manager &amp; Pioneer</Text>
      </Section>
    </Container>
  );
};

export default Home;

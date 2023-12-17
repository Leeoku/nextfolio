import type { NextPage } from "next";
import { Box, Container, extendTheme, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
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
            <Image src="/images/pic.jpg" alt="profile_pic" width="300px" height="350px"/>
          </Box>
        </Box>
        </Box>
      </Box>
      <Section delay={0.2}>
        <Heading variant="section-title">About</Heading>
        <Box>
          <Text textStyle="h1" word-wrap="break-word">
            I&apos;m a full-stack developer who builds tools and digital
            experiences. From a young age, helping others has greatly shaped my
            character. Now, I use code to enhance people&apos;s lives. <br/> <br/>My
            other hobbies include cooking, rock climbing and video games as avenues to meet new
            people, personal improvement and feed my competitive spirit.
          </Text>
        </Box>
        </Section>
      <Section delay={0.2}>
        <Heading variant="section-title">Bio</Heading>
        <Text>Current: Full Stack Developer @ Threekit</Text>
        <p>2020: Transition to Dev</p>
        <p>2016 - 2020: Various Engineering Positions</p>
        <p>2016: B. Engineering @ McMaster</p>
      </Section>
      <Section delay={0.2}>
        <Heading variant="section-title">Achievements</Heading>
        <p>Queen Venture Scout, Collegiate eSports Manager &amp; Pioneer</p>
      </Section>
    </Container>
  );
};

export default Home;

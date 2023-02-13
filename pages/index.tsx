import type { NextPage } from "next";
import { Box, Container, extendTheme, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Container maxW="container.md">
      <Navbar/>
      {/* <Box backgroundColor={"red"} flexGrow={1} display="flex">
        <section>Hello from Toronto!</section>
      </Box> */}
      <Heading>Kenneth Lee</Heading>
      <Box >
        <Box display={{ md: 'flex' }}>
          <Box>
            <p>Developer</p>
            <p>Food Explorer</p>
            <p>Gamer</p>
          </Box>
          <Box
          flexShrink={0}
          ml="auto"
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

      <Heading>About</Heading>
      <Box>
        <Text textStyle="h1">
          I&apos;m a full-stack developer who builds tools and digital
          experiences. From a young age, helping others has greatly shaped my
          character. Code is my entry point to enhance people&apos;s lives. My
          other hobbies include cooking and video games as avenues to meet new
          people, personal improvement and feed my competitive spirit.
        </Text>
      </Box>
      <Heading>Bio</Heading>
      <Text>Current: Full Stack Developer @ Threekit</Text>
      <p>2020: Transition to Dev</p>
      <p>2016 - 2020: Various Engineering Positions</p>
      <p>2016: B. Engineering @ McMaster</p>
      <Heading>Achievements</Heading>
      <p>Queen Venture Scout, Collegiate eSports Manager &amp; Pioneer</p>
    </Container>
  );
};

export default Home;

import Head from 'next/head'
import NavBar from '../Navbar'
import { Box, Container, useColorModeValue, } from '@chakra-ui/react'
import {NextRouter} from "next/router"

interface MainProps {
  children: React.ReactNode,
  router: NextRouter,
}

const Main = ({ children, router }:MainProps) => {
  return (
    <Box as="main" pb={8} bg={useColorModeValue('gray.200', 'gray.800')} height={'100vh'} overflow= "scroll">
      <Head>
        <title>Kenneth Lee - Home</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import styles from "./GridItem.module.css"
import { Global } from '@emotion/react'

export const GridItem = ({children, href, title, thumbnail}) => (
  <Box textAlign="center">
    <LinkBox>
      <Image src={thumbnail} alt={title} placeholder="blur" loading = "lazy" className=""/>
      <LinkOverlay href={href}>
        <Text>{title}</Text>  
      </LinkOverlay>
      <Text>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({children, id, title, thumbnail}) => (
  <Box w="100%" textAlign="center" >
    {/* <LinkBox as={NextLink} href={`/works/${id}`} cursor="pointer"> */}
      <Box w="100%" h="100%">
        <Image src={thumbnail} alt={title} placeholder="blur" loading = "lazy" className={styles.gridItemThumbnail} height="200" width="250" />
        {/* <LinkOverlay as="div" href={`/works/${id}`}> */}
          <Text mt={2}fontSize={16}>{title}</Text>  
        {/* </LinkOverlay> */}
        <Text fontSize={14}>{children}</Text>
      </Box>
    {/* </LinkBox> */}
  </Box>
)
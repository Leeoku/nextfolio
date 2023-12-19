import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image, { StaticImageData } from 'next/image'
import styles from "./GridItem.module.css"
import { FaGithub } from "react-icons/fa";


interface GridItemProps {
  children:React.ReactNode,
  href: string,
  title: string, 
  thumbnail: StaticImageData,
}
interface WorkGridItemProps {
  children:React.ReactNode,
  id?:string,
  title: string, 
  thumbnail: StaticImageData,
  site: string,
}

export const GridItem = ({children, href, title, thumbnail}:GridItemProps) => (
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

export const WorkGridItem = ({children, id, title, thumbnail, site}:WorkGridItemProps) => (
  <Box w="100%" textAlign="center" >
    <LinkBox as={NextLink} href={site} cursor="pointer">
      <Box w="100%" h="100%" cursor="pointer">
        <Image src={thumbnail} alt={title} placeholder="blur" loading = "lazy" className={styles.gridItemThumbnail} height="200" width="250" />
        <Box display="flex" alignContent="center" justifyContent="center" >
          <Text mt={2}fontSize={16} align="center" marginTop="none" marginRight="0.5em">{title}</Text>  
          <FaGithub size={20}/>
        </Box>
        <Text fontSize={14}>{children}</Text>
      </Box>
    </LinkBox>
  </Box>
)
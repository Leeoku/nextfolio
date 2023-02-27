import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

const AnimatedDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop) 
})

const Section = ({children, delay = 0}) => (
  <AnimatedDiv
  animate={{ y: 0, opacity: 1 }}
  initial={{ y: "-10"}}
  // @ts-ignore ignore conflicting prop between chakra, framer
  transition={{ duration: 1, delay }}
  mb={5}
  >
    {children}
  </AnimatedDiv>
)

export default Section
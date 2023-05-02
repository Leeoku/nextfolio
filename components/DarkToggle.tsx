import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const DarkToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
      <IconButton 
      aria-label='Dark Toggle'
      colorScheme={useColorModeValue('teal', 'orange')}
      icon={useColorModeValue(<SunIcon/>, <MoonIcon/>)}
      onClick={toggleColorMode}
      >
      </IconButton>
  )
}

export default DarkToggle
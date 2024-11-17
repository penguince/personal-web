import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      pt={2}
      align="center"
      opacity={0.8}  // Increased opacity to make the text more visible
      fontSize={'sm'}
      color={'green.400'}  // Changed color to a brighter green
    >
      Updated 11/17/2024
    </Box>
  )
}

export default Footer

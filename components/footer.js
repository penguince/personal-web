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
      Updated 8/25/2024
    </Box>
  )
}

export default Footer

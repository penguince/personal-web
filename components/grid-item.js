import Image from 'next/image'
import { Box, Text, LinkBox } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const WorkGridItem = ({
  children,
  repoLink,
  title,
  thumbnail
}) => (
  <Box w="100%" textAlign="center">
    <LinkBox as="a" href={repoLink} target="_blank" cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <Text mt={2} fontSize={20}>
        {title}
      </Text>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)
   
export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)

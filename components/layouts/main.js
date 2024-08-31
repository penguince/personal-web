import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

// Removed the VoxelDogLoader import

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  // Removed the loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Xia Jie Ou's homepage" />
        <meta name="author" content="Xia Jie Ou" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Xia Jie Ou" />
        <meta name="og:title" content="Xia Jie Ou" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Xia Jie Ou - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog /> {/* This will now load directly without a spinner */}

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main

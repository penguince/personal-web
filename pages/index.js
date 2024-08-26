import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an developer based in New York!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Xia Jie Ou
          </Heading>
          <p>Sophomore at CUNY College of Staten Island ( Aspiring Software Engineer / AI/ML Enthusiast / Hiker / Gamer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/imgforsite.png"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Hi, I’m Xia Jie, I’ve been fascinated by technology since I was a kid and 
        I want to learn and navigate towards making and contributing to ml/ai projects and hopefully make 
        an impact towards that part of the industry. In my free time, I enjoy hiking, working out, spending time with friends, and playing tactical FPS games. {' '}
          
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2005</BioYear>
          Born in Brooklyn, New York.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Graduated from Curtis High School International Baccalaureate Program and Recipient of the Advanced Regent Diploma 
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Software Engineering Fellow at Headstarter AI
        </BioSection>
      
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" textAlign="center">
          On the web
        </Heading>
        <Flex align="center" justify="center" wrap="wrap" gap={4} my={4}>
          <Link href="https://github.com/penguince" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoGithub />}
            >
              @penguince
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/xiajieou" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoLinkedin />}
            >
              Xia Jie Ou
            </Button>
          </Link>
          <Link href="mailto:xiajieou.yc@gmail.com" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<EmailIcon />}
            >
              xiajieou.yc@gmail.com
            </Button>
          </Link>
        </Flex>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

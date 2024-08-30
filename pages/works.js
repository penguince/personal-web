import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbChatbot from '../public/images/chatbot.png'
import thumbinv from '../public/images/inv.png'
import thumbPort from '../public/images/firstport.png'
import thumbFlash from '../public/images/flashcard.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
            id="chatbot" 
            title="AI Chatbot" 
            thumbnail={thumbChatbot} 
            repoLink="https://github.com/penguince/ai-support"
          >
            An AI-powered chatbot that provides users with automated customer support and information retrieval.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="inv"
            title="Inventory Management"
            thumbnail={thumbinv}
            repoLink="https://github.com/penguince/inventory-management"
          >
            A inventory management system with search filter.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="port"
            title="First Portfolio Website"
            thumbnail={thumbPort}
            repoLink="https://github.com/penguince/port"
          >
            A portfolio website made using html, css, javascript, and bootstrap framework.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem 
            id="flashcard" 
            title="AI Flashcard" 
            thumbnail={thumbFlash} 
            repoLink="https://github.com/penguince/flashcard-saas"
          >
            A SaaS product that generates dynamic flashcards based on any topic using Openai Api.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

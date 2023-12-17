import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/Section'
import Layout from '../components/layouts/Layout'
import { WorkGridItem } from '../components/GridItem'
import anagramThumb from '../public/images/anagramThumb.png'
import dotaBotThumb from '../public/images/dotaBotThumb.png'
import movieReminderThumb from '../public/images/movieReminderThumb.png'
import pearishThumb from '../public/images/pearishThumb.png'
import muxable from '../public/images/muxable.png'

const Works = () => {
  return (
    <Layout title="Works">
        <Heading  as="h3" fontSize={24} mb={6} mt={6}>Works</Heading>
        <SimpleGrid columns={[1,1,2]} gap={6} columnGap={10}>
          <Section>
            <WorkGridItem id="muxable" title="Muxable" thumbnail={muxable} site="https://github.com/muxable/stream-dashboard">
              Implemented authentication and UI for an open source stream dashboard.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="pearish" title="Pearish" thumbnail={pearishThumb} site="https://github.com/Leeoku/pearish">
              A digital pantry app to scan receipts to track stock levels and expiry dates.
            </WorkGridItem>
          </Section> 
          <Section>
            <WorkGridItem id="anagram" title="Anagram Checker" thumbnail={anagramThumb} site="https://github.com/Leeoku/anagram">
              A simple fullstack web app to check for anagrams.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="dotabot" title="DotaBot" thumbnail={dotaBotThumb} site="https://github.com/Leeoku/DotaBot">
              A personal Discord bot to generate Dota Guide links, register users and create simple profiles
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="movieReminder" title="MovieReminder" thumbnail={movieReminderThumb} site="https://github.com/Leeoku/Movie-Reminder">
              Custom solution checking if movie is airing on TV network from client&apos;s watchlist with reminder email.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
    </Layout>
  )
}

export default Works
import { Box, Heading, Text } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Header from 'src/components/Header/Header'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Header />

      <Box p={4}>
        <Heading as="h1" size="xl">
          Welcome to my Personal Portfolio
        </Heading>
        <Text mt={4}>
          My name is [Your Name] and I am a [Your Job Title] with experience in
          [Your Skills]. Feel free to browse through my portfolio to learn more
          about my work and experience.
        </Text>
        <Text mt={4}>
          <Link to={routes.projects()}>View My Projects</Link>
        </Text>
      </Box>
    </>
  )
}

export default HomePage

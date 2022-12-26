import {
  Flex,
  Heading,
  IconButton,
  Img,
  Spacer,
  useColorMode,
  VStack,
} from '@chakra-ui/react'
import {
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaMoon,
  FaSun,
} from 'react-icons/fa'

import BannerLink, {
  BannerLinkProps,
} from 'src/components/BannerLink/BannerLink'

import logo from './giulio-martena-high-resolution-logo-white-on-transparent-background.png'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const MY_LINKS: BannerLinkProps[] = [
    {
      link: 'https://www.linkedin.com/in/giulio-mario-martena/?locale=en_US',
      ariaLabel: 'linkedin-page',
      icon: <FaLinkedin />,
    },
    {
      link: 'https://www.instagram.com/daily_aiart',
      ariaLabel: 'instagram-page',
      icon: <FaInstagram />,
    },
    {
      link: 'https://github.com/GRawhideMart',
      ariaLabel: 'github-page',
      icon: <FaGithub />,
    },
    {
      link: 'https://g.dev/giuliomariomartena',
      ariaLabel: 'google-dev-page',
      icon: <FaGoogle />,
    },
  ]

  return (
    <VStack>
      <Flex w={'100%'} backgroundColor="gray.800" p={8}>
        <Heading ml={4}>
          <Img src={logo} width="4rem" />
        </Heading>
        <Spacer />
        {MY_LINKS.map((link, index) => (
          <BannerLink
            key={index}
            link={link.link}
            ariaLabel={link.ariaLabel}
            icon={link.icon}
            isRound={true}
          />
        ))}

        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound={true}
          onClick={toggleColorMode}
          aria-label={isDark ? 'toggle-light-mode' : 'toggle-dark-mode'}
        />
      </Flex>
      {children}
    </VStack>
  )
}

export default MainLayout

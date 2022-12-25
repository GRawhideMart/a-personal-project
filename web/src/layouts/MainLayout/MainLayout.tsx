import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
} from '@chakra-ui/react'
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMoon,
  FaSun,
} from 'react-icons/fa'

import BannerLink, {
  BannerLinkProps,
} from 'src/components/BannerLink/BannerLink'

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
  ]

  return (
    <VStack p={5}>
      <Flex w={'100%'}>
        <Heading ml={8} size="md" fontWeight={'semibold'} color="green.400">
          Giulio Mario Martena
        </Heading>
        <Spacer />
        {MY_LINKS.map((link, index) => (
          <BannerLink
            key={index}
            link={link.link}
            ariaLabel={link.ariaLabel}
            icon={link.icon}
            isRound={false}
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

import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <VStack p={5}>
      <Flex w={'100%'}>
        <Heading ml={8} size="md" fontWeight={'semibold'} color="green.400">
          Giulio Mario Martena
        </Heading>
        <Spacer />

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

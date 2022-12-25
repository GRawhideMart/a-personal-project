import { ReactElement } from 'react'

import { IconButton, Link } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface BannerLinkProps {
  link: string
  ariaLabel: string
  isRound?: boolean
  icon: ReactElement<IconType>
}

const BannerLink: React.FC<BannerLinkProps> = ({
  link,
  ariaLabel,
  isRound = true,
  icon,
}) => {
  return (
    <Link href={link} target={'_blank'}>
      <IconButton
        aria-label={ariaLabel}
        icon={icon}
        isRound={isRound}
      ></IconButton>
    </Link>
  )
}

export default BannerLink

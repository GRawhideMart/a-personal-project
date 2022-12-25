// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof BannerLink> = (args) => {
//   return <BannerLink {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'
import { FaGoogle } from 'react-icons/fa'

import BannerLink from './BannerLink'

export const round = () => {
  return (
    <BannerLink
      link="https://www.google.com"
      ariaLabel="navigate to google"
      icon={<FaGoogle />}
    />
  )
}

export const notRound = () => {
  return (
    <BannerLink
      link="https://www.google.com"
      ariaLabel="navigate to google"
      icon={<FaGoogle />}
      isRound={false}
    />
  )
}

export default {
  title: 'Components/BannerLink',
  component: BannerLink,
} as ComponentMeta<typeof BannerLink>

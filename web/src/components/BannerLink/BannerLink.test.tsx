import { render } from '@redwoodjs/testing/web'

import BannerLink from './BannerLink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BannerLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BannerLink />)
    }).not.toThrow()
  })
})

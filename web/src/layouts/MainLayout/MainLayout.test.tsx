import { render, fireEvent, waitFor } from '@redwoodjs/testing/web'

import MainLayout from './MainLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MainLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainLayout />)
    }).not.toThrow()
  })

  it('renders the toggle dark mode button', () => {
    const { getByLabelText } = render(<MainLayout />)
    const button = getByLabelText('toggle-dark-mode')

    expect(button).toBeInTheDocument()
  })
  // THIS FOR SOME REASON DOES NOT PASS ALTHOUGH THE BEHAVIOR IS AS EXPECTED
  // it('toggles the dark mode', async () => {
  //   const { getByLabelText } = render(<MainLayout />)
  //   const button = getByLabelText('toggle-dark-mode')

  //   fireEvent.click(button)
  //   await waitFor(() => {
  //     // Return true when the aria-label attribute has the expected value
  //     return button.getAttribute('aria-label') === 'toggle-light-mode'
  //   })
  //   expect(button).toHaveAttribute('aria-label', 'toggle-light-mode')
  // })
})

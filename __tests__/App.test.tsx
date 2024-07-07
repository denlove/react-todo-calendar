import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../src/pages/Home'

describe('App', () => {
    it('renders heading "Calendar"', () => {
        render(<Home />)

        const linkElement = screen.getByRole('heading', {
            level: 1,
            name: /Calendar/i,
        }) as HTMLHeadingElement
        expect(linkElement).toBeInTheDocument()
    })
})

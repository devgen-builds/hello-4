import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('project page', () => {
  it('shows the project name and description', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello DEVGEN')
    expect(screen.getByText(/one-page "hello" static website/)).toBeInTheDocument()
  })

  it('shows the plan with three milestones', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Plan' })).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    expect(screen.getByText(/Milestone 1:/)).toBeInTheDocument()
    expect(screen.getByText(/Milestone 3:/)).toBeInTheDocument()
  })
})

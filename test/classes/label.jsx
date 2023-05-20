import React from 'react'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field } from '../../lib/index.js'

it(
  'has default className',
  () => {
    render(
      <Form>
        <Field name="foo" label="Foo Label"/>
      </Form>
    )
    const label = screen.getByText('Foo Label')
    expect(label).toHaveClass('label')
  }
)
it(
  'has class from field classes',
  () => {
    render(
      <Form>
        <Field name="foo" label="Foo Label" classes={{ label: 'my-label' }}/>
      </Form>
    )
    const label = screen.getByText('Foo Label')
    expect(label).toHaveClass('my-label')
  }
)
it(
  'has class from form classes',
  () => {
    render(
      <Form classes={{ label: 'my-label' }}>
        <Field name="foo" label="Foo Label" />
      </Form>
    )
    const label = screen.getByText('Foo Label')
    expect(label).toHaveClass('my-label')
  }
)

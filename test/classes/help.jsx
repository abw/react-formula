import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Form, Field } from '../../lib/index.js'

it(
  'has default class',
  () => {
    const { container } = render(
      <Form>
        <Field name="foo" help="Some help"/>
      </Form>
    )
    const help = container.querySelector('div.field div.help')
    expect(help).toBeDefined()
    expect(help).toHaveTextContent('Some help')
  }
)
it(
  'has class from field classes',
  () => {
    const { container } = render(
      <Form>
        <Field name="foo" help="Some help" classes={{ help: 'my-help' }}/>
      </Form>
    )
    const help = container.querySelector('div.field div.my-help')
    expect(help).toBeDefined()
    expect(help).toHaveTextContent('Some help')
  }
)
it(
  'has class from form classes',
  () => {
    const { container } = render(
      <Form classes={{ help: 'my-help' }}>
        <Field name="foo" help="Some help"/>
      </Form>
    )
    const help = container.querySelector('div.field div.my-help')
    expect(help).toBeDefined()
    expect(help).toHaveTextContent('Some help')
  }
)

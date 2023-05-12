import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Form, Fields } from '../../lib/index.js'

const fields = {
  foo: {
    label: 'The foo field'
  },
  bar: {
    label: 'The bar field'
  }
}

it(
  'renders form fields',
  () => {
    const { container } = render(
      <Form fields={fields}>
        <Fields names="foo bar"/>
      </Form>
    )
    const input = container.querySelectorAll('input')
    expect(input[0]).toHaveAttribute('type', 'text')
    expect(input[1]).toHaveAttribute('type', 'text')

    const label = container.querySelectorAll('label')
    expect(label[0]).toHaveTextContent('The foo field')
    expect(label[1]).toHaveTextContent('The bar field')
  }
)

it(
  'renders form fields with props passed down',
  () => {
    const { container } = render(
      <Form fields={fields} showRequired>
        <Fields names="foo bar" required requiredLabel="This is required"/>
      </Form>
    )
    const input = container.querySelectorAll('input')
    expect(input[0]).toHaveAttribute('type', 'text')
    expect(input[1]).toHaveAttribute('type', 'text')

    const label = container.querySelectorAll('label')
    expect(label[0]).toHaveTextContent('The foo field')
    expect(label[1]).toHaveTextContent('The bar field')

    const req1 = label[0].querySelector('span.required')
    expect(req1).toHaveTextContent('This is required')

    const req2 = label[1].querySelector('span.required')
    expect(req2).toHaveTextContent('This is required')
  }
)

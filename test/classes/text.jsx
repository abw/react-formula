import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Form, Field } from '../../lib/index.js'

it(
  'has default class',
  () => {
    const { container } = render(
      <Form>
        <Field name="foo"/>
      </Form>
    )
    const field = container.querySelector('div.field')
    expect(field).toBeDefined()

    const inputs = field.querySelector('div.input')
    expect(inputs).toBeDefined()
    expect(inputs).toHaveClass('text')

  }
)

it(
  'has classes from form',
  () => {
    const { container } = render(
      <Form
        classes={{
          field: 'my-field',
          input: 'my-input',
          text: 'my-text',
        }}
      >
        <Field name="foo"/>
      </Form>
    )
    const field = container.querySelector('div.my-field')
    expect(field).toBeDefined()

    const inputs = field.querySelector('div.my-input')
    expect(inputs).toBeDefined()
    expect(inputs).toHaveClass('my-text')
  }
)

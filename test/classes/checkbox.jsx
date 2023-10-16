import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Form, Field } from '../../lib/index.js'

it(
  'has default class',
  () => {
    const { container } = render(
      <Form>
        <Field name="foo" type="checkbox" text="Hello"/>
      </Form>
    )
    const field = container.querySelector('div.field')
    expect(field).toBeDefined()

    const inputs = field.querySelector('div.input')
    expect(inputs).toBeDefined()
    expect(inputs).toHaveClass('checkbox')

    const label = inputs.querySelector('label')
    expect(label).toBeDefined()
    expect(label).toHaveClass('checkbox')

    const control = label.querySelector('input')
    expect(control).toBeDefined()
    expect(control).toHaveAttribute('type', 'checkbox')

    const caption = label.querySelector('span')
    expect(caption).toBeDefined()
    // expect(caption).toHaveClass('caption')     // TODO

  }
)

it(
  'has classes from form',
  () => {
    const { container } = render(
      <Form
        /*
        classes={{
          field: 'my-field',
          input: 'my-input',
          checkbox: 'my-checkbox',
          option: 'my-option',
          label: 'my-label',
          // caption: 'my-caption',
        }}
        */
      >
        <Field
          name="foo" type="checkbox" text="Hello"
          className='my-field'
          labelClass='my-label'
        />
      </Form>
    )
    const field = container.querySelector('div.my-field')
    expect(field).toBeDefined()

    const inputs = field.querySelector('div.input')
    expect(inputs).toBeDefined()
    expect(inputs).toHaveClass('checkbox')

    const label = inputs.querySelector('label')
    expect(label).toBeDefined()
    expect(label).toHaveClass('my-label')

    const control = label.querySelector('input')
    expect(control).toBeDefined()
    expect(control).toHaveAttribute('type', 'checkbox')
  }
)

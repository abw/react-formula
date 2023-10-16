import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'

import { Form, Field } from '../../lib/index.js'

it(
  'has default class',
  () => {
    const { container } = render(
      <Form>
        <Field
          name="foo" type="radio"
          options={['foo', 'bar', 'baz']}
        />
      </Form>
    )
    const field = container.querySelector('div.field')
    expect(field).toBeDefined()

    const options = field.querySelector('div.options')
    expect(options).toBeDefined()
    // expect(options).toHaveClass('radio')

    const label = options.querySelector('label')
    expect(label).toBeDefined()
    expect(label).toHaveClass('radio')

    const control = label.querySelector('input')
    expect(control).toBeDefined()
    expect(control).toHaveAttribute('type', 'radio')

    const caption = label.querySelector('span')
    expect(caption).toBeDefined()
    // expect(caption).toHaveClass('caption')
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
          radio: 'my-radio',
          option: 'my-option',
          label: 'my-label',
          // caption: 'my-caption',
        }}
        */
      >
        <Field
          name="foo" type="radio"
          className='my-field'
          optionsClass='my-options'
          optionClass='my-option'
          options={[
            'foo', 'bar',
            { value: 'baz', text: 'BAZ', className: 'my-baz' }
          ]}
        />
      </Form>
    )
    const field = container.querySelector('div.my-field')
    expect(field).toBeDefined()

    const options = field.querySelector('div.my-options')
    expect(options).toBeDefined()

    const labels = options.querySelectorAll('label')
    expect(labels.length).toBe(3)
    expect(labels[0]).toHaveClass('my-option')
    expect(labels[1]).toHaveClass('my-option')
    expect(labels[2]).toHaveClass('my-option')
    expect(labels[2]).toHaveClass('my-baz')

    const control = labels[0].querySelector('input')
    expect(control).toBeDefined()
    expect(control).toHaveAttribute('type', 'radio')

    const caption = labels[0].querySelector('span')
    expect(caption).toBeDefined()
    // expect(caption).toHaveClass('my-caption')     // TODO

  }
)

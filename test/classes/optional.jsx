import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Form, Field } from '../../lib/index.js'

it(
  'has default class',
  () => {
    const { container } = render(
      <Form showOptional>
        <Field name="foo" label="The Foo Field"/>
      </Form>
    )
    const optional = container.querySelector('div.field label span')
    expect(optional).toBeDefined()
    expect(optional).toHaveClass('optional')
  }
)
it(
  'has class from field classes',
  () => {
    const { container } = render(
      <Form showOptional>
        <Field name="foo" label="The Foo Field" classes={{ optional: 'is-optional' }}/>
      </Form>
    )
    const optional = container.querySelector('div.field label span')
    expect(optional).toBeDefined()
    expect(optional).toHaveClass('is-optional')
  }
)
it(
  'optional label has class from form classes',
  () => {
    const { container } = render(
      <Form classes={{ optional: 'is-optional' }} showOptional>
        <Field name="foo" label="The Foo Field"/>
      </Form>
    )
    const optional = container.querySelector('div.field label span')
    expect(optional).toBeDefined()
    expect(optional).toHaveClass('is-optional')
  }
)

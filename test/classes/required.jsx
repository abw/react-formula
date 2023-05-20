import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Form, Field } from '../../lib/index.js'

it(
  'has default class',
  () => {
    const { container } = render(
      <Form showRequired>
        <Field required name="foo" label="The Foo Field"/>
      </Form>
    )
    const required = container.querySelector('div.field label span')
    expect(required).toBeDefined()
    expect(required).toHaveClass('required')
  }
)
it(
  'has class from field classes',
  () => {
    const { container } = render(
      <Form showRequired>
        <Field name="foo" label="The Foo Field" required classes={{ required: 'is-required' }}/>
      </Form>
    )
    const required = container.querySelector('div.field label span')
    expect(required).toBeDefined()
    expect(required).toHaveClass('is-required')
  }
)
it(
  'required label has class from form classes',
  () => {
    const { container } = render(
      <Form classes={{ required: 'is-required' }} showRequired>
        <Field name="foo" label="The Foo Field" required/>
      </Form>
    )
    const required = container.querySelector('div.field label span')
    expect(required).toBeDefined()
    expect(required).toHaveClass('is-required')
  }
)

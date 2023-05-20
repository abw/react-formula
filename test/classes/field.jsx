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
    const fields = container.querySelectorAll('div.field')
    expect(fields.length).toBe(1)
  }
)
it(
  'has class from field classes',
  () => {
    const { container } = render(
      <Form>
        <Field name="foo" classes={{ field: 'my-field' }}/>
      </Form>
    )
    const fields = container.querySelectorAll('div.my-field')
    expect(fields.length).toBe(1)
  }
)
it(
  'has class from field className',
  () => {
    const { container } = render(
      <Form>
        <Field name="foo" className="my-field"/>
      </Form>
    )
    const fields = container.querySelectorAll('div.my-field')
    expect(fields.length).toBe(1)
  }
)
it(
  'has class from field className and classes',
  () => {
    const { container } = render(
      <Form>
        <Field name="foo" className="my-field" classes={{ field: 'your-field' }}/>
      </Form>
    )
    const fields = container.querySelector('div.my-field')
    expect(fields).toBeDefined()
    expect(fields).toHaveClass('my-field')
    expect(fields).toHaveClass('your-field')
  }
)
it(
  'has class from form classes',
  () => {
    const { container } = render(
      <Form classes={{ field: 'my-field' }}>
        <Field name="foo"/>
      </Form>
    )
    const fields = container.querySelector('div.my-field')
    expect(fields).toBeDefined()
  }
)
it(
  'has class from form classes and local className',
  () => {
    const { container } = render(
      <Form classes={{ field: 'my-field' }}>
        <Field name="foo" className="your-field"/>
      </Form>
    )
    const fields = container.querySelector('div.my-field')
    expect(fields).toBeDefined()
    expect(fields).toHaveClass('my-field')
    expect(fields).toHaveClass('your-field')
  }
)

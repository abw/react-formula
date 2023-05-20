import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { Form, Field, Submit } from '../../lib/index.js'

it(
  'has default class',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Form>
        <Field name="foo" className="foo"/>
        <Field name="bar" className="bar"/>
        <Field name="baz" className="baz" required/>
        <Submit/>
      </Form>
    )
    const foo    = container.querySelector('div.field.foo')
    const bar    = container.querySelector('div.field.bar')
    const baz    = container.querySelector('div.field.baz')
    const submit = container.querySelector('button')
    expect(foo).toBeDefined()
    expect(bar).toBeDefined()
    expect(baz).toBeDefined()
    expect(submit).toBeDefined()

    // focus on foo field
    const input = foo.querySelector('input')
    await act( () => user.click(input) )
    expect(foo).toHaveClass('focus')

    // submit the form
    await act( () => user.click(submit) )
    expect(foo).toHaveClass('valid')
    expect(bar).toHaveClass('valid')
    expect(baz).toHaveClass('invalid')
  }
)
it(
  'has form classes',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Form classes={{ valid: 'good', invalid: 'bad', focus: 'selected' }}>
        <Field name="foo" className="foo"/>
        <Field name="bar" className="bar"/>
        <Field name="baz" className="baz" required/>
        <Submit/>
      </Form>
    )
    const foo    = container.querySelector('div.field.foo')
    const bar    = container.querySelector('div.field.bar')
    const baz    = container.querySelector('div.field.baz')
    const submit = container.querySelector('button')
    expect(foo).toBeDefined()
    expect(bar).toBeDefined()
    expect(baz).toBeDefined()
    expect(submit).toBeDefined()

    // focus on foo field
    const input = foo.querySelector('input')
    await act( () => user.click(input) )
    expect(foo).toHaveClass('selected')

    // submit the form
    await act( () => user.click(submit) )
    expect(foo).toHaveClass('good')
    expect(bar).toHaveClass('good')
    expect(baz).toHaveClass('bad')
  }
)
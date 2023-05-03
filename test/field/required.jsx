import React from 'react'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field } from '../../lib/index.js'

it(
  'has showRequired',
  () => {
    render(
      <Form>
        <Field name="foo" label="Foo" required showRequired/>
      </Form>
    )
    expect(screen.getByText('Required'))
      .toHaveClass('required')
  }
)

it(
  'should inherit showRequired from form',
  () => {
    render(
      <Form showRequired>
        <Field name="foo" label="Foo" required/>
      </Form>
    )
    // screen.debug()
    expect(screen.getByText('Required'))
      .toHaveClass('required')
  }
)

it(
  'is not required',
  () => {
    render(
      <Form>
        <Field name="foo" label="Foo" showRequired/>
      </Form>
    )
    expect(screen.queryByText('Optional')).toBeNull()
  }
)

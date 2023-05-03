import React from 'react'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field } from '../../lib/index.js'

it(
  'has showOptional',
  () => {
    render(
      <Form>
        <Field name="foo" label="Foo" showOptional/>
      </Form>
    )
    expect(screen.getByText('Optional'))
      .toHaveClass('optional')
  }
)

it(
  'should inherit showOptional from form',
  () => {
    render(
      <Form showOptional>
        <Field name="foo" label="Foo"/>
      </Form>
    )
    expect(screen.getByText('Optional'))
      .toHaveClass('optional')
  }
)

it(
  'is not optional',
  () => {
    render(
      <Form>
        <Field name="foo" label="Foo" required/>
      </Form>
    )
    expect(screen.queryByText('Optional')).toBeNull()
  }
)

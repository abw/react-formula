import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field } from '../../lib/index.js'
import { useState } from 'react'

const BlurTest = () => {
  const [msg, setMsg] = useState(false)
  return (
    <Form>
      <Field
        name="foo" id="foo"
        onBlur={() => setMsg('Hello World')}
      />
      <Field
        name="bar" id="bar"
        onBlur={() => setMsg('Goodbye World')}
      />
      { Boolean(msg) &&
        <div data-testid="msg">{msg}</div>
      }
    </Form>
  )
}

it(
  'should call onBlur',
  async () => {
    const { container } = render(<BlurTest/>)

    // focus on foo field
    await userEvent.click(
      container.querySelector('#foo')
    )
    expect(screen.queryAllByTestId('msg').length)
      .toBe(0)

    // focus on bar field - expect foo's onBlur to be called
    await userEvent.click(
      container.querySelector('#bar')
    )
    expect(screen.getByTestId('msg'))
      .toHaveTextContent('Hello World')

    // focus on foo field - expect bar's onBlur to be called
    await userEvent.click(
      container.querySelector('#foo')
    )
    expect(screen.getByTestId('msg'))
      .toHaveTextContent('Goodbye World')
  }
)

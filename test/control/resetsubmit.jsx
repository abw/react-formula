import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Form, Field, ResetSubmit } from '../../lib/index.js'
import { useState } from 'react'

const ResetSubmitTest = () => {
  const [msg, setMsg] = useState()
  return (
    <Form
      values={{ foo: 'Hello' }}
      onSubmit={values => setMsg(`Foo is ${values.foo}`)}
    >
      <Field name="foo" id="foo" label="The Foo Field"/>
      <ResetSubmit/>
      <div data-testid="msg">{msg}</div>
    </Form>
  )
}

it(
  'should submit form',
  async () => {
    const { container } = render(<ResetSubmitTest/>)
    const user   = userEvent.setup()
    const foo    = container.querySelector('#foo')
    const msg    = screen.getByTestId('msg')
    const reset  = screen.getByRole('button', { name: /reset/i })
    const submit = screen.getByRole('button', { name: /submit/i })

    // click on submit button
    await act( () => user.click(submit) )

    // msg should be rendered
    expect(msg).toHaveTextContent('Foo is Hello')

    // focus on foo field and type some more input
    await act( () => user.click(foo) )
    await act( () => user.keyboard(' World') )

    // click on submit button
    await act( () => user.click(submit) )

    // updated msg should be rendered
    expect(msg).toHaveTextContent('Hello World')

    // click on reset button
    await act( () => user.click(reset) )

    // foo field should be reset
    expect(foo).toHaveValue('Hello')

    // click on submit button
    await act( () => user.click(submit) )

    // msg should be rendered
    expect(msg).toHaveTextContent('Foo is Hello')
  }
)

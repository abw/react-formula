import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Form, Field } from '../../lib/index.js'

it(
  'inherits custom fieldClass from form',
  () => {
    const { container } = render(
      <Form fieldClass="my-field">
        <Field name="foo" label="Foo"/>
      </Form>
    )
    expect(container.querySelector('div.my-field label'))
      .toHaveTextContent('Foo')
  }
)

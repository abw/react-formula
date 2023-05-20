import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { Form, Field, Debug } from '../../lib/index.js'

const DebugExample = () =>
  <Form>
    <Field name="foo" id="foo" label="Foo"/>
    <Field name="bar" id="bar" label="Bar" value="World"/>
    <Debug/>
  </Form>

it(
  'should display Debug panel',
  async () => {
    const user = userEvent.setup()
    const { container } = await act(() => render(<DebugExample/>))
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')

    // focus on foo field and enter some text
    await act( () => user.click(foo) )
    await act( () => user.keyboard('Hello') )
    expect(foo).toHaveValue('Hello')

    // focus on bar field and enter some text
    await act( () => user.click(bar) )
    await act( () => user.keyboard('!') )
    expect(bar).toHaveValue('World!')

    // check debug panel is displaying values
    const debug = container.querySelector('div.debug pre')
    expect(debug).toHaveTextContent('"foo": "Hello"')
    expect(debug).toHaveTextContent('"bar": "World!"')
  }
)

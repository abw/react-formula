import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Form } from '../../lib/index.js'

describe(
  'App',
  () => {
    it(
      'renders form',
      () => {
        const {container} = render(
          <Form>
            {/* <Field name="foo"/> */}
          </Form>
        )
        // screen.debug()
        const forms = container.getElementsByClassName('formula')
        expect(forms.length).toBe(1)
      }
    )
  }
)
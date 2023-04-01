import { describe, it, expect } from 'vitest'
import { INVALID, RESET, SET_FIELD, VALID, VALIDATED, VALIDATING } from '../../lib/Constants.jsx'
import { formReducer } from '../../lib/Form/Reducer.jsx'

describe(
  'formReducer',
  () => {
    it(
      'valid',
      () => expect(
        formReducer({ }, { type: VALID })
      ).toStrictEqual({ valid: true, invalid: false, validating: false })
    )
    it(
      'invalid',
      () => expect(
        formReducer({ }, { type: INVALID })
      ).toStrictEqual({ invalid: true, valid: false, validating: false })
    )
    it(
      'validating',
      () => expect(
        formReducer({ }, { type: VALIDATING })
      ).toStrictEqual({ valid: null, invalid: null, validating: true })
    )
    it(
      'validated',
      () => expect(
        formReducer({ }, { type: VALIDATED })
      ).toStrictEqual({ validating: false })
    )
    it(
      'set_field',
      () => expect(
        formReducer(
          {
            values: { x: 20 },
            fields: { x: { value: 'blah' }, y: { value: 10 } },
          },
          { type: SET_FIELD, name: 'x', state: { focus: true } })
      ).toStrictEqual(
        {
          values: { x: 20 },
          fields: { x: { value: 'blah', focus: true }, y: { value: 10 } },
        }
      )
    ),
    it(
      'reset',
      () => expect(
        formReducer(
          {
            values: { x: 20 },
            fields: { x: 'blah' },
            initialValues: { x: 10 },
            initialFields: { x: 'foo', y: 'bar', z: 'baz' }
          },
          { type: RESET })
      ).toStrictEqual(
        {
          values: { x: 10 },
          fields: { },
          initialValues: { x: 10 },
          initialFields: { x: 'foo', y: 'bar', z: 'baz' }
        }
      )
    )
    // TODO: SET, RESET, USE_FIELD
  }
)

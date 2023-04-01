import { describe, it, expect } from 'vitest'
import { BLUR, FOCUS, INVALID, RESET, SET, VALID, VALIDATED, VALIDATING } from '../../lib/Constants.jsx'
import { fieldReducer } from '../../lib/Field/Reducer.jsx'

describe(
  'fieldReducer',
  () => {
    it(
      'focus',
      () => expect(
        fieldReducer({ }, { type: FOCUS })
      ).toStrictEqual({ focus: true })
    )
    it(
      'blur',
      () => expect(
        fieldReducer({ }, { type: BLUR })
      ).toStrictEqual({ focus: false })
    )
    it(
      'valid',
      () => expect(
        fieldReducer({ }, { type: VALID })
      ).toStrictEqual({ valid: true, invalid: false, validating: false })
    )
    it(
      'invalid',
      () => expect(
        fieldReducer({ }, { type: INVALID })
      ).toStrictEqual({ valid: false, invalid: true, validating: false })
    )
    it(
      'validating',
      () => expect(
        fieldReducer({ }, { type: VALIDATING })
      ).toStrictEqual({ valid: null, invalid: null, validating: true })
    )
    it(
      'validated',
      () => expect(
        fieldReducer({ }, { type: VALIDATED })
      ).toStrictEqual({ validating: false })
    )
    it(
      'set 10',
      () => expect(
        fieldReducer({ }, { type: SET, value: 10 })
      ).toStrictEqual({ value: 10 })
    )
    it(
      'set 20',
      () => expect(
        fieldReducer({ value: 10 }, { type: SET, value: 20 })
      ).toStrictEqual({ value: 20 })
    )
    it(
      'retset',
      () => expect(
        fieldReducer({ initialValue: 10, value: 20 }, { type: RESET })
      ).toStrictEqual({ initialValue: 10, value: 10 })
    )
  }
)

import { describe, it, expect } from 'vitest'
import { INVALID, VALID, VALIDATED, VALIDATING } from '../../lib/Constants.jsx'
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
    // TODO: SET, RESET, USE_FIELD
  }
)

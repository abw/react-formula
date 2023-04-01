import { describe, it, expect } from 'vitest'
import { passValue } from '../../lib/Utils'

describe(
  'passValue',
  () => {
    it(
      'passes values',
      () => expect(passValue('foo')).toBe('foo')
    )
  }
)

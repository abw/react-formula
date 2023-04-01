import { describe, it, expect } from 'vitest'
import { isArray, isDefined, isString } from '../../lib/Utils'

describe(
  'isDefined',
  () => {
    it(
      'string is defined',
      () => expect(isDefined('foo')).toBe(true)
    )
    it(
      '0 is defined',
      () => expect(isDefined(0)).toBe(true)
    )
    it(
      'false is defined',
      () => expect(isDefined(false)).toBe(true)
    )
    it(
      'null is not defined',
      () => expect(isDefined(null)).toBe(false)
    )
    it(
      'undefined is not defined',
      () => expect(isDefined(undefined)).toBe(false)
    )
  }
)

describe(
  'isString',
  () => {
    it(
      'string is string',
      () => expect(isString('foo')).toBe(true)
    )
    it(
      '0 is not a string',
      () => expect(isString(0)).toBe(false)
    )
  }
)

describe(
  'isArray',
  () => {
    it(
      'string is not an array',
      () => expect(isArray('foo')).toBe(false)
    )
    it(
      'array is an array',
      () => expect(isArray([])).toBe(true)
    )
  }
)

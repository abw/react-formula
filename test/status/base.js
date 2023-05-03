import { it, expect } from 'vitest'
import { statusChange } from '../../lib/Status.js'

it(
  'has reset state',
  () => expect(statusChange.reset.changed).toBe(false)
)
it(
  'has changed state',
  () => expect(statusChange.changed.changed).toBe(true)
)
it(
  'has validating state',
  () => expect(statusChange.validating.validating).toBe(true)
)
it(
  'has invalid state',
  () => {
    const state = statusChange.invalid
    expect(state.valid).toBe(false)
    expect(state.invalid).toBe(true)
    expect(state.validating).toBe(false)
  }
)
it(
  'has valid state',
  () => {
    const state = statusChange.valid
    expect(state.valid).toBe(true)
    expect(state.invalid).toBe(false)
    expect(state.validating).toBe(false)
  }
)

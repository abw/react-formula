import { it, expect } from 'vitest'
import { fieldStatus, fieldStatusChange } from '../../lib/Status.js'

it(
  'has default status',
  () => {
    const status = fieldStatus()
    expect(status.valid).toBe(false)
    expect(status.invalid).toBe(false)
    expect(status.changed).toBe(false)
    expect(status.validating).toBe(false)
    expect(status.focus).toBe(false)
    expect(status.disabled).toBe(false)
  }
)

it(
  'has disabled status',
  () => {
    const status = fieldStatus({ disabled: true })
    expect(status.valid).toBe(false)
    expect(status.invalid).toBe(false)
    expect(status.changed).toBe(false)
    expect(status.validating).toBe(false)
    expect(status.focus).toBe(false)
    expect(status.disabled).toBe(true)
  }
)

it(
  'has status state',
  () => {
    const state = fieldStatusChange()
    expect(state.reset.changed).toBe(false)
    expect(state.reset.disabled).toBe(false)
    expect(state.changed.changed).toBe(true)
    expect(state.validating.validating).toBe(true)
    expect(state.invalid.invalid).toBe(true)
    expect(state.valid.valid).toBe(true)
    expect(state.focus.focus).toBe(true)
    expect(state.blur.focus).toBe(false)
  }
)

it(
  'has disabled status state',
  () => {
    const state = fieldStatusChange({ disabled: true })
    expect(state.reset.changed).toBe(false)
    expect(state.reset.disabled).toBe(true)
    expect(state.changed.changed).toBe(true)
    expect(state.validating.validating).toBe(true)
    expect(state.invalid.invalid).toBe(true)
    expect(state.valid.valid).toBe(true)
    expect(state.focus.focus).toBe(true)
    expect(state.blur.focus).toBe(false)
  }
)

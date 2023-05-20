import { it, expect } from 'vitest'
import { selectClass } from '../../lib/Utils.js'

it(
  'should return foo',
  () => expect(selectClass('foo')).toEqual('foo')
)
it(
  'should return bar',
  () => expect(selectClass('bar', { })).toEqual('bar')
)
it(
  'should return wam',
  () => expect(selectClass('wig', { wig: 'wam'})).toEqual('wam')
)


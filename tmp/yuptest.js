#!/usr/bin/env node
import { fail, isString } from '@abw/badger-utils'
import * as yup from 'yup'

const validate = value => yup
  .string()
  .trim()
  .validate(value)

const valid = await validate('foo')
console.log({valid})

const foo = x => x
const bar = x => { throw 'Oops!' }
const baz = x => fail('Oopsie!')
const wam = x => Promise.resolve(x)
const bam = x => Promise.reject({ value: x, message: "I don't like Mondays" })

await maybe('foo', foo)
await maybe('bar', bar)
await maybe('baz', baz)
await maybe('wam', wam)
await maybe('bam', bam)

async function maybe(name, fn) {
  try {
    const value = await fn('testing')
    console.log(`${name} OK: ${value}`);
  }
  catch (e) {
    const msg = isString(e) ? e : e.message
    console.log(`${name} failed: [${msg}]: `, e)

  }
}
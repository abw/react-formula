import { describe, it, expect } from 'vitest'
import { propClasses } from '../../lib/Utils.js'

describe(
  'propClasses()',
  () => {
    it(
      'propClasses()',
      () => expect(
        propClasses(
          { className: 'bar', active: true, color: 'red' },
          { active: 'isActive', color: 'hasColor', size: 'hasSize' },
        )
      ).toStrictEqual('isActive hasColor')
    )
    it(
      'propClasses()',
      () => expect(
        propClasses(
          { className: 'bar', active: true, color: 'red' },
          { active: 'isActive', color: 'hasColor', size: 'hasSize' },
          'foo'
        )
      ).toStrictEqual('foo isActive hasColor')
    )
  }
)


import { propClasses } from '../Utils.js'
import {
  INVALID, VALID, FOCUS, DISABLED
} from '../Constants.jsx'

export const fieldClass = field => {
  const {
    status,
    className,
    fieldClass,
    validClass,
    invalidClass,
    disabledClass,
    focusClass,
  } = field
  return propClasses(
    status,
    {
      [VALID]:    validClass,
      [INVALID]:  invalidClass,
      [FOCUS]:    focusClass,
      [DISABLED]: disabledClass
    },
    fieldClass, className,
  )
}
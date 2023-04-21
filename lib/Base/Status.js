import {
  CHANGED, INVALID, VALID, VALIDATING, RESET
} from '../Constants.jsx'

export const statusUnvalidated = {
  [VALID]:    false,
  [INVALID]:  false,
}

export const baseStatus = {
  [RESET]:      { ...statusUnvalidated, [CHANGED]: false },
  [CHANGED]:    { ...statusUnvalidated, [CHANGED]: true },
  [VALIDATING]: { ...statusUnvalidated, [VALIDATING]: true },
  [INVALID]:    { [VALID]: false, [INVALID]: true,  [VALIDATING]: false },
  [VALID]:      { [VALID]: true,  [INVALID]: false, [VALIDATING]: false },
}

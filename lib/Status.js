import {
  BLUR, CHANGED, DISABLED, FOCUS, INVALID, RESET, SUBMITTED, SUBMITTING, VALID, VALIDATING
} from './Constants.jsx'

export const statusUnvalidated = {
  [VALID]:    false,
  [INVALID]:  false,
}

export const statusChange = {
  [RESET]:      { ...statusUnvalidated, [CHANGED]: false },
  [CHANGED]:    { ...statusUnvalidated, [CHANGED]: true },
  [VALIDATING]: { ...statusUnvalidated, [VALIDATING]: true },
  [INVALID]:    { [VALID]: false, [INVALID]: true,  [VALIDATING]: false },
  [VALID]:      { [VALID]: true,  [INVALID]: false, [VALIDATING]: false },
}

export const formStatus = {
  ...statusUnvalidated,
  [CHANGED]:    false,
  [VALIDATING]: false,
  [SUBMITTING]: false,
  [SUBMITTED]:  false,
}

export const formStatusChange = {
  ...statusChange,
  [RESET]:      formStatus,
  [SUBMITTING]: { [SUBMITTING]: true,  [SUBMITTED]: false },
  [SUBMITTED]:  { [SUBMITTING]: false, [SUBMITTED]: true  },
  [INVALID]:    { ...statusChange[INVALID], [SUBMITTING]: false },
  [VALID]:      { ...statusChange[VALID],   [SUBMITTING]: false },
}

export const fieldStatus = (props={}) => ({
  ...statusUnvalidated,
  [CHANGED]:    false,
  [VALIDATING]: false,
  [FOCUS]:      false,
  [DISABLED]:   props.disabled || false
})

export const fieldStatusChange = props => ({
  ...statusChange,
  [RESET]: fieldStatus(props),
  [FOCUS]: { [FOCUS]: true },
  [BLUR]:  { [FOCUS]: false },
})

export const defaultHandler = field =>
  e => field.set(e.target.value)

export const checkboxHandler = field =>
  e => field.set(e.target.checked)

export const InputHandlers = {
  default:  defaultHandler,
  checkbox: checkboxHandler,
}

export default InputHandlers
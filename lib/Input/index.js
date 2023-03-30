export * from './Handlers.js'
export * from './Prefix.jsx'
export * from './Suffix.jsx'
export * from './Checkbox.jsx'
export * from './Radio.jsx'
export * from './Text.jsx'
export * from './TextArea.jsx'

import Checkbox from './Checkbox.jsx'
import Radio    from './Radio.jsx'
import Text     from './Text.jsx'
import TextArea from './TextArea.jsx'

export const InputTypes  = {
  default:  Text,
  checkbox: Checkbox,
  radio:    Radio,
  text:     Text,
  textarea: TextArea,
}

export default InputTypes
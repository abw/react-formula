export * from './Checkbox.jsx'
export * from './Handlers.js'
export * from './Prefix.jsx'
export * from './Radio.jsx'
export * from './Select.jsx'
export * from './Suffix.jsx'
export * from './Text.jsx'
export * from './TextArea.jsx'

import Checkbox from './Checkbox.jsx'
import Radio    from './Radio.jsx'
import Select   from './Select.jsx'
import Text     from './Text.jsx'
import TextArea from './TextArea.jsx'

export const InputTypes  = {
  default:  Text,
  checkbox: Checkbox,
  select:   Select,
  radio:    Radio,
  text:     Text,
  textarea: TextArea,
}

export default InputTypes
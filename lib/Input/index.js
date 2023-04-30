export * from './Handlers.js'
export { default as Checkbox } from './Checkbox.jsx'
export { default as Prefix   } from './Prefix.jsx'
export { default as Radio    } from './Radio.jsx'
export { default as Select   } from './Select.jsx'
export { default as Suffix   } from './Suffix.jsx'
export { default as Text     } from './Text.jsx'
export { default as TextArea } from './TextArea.jsx'

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
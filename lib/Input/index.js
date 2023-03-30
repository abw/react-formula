export * from './Handlers.js'
export * from './Text.jsx'
export * from './TextArea.jsx'

import Text from './Text.jsx'
import TextArea from './TextArea.jsx'

export const InputTypes  = {
  text:     Text,
  textarea: TextArea
}

export default InputTypes
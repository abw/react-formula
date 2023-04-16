import { useForm } from '../../../../../lib/index.js'

{/* START */}
import React  from 'react'
// PRETEND: import { useForm } from '@abw/react-formula'

const FieldFocusButton = ({name, caption}) => {
  const { setFocus } = useForm()
  return (
    <button className="btn-blue" onClick={ e => setFocus(name, e) }>
      {caption}
    </button>
  )
}

export default FieldFocusButton
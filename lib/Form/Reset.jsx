import React from 'react'
import useForm from './useForm.jsx'

export const Reset = ({ className='', text='Reset', onClick }) => {
  const form = useForm()
  return (
    <button
      className={className}
      onClick={() => form.resetForm({ onReset: onClick })}
    >
      {text}
    </button>
  )
}

export default Reset

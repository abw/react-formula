import React from 'react'
import DefaultButton from './Button.jsx'
import { useForm } from '../Form/Context.js'
import { Themed } from '../Theme.jsx'

const Submit = ({
  type='submit',
  text='Submit',
  className='submit',
  Button=DefaultButton,
  ...props
}) => {
  const { submit, status } = useForm()
  return (
    <Button
      type={type}
      text={text}
      className={className}
      onClick={submit}
      disabled={status.submitting}
      {...props}
    />
  )
}

export default Themed(Submit, 'Form.Submit')
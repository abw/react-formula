import React from 'react'
import DefaultButton from './Button.jsx'
import { useForm } from '../Form/Context.js'
import { Themed } from '../Theme.jsx'

const Submit = ({
  type='submit',
  text='Submit',
  Button=DefaultButton,
  ...props
}) => {
  const { submit } = useForm()
  return (
    <Button
      type={type}
      onClick={submit}
      text={text}
      {...props}
    />
  )
}

export default Themed(Submit, 'Form.Submit')
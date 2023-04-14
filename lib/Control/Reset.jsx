import React from 'react'
import DefaultButton from './Button.jsx'
import { useForm } from '../Form/Context.js'
import { Themed } from '../Theme.jsx'

const Reset = ({
  type='reset',
  text='Reset',
  Button=DefaultButton,
  ...props
}) => {
  const { reset } = useForm()
  return (
    <Button
      type={type}
      onClick={() => reset()}
      text={text}
      {...props}
    />
  )
}

export default Themed(Reset, 'Form.Reset')
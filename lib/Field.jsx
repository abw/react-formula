import React from 'react'
import Children from './Field/Children.jsx'
import prepareField from './Field/Prepare.jsx'
import { useForm } from './Form/Context.js'
import { Provider }  from './Field/Context.js'
import { Themed } from './Theme.jsx'

const Field = ({
  name,
  children,
  ...props
}) => {
  const form  = useForm()
  const field = prepareField(form.fieldSpec(name, props))

  return (
    <Provider form={form} {...field}>
      <Children>
        {children}
      </Children>
    </Provider>
  )
}

export default Themed(Field, 'Form.Field')

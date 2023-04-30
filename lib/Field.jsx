import React from 'react'
// import fieldContext from './Field/Context.jsx'
import DefaultLayout from './Field/Layout.jsx'
import { useForm } from './Form/Context.js'
import prepareField from './Field/Prepare.jsx'
import { Provider, Context }  from './Field/Context.js'
import { Themed } from './Theme.jsx'

const Field = ({
  name,
  children,
  Layout=DefaultLayout,
  ...props
}) => {
  const form  = useForm()
  const field = prepareField(form.fieldSpec(name, props))

  return (
    <Provider form={form} {...field}>
      { children
        ? <Context.Consumer>
            {children}
          </Context.Consumer>
        : <Layout/>
      }
    </Provider>
  )
}

export default Themed(Field, 'Form.Field')

import React, { useEffect } from 'react'
import fieldContext from './Field/Context.jsx'
import DefaultLayout from './Field/Layout.jsx'
import useForm from './Form/useForm.jsx'

export const Field = ({
  name,
  render,
  children,
  Layout=DefaultLayout,
  ...props
}) => {
  const form  = useForm()
  const field = form.fieldSpec(name, props)
  console.log(`field spec for ${name}:`, field)
  const { Provider, state } = fieldContext(field)

  /*
  useEffect(
    () => {
      // form.attachField(name, state)
      return () => form.detachField(name)
    },
    [name, state]
    // [field.id]
  )
  useEffect(
    () => {
      form.registerField(name, state)
    },
    [name]
    // [field.id]
  )
  */

  return (
    <Provider>
      FIELD: #{field.id}: {field.name}
      {children}
      {/*
      { render
        ? render(state)
        : <Layout>
            {children}
          </Layout>
      }
      */}
    </Provider>
  )

  /*
  useEffect(
    () => {
      form.useField(name, field)
    },
    [field]
  )
  */

  /*
  return (
    <Provider>
      FIELD: {state.name}
      { render
        ? render(state)
        : <Layout>
            {children}
          </Layout>
      }
    </Provider>
  )
  */
}

export default Field

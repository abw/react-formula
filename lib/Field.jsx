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
  const field = form.useField(name, props)
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
  */
  useEffect(
    () => {
      form.registerField(name, state)
    },
    [name]
    // [field.id]
  )

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

  //return <>FIELD: #{field.id}: {field.name}</>
  /*
  const { Provider, state } = form.useField(
    name, props,
    field => fieldContext(field)
  )
  console.log('got field state:', state);

  if (! state) {
    return null
  }
  // const field = form.useField(name, props)
  const field = form.fieldSpec(name, props)
  console.log('got field spec:', field);
  // console.log('got Field: ', field)
  const { Provider, state } = fieldContext(field)
  console.log('got Field context state: ', state)
  */

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

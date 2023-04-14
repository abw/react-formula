import React from 'react'
// import fieldContext from './Field/Context.jsx'
import DefaultLayout from './Field/Layout.jsx'
import { useForm } from './Form/Context.js'
import prepareField from './Field/Prepare.jsx'
import { Provider }  from './Field/Context.js'

export const Field = ({
  name,
  // render,
  children,
  Layout=DefaultLayout,
  ...props
}) => {
  const form  = useForm()
  const field = prepareField(form.fieldSpec(name, props))

  return (
    <Provider form={form} {...field}>
      <Layout>
        {children}
      </Layout>
    </Provider>
  )
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

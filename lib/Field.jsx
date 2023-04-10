import React, { useEffect } from 'react'
import fieldContext from './Field/Context.jsx'
import DefaultLayout from './Field/Layout.jsx'
import useForm from './Form/useForm.jsx'
import prepareField from './Field/Prepare.jsx'

export const Field = ({
  name,
  render,
  children,
  Layout=DefaultLayout,
  ...props
}) => {
  const form  = useForm()
  const field = form.fieldSpec(name, props)
  // const noob  = React.useRef(true)
  console.log(`field spec for ${name}:`, field)
  const { Provider, state } = fieldContext(field, form)

  return (
    <Provider>
      <div>
        FIELD: #{field.id}: {field.name} is {field.value}
      </div>
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

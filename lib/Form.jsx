import React from 'react'
import formContext from './Form/Context.jsx'
import DefaultLayout from './Form/Layout.jsx'

export const Form = ({
  render,
  children,
  Layout=DefaultLayout,
  ...props
}) => {
  const { Provider, state } = formContext(props)
  return (
    <Provider>
      { render
        ? render(state)
        : <Layout>
            {children}
          </Layout>
      }
    </Provider>
  )
}

export default Form

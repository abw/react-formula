import React         from 'react'
import DefaultLayout from './Form/Layout.jsx'
import { Provider }  from './Form/Context.js'

export const Form = ({
  // render,
  children,
  Layout=DefaultLayout,
  ...props
}) => {
  // const { Provider, state, handlers } = formContext(props)

  return (
    <Provider {...props}>
      <Layout>
        {children}
      </Layout>
    </Provider>
  )
}
/*
      { render
        ? render({ state, handlers })
*/

export default Form

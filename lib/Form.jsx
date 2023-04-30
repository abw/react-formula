import React         from 'react'
import DefaultLayout from './Form/Layout.jsx'
import { Provider }  from './Form/Context.js'
import { Themed }    from './Theme.jsx'

// TODO: render options like field

const Form = ({
  children,
  Layout=DefaultLayout,
  ...props
}) => {
  return (
    <Provider {...props}>
      <Layout>
        {children}
      </Layout>
    </Provider>
  )
}

export default Themed(Form, 'Form')

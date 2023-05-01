import React from 'react'
// import fieldContext from './Field/Context.jsx'
import DefaultLayout from './Field/Layout.jsx'
import { useForm } from './Form/Context.js'
import prepareField from './Field/Prepare.jsx'
import { Provider, Context }  from './Field/Context.js'
import { Themed } from './Theme.jsx'
import { isArray, isFunction } from '@abw/badger-utils'

const Field = ({
  name,
  children,
  Layout=DefaultLayout,
  ...props
}) => {
  const form  = useForm()
  const field = prepareField(form.fieldSpec(name, props))

  // console.log('children: ', children);
  const childArray = children
    ? isArray(children)
      ? children
      : [children]
    : null

  return (
    <Provider form={form} {...field}>
      { childArray
        ? childArray.map(
          (child, n) => isFunction(child)
            ? <Context.Consumer key={n}>
                {child}
              </Context.Consumer>
            : child
        )
        : <Layout/>
      }
    </Provider>
  )
}

export default Themed(Field, 'Form.Field')

import React from 'react'
import Context from './Context.jsx'
import State from './State.jsx'
import DefaultLayout from './Form/Layout.jsx'
import { useId } from 'react'

export const Form = ({
  render,
  children,
  Layout=DefaultLayout,
  ...props
}) => {
  props.id ||= useId()
  const form = State(props)
  return (
    <Context.Provider value={form}>
      { render
        ? render(form)
        : <Layout form={form}>{children}</Layout>
      }
    </Context.Provider>
  )
}

export default Form

import React from 'react'
import Context from './Context.jsx'
import State from './State.jsx'
import { useId } from 'react'

export const Form = ({ children, ...props }) => {
  props.id ||= useId()
  const state = State(props)
  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  )
}

export default Form

import { createContext, useReducer } from 'react'
import formReducer from './Reducer.jsx'
import formProvider from './Provider.jsx'
import prepareForm from './Prepare.jsx'

export const Context = createContext()

export const formContext = form => {
  const [state, dispatch] = useReducer(
    formReducer,
    prepareForm(form)
  )
  const Provider = formProvider({
    Context,
    state,
    dispatch
  })
  return { Context, Provider, state, dispatch }
}

export default formContext
import { createContext, useReducer } from 'react'
import formReducer from './Reducer.jsx'
import formProvider from './Provider.jsx'
import prepareForm from './Prepare.jsx'
import formHandlers from './Handlers.jsx'

export const Context = createContext()

export const formContext = form => {
  console.log('%c running formContext', 'color:blue')

  const [state, dispatch] = useReducer(
    formReducer,
    prepareForm(form)
  )
  const handlers = formHandlers({
    state,
    dispatch
  })
  const Provider = formProvider({
    Context,
    state,
    dispatch,
    handlers
  })
  return { Context, Provider, state, dispatch, handlers }
}

export default formContext
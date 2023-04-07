import { createContext, useReducer } from 'react'
import fieldReducer from './Reducer.jsx'
import fieldProvider from './Provider.jsx'
import prepareField from './Prepare.jsx'
import fieldHandlers from './Handlers.jsx'

export const Context = createContext()

export const fieldContext = (field, form) => {
  const [state, dispatch] = useReducer(
    fieldReducer,
    prepareField(field)
  )
  const handlers = fieldHandlers({
    state,
    dispatch,
    form
  })
  const Provider = fieldProvider({
    Context,
    state,
    dispatch,
    handlers
  })
  return { Context, Provider, state, dispatch, handlers }
}

export default fieldContext
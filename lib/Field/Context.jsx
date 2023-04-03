import { createContext, useReducer } from 'react'
import fieldReducer from './Reducer.jsx'
import fieldProvider from './Provider.jsx'
import prepareField from './Prepare.jsx'

export const Context = createContext()

export const fieldContext = field => {
  const [state, dispatch] = useReducer(
    fieldReducer,
    prepareField(field)
  )

  const Provider = fieldProvider({
    Context,
    state,
    dispatch
  })
  return { Context, Provider, state, dispatch }
}

export default fieldContext
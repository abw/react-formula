import React from 'react'

export const fieldProvider = ({ Context, state, handlers }) => {
  const FieldProvider = ({children}) => {
    const value = {
      ...state,
      ...handlers
    }
    return (
      <Context.Provider value={value}>
        {children}
      </Context.Provider>
    )
  }
  return FieldProvider
}

export default fieldProvider
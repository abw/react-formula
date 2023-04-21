import React from 'react'

export function formProvider({ Context, state, handlers }) {
  function FormProvider({children}) {
    const value = {
      ...state,
      ...handlers,
    }
    return (
      <Context.Provider value={value}>
        {children}
      </Context.Provider>
    )
  }
  return FormProvider
}

export default formProvider
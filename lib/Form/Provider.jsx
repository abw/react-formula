import React from 'react'

export const formProvider = ({ Context, state, handlers }) => {
  const FormProvider = ({children}) => {
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
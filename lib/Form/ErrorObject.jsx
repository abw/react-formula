import React from 'react'

export const ErrorObject = ({error}) => {
  const label = error.label || error.name
  return (
    <>
      { Boolean(label) && <b>{label}: </b> }
      { error.message }
    </>
  )
}

export default ErrorObject


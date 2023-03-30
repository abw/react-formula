import React from 'react'
import useField from '../useField.jsx'
import DefaultLayout from './Layout.jsx'

export const Field = (props) => {
  const field  = useField(props)
  const {render, Layout} = field

  if (render) {
    return render(field)
  }
  if (Layout) {
    return <Layout field={field}/>
  }
  return <DefaultLayout field={field}/>
}

export default Field

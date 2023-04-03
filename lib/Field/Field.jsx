throw new Error('Field/Field.jsx us deprecated, used Field.js instead')
import React from 'react'
import useField from '../useField.jsx'
import DefaultLayout from './Layout.jsx'

export const Field = (props) => {
  const field  = useField(props)
  const {render, Layout=DefaultLayout} = field
  return render
    ? render(field)
    : <Layout field={field}/>
}

export default Field

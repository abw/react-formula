import React from 'react'
import { useForm } from './Context.js'
import { capitalise } from '@abw/badger-utils'
import { Themed } from '../Theme.jsx'

const showable = ['values', 'status', 'fields']

export const Debug = ({show={ values: true }, showAll=false, ...props}) => {
  const form = useForm()
  return (
    <div className="debug">
      { showable.map(
        item => (props[item] ?? (showAll || show[item])) &&
          <div className="panel" key={item}>
            <h4>{capitalise(item)}</h4>
            <pre>
              {JSON.stringify(form[item], null, 2)}
            </pre>
          </div>
      )}
    </div>
  )
}

export default Themed(Debug, 'Form.Debug')

import React from 'react'
import { useForm } from './Context.js'
import { capitalise } from '@abw/badger-utils'

const showable = ['values', 'config', 'status', 'fields']

export const Debug = ({show={ values: true }, showAll=false}) => {
  const form = useForm()
  return (
    <div className="debug">
      { showable.map(
        item => (showAll || show[item]) &&
          <React.Fragment key={item}>
            <h4>{capitalise(item)}</h4>
            <pre>
              {JSON.stringify(form[item], null, 2)}
            </pre>
          </React.Fragment>
      )}
    </div>
  )
}

export default Debug

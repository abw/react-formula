import React from 'react'
import Field from './Field.jsx'
import { isBoolean, splitList } from '@abw/badger-utils'
import { gridGapClasses } from './Utils.js'

export const Fields = ({
  names,
  grid=false,
  gap=4,
  className,
  ...props
}) => {
  const namesList = splitList(names)
  if (isBoolean(grid) && grid) {
    grid = namesList.length
  }
  return (
    <div className={gridGapClasses({grid, gap, className, props})}>
      { namesList.map(
        (name) => <Field key={name} name={name} {...props}/>
      )}
    </div>
  )
}

// export default Themed(Fields, 'Form.Fields')
export default Fields

import React from 'react'

export const FieldPrefix = ({field}) => {
  const {prefix, prefixClass='prefix'} = field
  return prefix &&
    <div className={prefixClass}>
      {prefix}
    </div>
}

export default FieldPrefix

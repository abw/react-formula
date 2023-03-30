import React from 'react'

export const InputSuffix = ({field}) => {
  const {suffix, suffixClass='suffix'} = field
  return suffix &&
    <div className={suffixClass}>
      {suffix}
    </div>
}

export default InputSuffix

import React from 'react'

export const useLatest = value => {
  const ref = React.useRef(value)
  React.useEffect( () => ref.current = value )
  return ref
}

export default useLatest
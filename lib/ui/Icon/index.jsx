import React from 'react'
import { Transform } from './Transform.jsx'
import { fail, isString } from '@abw/badger-utils'
import { pathStyles } from './styles.js'

const defaultStyle = pathStyles.default

const icons = {
  'angle': 'M448.075,320.014L256.031,127.969L63.925,320.075',
  'angle-up': {
    base: 'angle',
  },
  'angle-right': {
    base: 'angle',
    transform: 'rotate-90'
  },
  'angle-down': {
    base: 'angle',
    transform: 'rotate-180'
  },
  'angle-left': {
    base: 'angle',
    transform: 'rotate-270'
  },
  'angles': 'M448,256L256,64L64,256M448,448L256,256L64,448',
  'arrow': 'M256,448L256,64L112,208L256,64L400,208L256,64M112,208L120,200M400,208L392,200',
  'arrows': 'M144,176L256,64L256,448L144,336L256,448L368,336L256,448L256,64L368,176L256,64M144,176L152,168M368,176L360,168M144,336L152,344M368,336L360,344',
  'caret': 'M267 139a15 15 0 0 0-22 0L90 294a15 15 0 0 0 10 26h312a15 15 0 0 0 10-26L267 139Z',
  'check': 'M64,268L184,388L448,124',
  'circle': 'M256,64C309,64 357,86 392,121C427,155 448,203 448,256C448,362 362,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64Z',
  'cross': 'M424,88L88,424M88,88L424,424',
  'point': 'M112,208L256,64L400,208L304,208L304,448L208,448L208,208L112,208Z',
  'points': 'M112,208L256,64L400,208L304,208L304,304L400,304L255.989,448.011L110.877,302.898L208,304L208,208L112,208Z',
  'square': 'M64,64L448,64L448,448L64,448Z',
  'square10': 'M448 102c0-21-17-38-38-38H102c-21 0-38 17-38 38v308c0 21 17 38 38 38h308c21 0 38-17 38-38V102Z',
  'square20': 'M448,141C448,98 413,64 371,64L141,64C98,64 64,98 64,141L64,371C64,414 98,448 141,448L371,448C414,448 448,414 448,371L448,141Z',
  'square30': 'M448,179C448,116 396,64 333,64L179,64C116,64 64,116 64,179L64,333C64,396 116,448 179,448L333,448C396,448 448,396 448,333L448,179Z',
  'square40': 'M448,218C448,133 379,64 294,64L218,64C133,64 64,133 64,218L64,294C64,379 133,448 218,448L294,448C379,448 448,379 448,294L448,218Z'
}

const lookup = name => {
  const icon = icons[name] || fail(`Invalid icon name: ${name}`)
  if (isString(icon)) {
    return {
      width:  512,
      height: 512,
      path:   icon
    }
  }
  else {
    if (icon.base) {
      const base = lookup(icon.base)
      return { ...base, ...icon }
    }
  }
}

export const Icon = ({name, className='', ...props}) => {
  const icon = lookup(name)
  const { minx=0, miny=0, width, height, transform } = icon
  const style = defaultStyle

  return (
    <svg
      aria-hidden="true" focusable="false"
      className={`icon ${className}`}
      role="img" xmlns="http://www.w3.org/2000/svg"
      viewBox={`${minx} ${miny} ${width} ${height}`}
      style={style}
      onClick={props.onClick}
    >
      { transform
        ? <Transform name={name} icon={icon} transform={transform} className={className}>
            <IconPaths name={name} icon={icon} style={style} className={className}/>
          </Transform>
        : <IconPaths name={name} icon={icon} style={style} className={className}/>
      }
    </svg>
  )
}

const IconPaths = ({icon, style, className=''}) => {
  const {paths, path} = icon
  if (paths) {
    return paths.map(
      (path, n) => <Path path={path} key={n} style={style} className={className}/>
    )
  }
  if (path) {
    return <Path path={path} style={style} className={className}/>
  }
  console.log('No path or paths for icon')
}

const Path = ({path, style, className}) =>
  isString(path)
    ? <path fill="currentColor" d={path} style={style} className={className}/>
    : <PathWithAttrs path={path} style={style} className={className}/>

const PathWithAttrs = ({path, style}) => {
  const {d, opacity=null} = path

  // const {d, opacity=null, style=null} = path

  return <path
    d={d}
    fill="currentColor"
    opacity={opacity}
    style={style}
  />
}

export default Icon

export function propClasses(tests, ...more) {
  let classes = [ ]
  Object.keys(tests).forEach(
    cls => tests[cls] && classes.push(cls)
  )
  more.filter( i => i ).forEach( m => classes.push(m) )
  return classes.join(' ')
}
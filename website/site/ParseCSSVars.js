export function parseCSSVars(text) {
  // remove continuation line breaks
  //  --focus-ring:
  //    0 0 0 var(--focus-ring-gap)   var(--focus-gap-border),
  //    0 0 0 var(--focus-ring-width) var(--focus-ring-border);
  text = text.replaceAll(/(:|,)\s*\n/g, '$1')
  // console.log('removed line breaks: ', text)


  const lines = text.split(/[\r\n]+/)
  let defs    = [ ]
  let comment = [ ]
  let match
  for (let line of lines) {
    if (line.match(/^(@|})/)) {
      // ignore opening / closing block
      // console.log(`meta: [${line}]`)
      continue
    }
    if (line.match(/^\s*$/)) {
      // reset on a blank line
      // console.log(`blank: [${line}]`)
      comment = [ ]
      continue
    }
    if ((match = line.match(/^\s*\/\*\s*(.*?)\s*\*\/$/))) {
      /* SECTION HEADING */
      // console.log(`section heading: [${match[1]}]`)
      comment = [ ]
      defs.push({ section: match[1] })
      continue
    }
    if ((match = line.match(/^\s*\/\/=\s*(.*?)$/))) {
      //= SECTION HEADING
      // console.log(`sub heading: [${match[1]}]`)
      comment = [ ]
      defs.push({ section: match[1] })
      continue
    }
    if ((match = line.match(/\/\/\s*(.*)/))) {
      // regular comment
      // console.log(`comment: [${match[1]}]`)
      comment.push(match[1])
      continue
    }
    if ((match = line.match(/(--[\w-]*):\s*(.*?);/))) {
      // console.log(`definition: [${match[1]}] = [${match[2]}]`)
      const value  = match[2]
      const quoted = value.match(/^'(.*?)'$/)
      const result = quoted ? quoted[1] : value
      defs.push({
        variable:     match[1],
        defaultValue: result,
        description:  comment.join(' ')
      })
      comment = [ ]
      continue
    }
    console.log('failed to match: ', line)
  }
  return defs
}

export default parseCSSVars
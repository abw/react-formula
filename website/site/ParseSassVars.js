export function parseSassVars(text) {
  const lines = text.split(/[\r\n]+/)
  let defs    = [ ]
  let comment = [ ]
  let match
  for (let line of lines) {
    if (line.match(/^\s*$/)) {
      // reset on a blank line
      comment = [ ]
      continue
    }
    if ((match = line.match(/^\/\*\s*(.*?)\s*\*\/$/))) {
      // reset on a section
      comment = [ ]
      defs.push({ section: match[1] })
      continue
    }
    if ((match = line.match(/\/\/\s*(.*)/))) {
      // console.log(`comment: [${match[1]}]`)
      comment.push(match[1])
      continue
    }
    if ((match = line.match(/(\$[\w-]*):\s*(.*?)\s*(!default)?;/))) {
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
    }
  }
  return defs
}
/*
// A hue for your brand used to style various components, including
// checkboxes, radio buttons, etc.
$brand-hue:                 260 !default;
*/
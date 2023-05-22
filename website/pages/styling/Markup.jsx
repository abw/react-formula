import React        from 'react'
import CodeBlock    from '../../site/CodeBlock.jsx'
import Pager        from '../../site/Pager/Styling.jsx'
import form         from './markup/form.html?raw'
import field        from './markup/field.html?raw'
import focus        from './markup/focus.html?raw'
import valid        from './markup/valid.html?raw'
import invalid      from './markup/invalid.html?raw'
import disabled     from './markup/disabled.html?raw'
import fluid        from './markup/fluid.html?raw'
import inline       from './markup/inline.html?raw'
import wide         from './markup/wide.html?raw'
import text         from './markup/text.html?raw'
import textarea     from './markup/textarea.html?raw'
import select       from './markup/select.html?raw'
import checkbox     from './markup/checkbox.html?raw'
import radio        from './markup/radio.html?raw'
import help         from './markup/help.html?raw'
import prefix       from './markup/prefix.html?raw'
import suffix       from './markup/suffix.html?raw'
import required     from './markup/required.html?raw'
import optional     from './markup/optional.html?raw'
import submit       from './markup/submit.html?raw'
import reset        from './markup/reset.html?raw'
import cancel       from './markup/cancel.html?raw'
import resetsubmit  from './markup/resetsubmit.html?raw'
import cancelsubmit from './markup/cancelsubmit.html?raw'
import crsubmit     from './markup/cancelresetsubmit.html?raw'
import errors       from './markup/errors.html?raw'
import debug        from './markup/debug.html?raw'

const Markup = () =>
  <div>
    <h1>Markup Examples</h1>

    <p className="intro">
      These examples show the HTML markup that is typically generated
      by the components.
    </p>

    <h2>Form</h2>
    <CodeBlock
      code={form} caption="Form" language="html"
      expand
    />

    <h2>Field</h2>
    <CodeBlock
      code={field} caption="Field" language="html"
      expand
    />

    <h2>Focussed Field</h2>
    <CodeBlock
      code={focus} caption="Focussed Field" language="html"
      expand
    />

    <h2>Valid Field</h2>
    <CodeBlock
      code={valid} caption="Valid Field" language="html"
      expand
    />

    <h2>Invalid Field</h2>
    <CodeBlock
      code={invalid} caption="Invalid Field" language="html"
      expand
    />

    <h2>Disabled Field</h2>
    <CodeBlock
      code={disabled} caption="Disabled Field" language="html"
      expand
    />

    <h2>Fluid Field</h2>
    <CodeBlock
      code={fluid} caption="Fluid Field" language="html"
      expand
    />
    <h2>Inline Field</h2>
    <CodeBlock
      code={inline} caption="Inline Field" language="html"
      expand
    />
    <h2>Wide Field</h2>
    <CodeBlock
      code={wide} caption="Wide Field" language="html"
      expand
    />


    <h2>Text Field</h2>
    <CodeBlock
      code={text} caption="Text Field" language="html"
      expand
    />

    <h2>Text Area Field</h2>
    <CodeBlock
      code={textarea} caption="Textarea Field" language="html"
      expand
    />

    <h2>Select Field</h2>
    <CodeBlock
      code={select} caption="Select Field" language="html"
      expand
    />

    <h2>Checkbox Field</h2>
    <CodeBlock
      code={checkbox} caption="Checkbox Field" language="html"
      expand
    />

    <h2>Radio Field</h2>
    <CodeBlock
      code={radio} caption="Radio Field" language="html"
      expand
    />

    <h2>Field With Help</h2>
    <CodeBlock
      code={help} caption="Help Field" language="html"
      expand
    />

    <h2>Field With Prefix</h2>
    <CodeBlock
      code={prefix} caption="Prefix Field" language="html"
      expand
    />

    <h2>Field With Suffix</h2>
    <CodeBlock
      code={suffix} caption="Suffix Field" language="html"
      expand
    />

    <h2>Required Label</h2>
    <CodeBlock
      code={required} caption="Required Label" language="html"
      expand
    />

    <h2>Optional Label</h2>
    <CodeBlock
      code={optional} caption="Optional" language="html"
      expand
    />

    <h2>Submit Button</h2>
    <CodeBlock
      code={submit} caption="Submit" language="html"
      expand
    />

    <h2>Reset Button</h2>
    <CodeBlock
      code={reset} caption="Reset" language="html"
      expand
    />

    <h2>Cancel Button</h2>
    <CodeBlock
      code={cancel} caption="Cancel" language="html"
      expand
    />

    <h2>ResetSubmit Buttons</h2>
    <CodeBlock
      code={resetsubmit} caption="ResetSubmit" language="html"
      expand
    />

    <h2>CancelSubmit Buttons</h2>
    <CodeBlock
      code={cancelsubmit} caption="CancelSubmit" language="html"
      expand
    />

    <h2>CancelResetSubmit Buttons</h2>
    <CodeBlock
      code={crsubmit} caption="CancelResetSubmit" language="html"
      expand
    />

    <h2>Errors</h2>
    <CodeBlock
      code={errors} caption="Errors" language="html"
      expand
    />

    <h2>Debug</h2>
    <CodeBlock
      code={debug} caption="Debug" language="html"
      expand
    />

    <Pager uri="markup"/>
  </div>


export default Markup
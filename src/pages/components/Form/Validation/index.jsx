import React          from 'react'
import Example        from '../../../../site/Example.jsx'
import Link           from '../../../../site/Link.jsx'
import Required       from './examples/Required.jsx'
import RequiredSrc    from './examples/Required.jsx?raw'
import { FormLink } from '../../../../site/Links.jsx'

const Validation = () =>
  <div>
    <h1>Validation</h1>
    <p>
      Validation can be applied on two levels: on individual fields
      and/or on the form.
    </p>
    <p>
      You can specify a field is <code>required</code>, as shown here, or
      define your own
      custom <Link to="/components/field/validation" text="field validation"/> functions.
      When the form is submitted, each field will be validated.  If any
      validation errors occur then the form submission will be cancelled and
      the errors displayed.
    </p>
    <Example
      Element={Required} code={RequiredSrc}
      caption="Required Fields"
    >
      <p>
        Try entering some text in the fields below then click on the Submit
        button.  The first two fields are required so you can leave either
        of the them empty to see the validation errors.
      </p>
    </Example>
    <p>
      You can also define a <code>validate</code> function on the <FormLink/>.
      This will be run after any field validation and will be passed
    </p>
  </div>

export default Validation
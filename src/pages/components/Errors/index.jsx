import React          from 'react'
import Example        from '../../../site/Example.jsx'
import Required       from './examples/Required.jsx'
import RequiredSrc    from './examples/Required.jsx?raw'
import ShowErrors     from './examples/ShowErrors.jsx'
import ShowErrorsSrc  from './examples/ShowErrors.jsx?raw'

const Errors = () =>
  <div>
    <h1>Errors</h1>
    <p>
      By default, validation errors will be displayed in the form header.
    </p>
    <Example
      Element={Required} code={RequiredSrc}
      caption="Required Fields"
    >
      <p>
        Try submitting the form below without entering anything for either
        of the first two fields.
      </p>
    </Example>
    <p>
      If you don&apos;t want errors displayed in the header you can set the{' '}
      <code>errorsInHeader</code> form property to <code>false</code>.  You
      can use the <code>Errors</code> component to display them somewhere
      else inside the form.  Or you can implement your own component for
      displaying errors.
    </p>
    <Example
      Element={ShowErrors} code={ShowErrorsSrc}
      caption="Errors"
    />
  </div>

export default Errors
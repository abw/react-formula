import React              from 'react'
import EditForm           from './examples/EditForm.jsx'
import EditFormSrc        from './examples/EditForm.jsx?raw'
import Example            from '../../site/Example.jsx'
import { TutorialPager }  from '../../site/Tutorial.jsx'
import { FormLink } from '../../site/Links.jsx'

const EditFormExample = () =>
  <div>
    <h1>Edit Form</h1>
    <p className="intro">
      Another common use case for form is in editing existing data records.
    </p>

    <h2>Specifying <code>values</code></h2>
    <p>
      You can pass the <code>values</code> property to a <FormLink/> to
      seed it with initial values for fields.
    </p>
    <Example
      Element={EditForm} code={EditFormSrc}
      caption="Edit Form"
    >
      <p>
        Try changing some of the values in the form and then
        click on the &quot;Reset&quot; button.  The fields will
        reset to their original values.
      </p>
    </Example>

    <TutorialPager uri="edit-form"/>
  </div>

export default EditFormExample
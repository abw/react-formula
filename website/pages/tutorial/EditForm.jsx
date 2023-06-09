import React         from 'react'
import Example       from '../../site/Example.jsx'
import TutorialPager from '../../site/Pager/Tutorial.jsx'
import EditForm      from './examples/EditForm.jsx'
import EditFormSrc   from './examples/EditForm.jsx?raw'
import {
  DebugLink, FormHiddenLink, FormLink, FormValuesLink
} from '../../site/Links.jsx'

const EditFormExample = () =>
  <div>
    <h1>Edit Form</h1>
    <p className="intro">
      Another common use case for forms is in editing existing data records.
    </p>

    <h2><code>values</code></h2>
    <p>
      You can pass the <FormValuesLink/> property to a <FormLink/> to
      seed it with initial values for fields.  If there are additional
      hidden values that you want to include when you submit the form then
      you can provide them using the <FormHiddenLink/> property.
    </p>
    <Example
      Element={EditForm} code={EditFormSrc}
      caption="Edit Form"
    >
      <p>
        Try changing some of the values in the form and then
        click on the &quot;Reset&quot; button.  The fields will
        reset to their original values.  The <DebugLink/> component is
        included in this example so you can see what&apos;s going on
        behind the scenes.  We&apos;ll talk more about that on the next
        page.
      </p>
    </Example>

    <h2>Where Next?</h2>
    <p>
      You&apos;ve seen an example of the <DebugLink/> component in action.
      Now it&apos;s time to talk about debugging in a little more detail.
    </p>

    <TutorialPager uri="edit-form"/>
  </div>

export default EditFormExample
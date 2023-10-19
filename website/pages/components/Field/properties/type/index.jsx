import React          from 'react'
import TypeSrc        from './examples/Type.jsx?raw'
import Type           from './examples/Type.jsx'
import FormFieldsSrc  from './examples/FormFields.jsx?raw'
import FormFields     from './examples/FormFields.jsx'
import Example        from '@/site/Example.jsx'
import SeeAlso        from '@/site/SeeAlso.jsx'
import Split          from '@/site/Split.jsx'
import Suggest        from '@/site/Suggest.jsx'
import {
  CheckboxInputLink, DebugLink, FieldLink, FormFieldsLink, FormLink,
  HiddenInputLink, RadioInputLink, SelectInputLink, TextAreaInputLink,
  TextInputLink
} from '@/site/Links.jsx'

const TypeExamples = () =>
  <div className="prose">
    <h1>Field Properties</h1>

    <h2><code>type</code></h2>
    <Split align="end">
      <div>
        <p>
          The <code>type</code> property specifies what kind of input should be
          displayed.  The default value is <code>text</code> corresponding to
          the <TextInputLink/> input component.  Other values can be{' '}
          <code>textarea</code> (see <TextAreaInputLink/>),{' '}
          <code>checkbox</code> (see <CheckboxInputLink/>),{' '}
          <code>radio</code> (see <RadioInputLink/>),{' '}
          <code>select</code> (see <SelectInputLink/>) and{' '}
          <code>hidden</code> (see <HiddenInputLink/>) corresponding to the basic
          HTML input types.
        </p>
        <p>
          You can also set <code>type</code> to be one of the other valid HTML
          input types, e.g. <code>password</code>, <code>email</code>,{' '}
          <code>number</code>, <code>date</code>, <code>color</code>,
          and so on.  These use the same basic <TextInputLink/> input component
          as for <code>text</code> types, but with the <code>type</code> attribute
          set appropriately to use the browser-specific functionality.
        </p>

      </div>
      <Suggest>
        Enter some text in the input fields below. Note how the number field
        uses the browser&apos;s built-in functionality to accept only numbers,
        and the date field provides a date picker.
      </Suggest>
    </Split>
    <Example
      Element={Type} code={TypeSrc}
      caption="type" expand
    >
    </Example>

    <Split>
      <p>
        As with all other <FieldLink/> properties, they can be defined using{' '}
        <FormFieldsLink/> set on the <FormLink/>.
        The benefit of this approach is that it keeps the field definitions
        and markup separate.  As well as making them easier to read and
        maintain, it also has the benefit that field definitions can be
        reused across multiple forms.
      </p>
      <Suggest>
        The example below generates exactly the same form as the one above
        (with the exception of the additional <DebugLink/> component).
        Note that the form data will only include fields that are present
        in the <FormLink/>.  The <code>field5</code> field definition is
        effectively ignored.
      </Suggest>
    </Split>
    <Example
      Element={FormFields}
      code={FormFieldsSrc}
      caption="Form fields"
      expand
    />

    <SeeAlso
      links={[
        'field:name',
        'field:label',
        'form:fields',
        'input:types',
      ]}
    />
  </div>

export default TypeExamples
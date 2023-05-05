import React from 'react'
import Link from './Link.jsx'
import URLS from './URLS.jsx'
import { fail } from '@abw/badger-utils'

export const CodeLink = ({to}) => {
  const entry = URLS[to] || fail(`Invalid CodeLink specified: ${to}`)
  const { url, code, text } = entry
  return <Link to={url}>
    { code
      ? <code>{code}</code>
      : text
    }
  </Link>
}

export const CancelLink = () =>
  <Link to="/components/cancel"><code>Cancel</code></Link>

export const DebugLink = () =>
  <Link to="/components/debug"><code>Debug</code></Link>

export const ErrorsLink = () =>
  <Link to="/components/errors"><code>Errors</code></Link>

export const FormLink = () =>
  <Link to="/components/form"><code>Form</code></Link>

export const FormSetFocusLink = () =>
  <Link to="/components/form/setFocus"><code>setFocus</code></Link>

export const FieldLink = () =>
  <Link to="/components/field"><code>Field</code></Link>

export const FieldsLink = () =>
  <Link to="/components/fields"><code>Fields</code></Link>

export const FieldsetLink = () =>
  <Link to="/components/fieldset"><code>Fieldset</code></Link>

export const FieldLayoutLink = () =>
  <Link to="/components/field/layout"><code>FieldLayout</code></Link>

export const LabelLink = () =>
  <Link to="/components/field/label"><code>Label</code></Link>

export const MessageLink = () =>
  <Link to="/components/message"><code>Message</code></Link>

export const ResetLink = () =>
  <Link to="/components/reset"><code>Reset</code></Link>

export const SubmitLink = () =>
  <Link to="/components/submit"><code>Submit</code></Link>

export const TextLink = () =>
  <Link to="/inputs/text"><code>Text</code></Link>

export const TextArea = () =>
  <Link to="/inputs/textarea"><code>TextArea</code></Link>

export const CheckboxLink = () =>
  <Link to="/inputs/checkbox"><code>Checkbox</code></Link>

export const RadioLink = () =>
  <Link to="/inputs/radio"><code>Radio</code></Link>

export const SelectLink = () =>
  <Link to="/inputs/select"><code>Select</code></Link>

// field links
export const OnBlurLink = () =>
  <CodeLink to="field:onBlur"/>

export const OnChangeLink = () =>
  <CodeLink to="field:onChange"/>

export const OnFocusLink = () =>
  <CodeLink to="field:onFocus"/>

export const OnInvalidLink = () =>
  <CodeLink to="field:onInvalid"/>

export const OnValidLink = () =>
  <CodeLink to="field:onValid"/>

export const OptionalLabelLink = () =>
  <CodeLink to="field:optionalLabel"/>

export const RequiredLink = () =>
  <CodeLink to="field:required"/>

export const RequiredLabelLink = () =>
  <CodeLink to="field:requiredLabel"/>

export const RequiredMessageLink = () =>
  <CodeLink to="field:requiredMessage"/>

export const ShowRequiredLink = () =>
  <CodeLink to="field:showRequired"/>

export const ShowOptionalLink = () =>
  <CodeLink to="field:showOptional"/>

export const ValidateLink = () =>
  <CodeLink to="field:validate"/>

export const ValidateOnBlurLink = () =>
  <CodeLink to="field:validateOnBlur"/>

export const ValidateOnChangeLink = () =>
  <CodeLink to="field:validateOnChange"/>


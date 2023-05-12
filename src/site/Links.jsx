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
  <CodeLink to="component:Cancel"/>

export const DebugLink = () =>
  <CodeLink to="component:Debug"/>

export const ErrorsLink = () =>
  <CodeLink to="component:Errors"/>

export const FormLink = () =>
  <CodeLink to="component:Form"/>

export const FieldLink = () =>
  <CodeLink to="component:Field"/>

export const FieldsLink = () =>
  <CodeLink to="component:Fields"/>

export const FieldsetLink = () =>
  <CodeLink to="component:Fieldset"/>

export const LabelLink = () =>
  <CodeLink to="component:Label"/>

export const LayoutLink = () =>
  <CodeLink to="component:Layout"/>

export const MessageLink = () =>
  <CodeLink to="component:Message"/>

export const ResetLink = () =>
  <CodeLink to="component:Reset"/>

export const SubmitLink = () =>
  <CodeLink to="component:Submit"/>

/*
export const TextLink = () =>
  <CodeLink to="input:Text"/>

export const TextAreaLink = () =>
  <CodeLink to="input:TextArea"/>

export const CheckboxLink = () =>
  <CodeLink to="input:Checkbox"/>

export const RadioLink = () =>
  <CodeLink to="input:Radio"/>

export const SelectLink = () =>
  <CodeLink to="input:Select"/>
*/

// form links
export const FormFieldsLink = () =>
  <CodeLink to="form:fields"/>

export const FormValuesLink = () =>
  <CodeLink to="form:values"/>

export const FormHiddenLink = () =>
  <CodeLink to="form:hidden"/>

export const FormOnSubmitLink = () =>
  <CodeLink to="form:onSubmit"/>

export const FormOnSuccessLink = () =>
  <CodeLink to="form:onSuccess"/>

export const FormOnErrorLink = () =>
  <CodeLink to="form:onError"/>

export const FormSetFocusLink = () =>
  <CodeLink to="form:setFocus"/>

export const FormSetValuesLink = () =>
  <CodeLink to="form:setValues"/>

export const FormValidateLink = () =>
  <CodeLink to="form:validate"/>


// field links
export const FieldLabelLink = () =>
  <CodeLink to="field:label"/>

export const HelpLink = () =>
  <CodeLink to="field:help"/>

export const MinValidateLengthLink = () =>
  <CodeLink to="field:minValidateLength"/>

export const NameLink = () =>
  <CodeLink to="field:name"/>

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

export const TypeLink = () =>
  <CodeLink to="field:type"/>

export const ValidateLink = () =>
  <CodeLink to="field:validate"/>

export const ValidateOnBlurLink = () =>
  <CodeLink to="field:validateOnBlur"/>

export const ValidateOnChangeLink = () =>
  <CodeLink to="field:validateOnChange"/>

// input types
export const TextInputLink = () =>
  <CodeLink to="input:Text"/>

export const TextAreaInputLink = () =>
  <CodeLink to="input:TextArea"/>

export const CheckboxInputLink = () =>
  <CodeLink to="input:Checkbox"/>

export const RadioInputLink = () =>
  <CodeLink to="input:Radio"/>

export const SelectInputLink = () =>
  <CodeLink to="input:Select"/>

export const HiddenInputLink = () =>
  <CodeLink to="input:Hidden"/>


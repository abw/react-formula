import React from 'react'

export const TutorialMenu = {
  title: 'Tutorial',
  url:  '/tutorial',
  items: [
    ['simple-form',           'Defining a Form'],
    ['field-validation',      'Field Validation'],
    ['form-validation',       'Form Validation'],
    ['form-submission',       'Form Submission'],
    ['submission-response',   'Submission Response'],
    ['submission-errors',     'Submission Errors'],
    ['complete-registration', 'Complete Registration Form'],
    ['edit-form',             'Edit Form'],
    ['headless-fields',       'Headless Fields'],
  ]
}

export const ComponentsMenu = {
  title: 'Components',
  url:   '/components',
  items: [
    'component:Form',
    'component:Field',
    'component:Fields',
    'component:Fieldset',
    'component:Submit',
    'component:Reset',
    'component:Cancel',
    'component:ResetSubmit',
    'component:CancelSubmit',
    'component:CancelResetSubmit',
    'component:Changed',
    'component:Label',
    'component:Errors',
    'component:Debug',
  ]
}

export const FormMenu = {
  title: 'Form',
  url:   '/form',
  items: [
    { heading: 'Properties' },
    'form:fields',
    'form:values',
    'form:hidden',
    ['properties',    'Properties - TODO'],
    ['validation',    'Validation'],
    ['validate',      <code key='validate'>validate - TODO</code>],
    ['onSubmit',      <code key='onsubmit'>onSubmit - TODO</code>],
    ['onSuccess',     <code key='onsuccess'>onSuccess - TODO</code>],
    ['onError',       <code key='onsuccess'>onError - TODO</code>],
    ['showErrors',    <code key='showerrors'>showErrors - TODO</code>],
    { heading: 'Functions' },
    ['setValues',    <code key='setValues'>setValues() - TODO</code>],
    ['setFocus',      <code key="setFocus">setFocus()</code>],
    { heading: 'Styling' },
    ['className',       <code key='classname'>className - TODO</code>],
    ['validatingClass', <code key='validatingClass'>validatingClass - TODO</code>],
    ['validClass',      <code key='validClass'>validClass - TODO</code>],
    ['invalidClass',    <code key='invalidClass'>invalidClass - TODO</code>],
    ['errorsClass',     <code key='errorsClass'>errorsClass - TODO</code>],
    ['fieldClass',      <code key='fieldClass'>fieldClass - TODO</code>],
  ]
}
export const FieldMenu = {
  title: 'Field',
  url:   '/field',
  items: [
    { heading: 'Properties' },
    'field:name',
    'field:label',
    'field:type',
    'field:help',
    'field:prefix',
    'field:suffix',
    { heading: 'Validation' },
    'field:required',
    'field:showRequired',
    'field:requiredLabel',
    'field:requiredMessage',
    'field:showOptional',
    'field:optionalLabel',
    'field:prepareValue',
    'field:validate',
    'field:validateOnBlur',
    'field:validateOnChange',
    'field:minValidateLength',
    { heading: 'Events' },
    'field:onFocus',
    'field:onBlur',
    'field:onChange',
    'field:onValid',
    'field:onInvalid',
    { heading: 'Functions' },
    'field:setFocus',
    'field:setValue',
    'field:reset',
  ]
}

export const InputsMenu = {
  title: 'Input Types',
  url:   '/inputs',
  items: [
    'input:Text',
    'input:TextArea',
    'input:Checkbox',
    'input:Radio',
    'input:Select',
    'input:Hidden',
    ['number',    'Number, Date, etc'],
  ]
}

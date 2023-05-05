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

export const FormMenu = {
  title: 'Form',
  url:   '/form',
  items: [
    { heading: 'Properties' },
    ['properties',    'Properties - TODO'],
    ['validation',    'Validation'],
    ['fields',        <code key='fields'>fields - TODO</code>],
    ['values',        <code key='values'>values - TODO</code>],
    ['hidden',        <code key='hidden'>hidden - TODO</code>],
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
    // ['properties',       'Properties'],
    { heading: 'Properties' },
    ['prefix-suffix',    <span key='prefix-suffix'><code>prefix</code> and <code>suffix</code></span>],
    'field:prepareValue',
    { heading: 'Validation' },
    'field:required',
    'field:showRequired',
    'field:requiredLabel',
    'field:requiredMessage',
    'field:showOptional',
    'field:optionalLabel',
    'field:validate',
    'field:validateOnBlur',
    'field:validateOnChange',
    { heading: 'Events' },
    'field:onFocus',
    'field:onBlur',
    'field:onChange',
    'field:onValid',
    'field:onInvalid',
    { heading: 'Functions' },
    'field:setFocus',
  ]
}

export const ComponentsMenu = {
  title: 'Components',
  url:   '/components',
  items: [
    ['form',                'Form', FormMenu],
    ['field',               'Field', FieldMenu],
    ['fields',              'Fields'],
    ['fieldset',            'Fieldset'],
    ['submit',              'Submit'],
    ['reset',               'Reset'],
    ['cancel',              'Cancel'],
    ['reset-submit',        'ResetSubmit'],
    ['cancel-submit',       'CancelSubmit'],
    ['cancel-reset-submit', 'CancelResetSubmit'],
    ['label',               'Label'],
    ['errors',              'Errors'],
    ['debug',               'Debug'],

  ]
}

export const InputsMenu = {
  title: 'Input Types',
  url:   '/inputs',
  items: [
    ['text', 'Text'],
    ['textarea', 'Text Area'],
    ['number', 'Number, Date, etc'],
    ['checkbox', 'Checkbox'],
    ['radio', 'Radio Buttons'],
    ['select', 'Select Input'],
  ]
}

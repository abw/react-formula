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
    [ null, 'Properties'],
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
    [ null, 'Functions'],
    ['setvalues',    <code key='setvalues'>setValues() - TODO</code>],
    ['setfocus',      <code key="setfocus">setFocus()</code>],
    [ null, 'Styling'],
    ['className',       <code key='classname'>className - TODO</code>],
    ['validatingClass', <code key='validatingclass'>validatingClass - TODO</code>],
    ['validClass',      <code key='validclass'>validClass - TODO</code>],
    ['invalidClass',    <code key='invalidclass'>invalidClass - TODO</code>],
    ['errorsClass',     <code key='errorsclass'>errorsClass - TODO</code>],
    ['fieldClass',      <code key='fieldclass'>fieldClass - TODO</code>],
  ]
}
export const FieldMenu = {
  title: 'Field',
  url:   '/field',
  items: [
    // ['properties',       'Properties'],
    [ null, 'Properties'],
    ['prefix-suffix',    <span key='prefix-suffix'><code>prefix</code> and <code>suffix</code></span>],
    ['onfocus',          <code key='onfocus'>onFocus</code>],
    ['onblur',           <code key='onblur'>onBlur</code>],
    ['onchange',         <code key='onchange'>onChange</code>],
    ['preparevalue',     <code key="preparevalue">prepareValue</code>],
    ['required',         <code key='required'>required</code>],
    ['showrequired',     <code key='showrequired'>showRequired</code>],
    ['requiredlabel',    <code key='requiredlabel'>requiredLabel</code>],
    ['showoptional',     <code key='showoptional'>showOptional</code>],
    ['optionallabel',    <code key='optionallabel'>optionalLabel</code>],
    ['validate',         <code key='validate'>validate</code>],
    ['validateonblur',   <code key='validateonblur'>validateOnBlur</code>],
    ['validateonchange', <code key='validateonchange'>validateOnChange</code>],
    [ null, 'Functions'],
    ['setfocus',         <code key="setfocus">setFocus()</code>],
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

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
    ['properties',    'Properties'],
    ['setfocus',      <code key="setfocus">setFocus()</code>],
    ['validation',    'Validation'],
    ['set',           'Setting Values'],
  ]
}
export const FieldMenu = {
  title: 'Field',
  url:   '/field',
  items: [
    ['properties',       'Properties'],
    ['prefix-suffix',    <span key='prefix-suffix'><code>prefix</code> and <code>suffix</code></span>],
    ['onfocus',          <code key='onfocus'>onFocus</code>],
    ['onblur',           <code key='onblur'>onBlur</code>],
    ['setfocus',         <code key="setfocus">setFocus()</code>],
    ['onchange',         <code key='onchange'>onChange</code>],
    ['preparevalue',     <code key="preparevalue">prepareValue</code>],
    ['required',         <code key='required'>required</code>],
    ['showrequired',     <code key='showrequired'>showRequired</code>],
    ['requiredlabel',    <code key='requiredlabel'>requiredLabel</code>],
    ['showoptional',     <code key='showoptional'>showOptional</code>],
    ['optionallabel',    <code key='optionallabel'>optionalLabel</code>],
    ['validate',         <code key='validate'>validate</code>],
    ['validateonchange', <code key='validateonchange'>validateOnChange</code>],
    ['validateonblur',   <code key='validateonblur'>validateOnBlur (TODO)</code>],
    ['label',            'Label'],
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

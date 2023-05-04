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
    ['properties', 'Properties'],
    ['validation', 'Validation'],
    ['set',        'Setting Values'],
  ]
}
export const FieldMenu = {
  title: 'Field',
  url:   '/field',
  items: [
    ['properties',        'Properties'],
    ['prefix-suffix',     'Prefix and Suffix'],
    ['focus-blur',        'Focus and Blur'],
    ['onchange',          'onChange'],
    ['prepare-value',     'prepareValue'],
    ['required',          <code key='required'>required</code>],
    ['show-required',     <code key='show-required'>showRequired</code>],
    ['required-label',    <code key='required-label'>requiredLabel</code>],
    ['show-optional',     <code key='show-optional'>showOptional</code>],
    ['optional-label',    <code key='optional-label'>optionalLabel</code>],
    ['validation',        'Validation'],
    ['validate-on-change', <code key='validate-on-change'>validateOnChange (TODO)</code>],
    ['validate-on-blur',   <code key='validate-on-blur'>validateOnBlur (TODO)</code>],
    ['label',             'Label'],
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

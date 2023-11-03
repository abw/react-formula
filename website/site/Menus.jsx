import React from 'react'

export const IntroductionMenu = {
  title: 'Getting Started',
  url:  '/introduction',
  items: [
    ['installation',          'Installation'],
    ['styling',               'Adding Styling'],
    ['first-form',            'Your First Form'],
    // ['why',                   'Why Does This Exist?'],
  ]
}
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
    ['complete-registration', 'Registration Form'],
    ['edit-form',             'Edit Form'],
    ['debugging',             'Debugging'],
    ['headless-fields',       'Headless Fields'],
  ]
}

export const ComponentsMenu = {
  title: 'Components',
  url:   '/components',
  items: [
    { heading: 'Form Components' },
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
    // 'form:classes',
    { heading: 'Validation' },
    'form:validate',
    'form:resetOnSuccess',
    'form:focusInvalidField',
    // ['properties',    'Properties - TODO'],
    // ['validation',    'Validation'],
    { heading: 'Events' },
    'form:onLoad',
    'form:onReset',
    'form:onSubmit',
    'form:onSuccess',
    'form:onError',
    { heading: 'Functions' },
    'form:setFocus',
    'form:setValues',
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
    'field:placeholder',
    'field:help',
    'field:prefix',
    'field:suffix',
    // 'field:wide',
    'field:children',
    // 'field:Input',
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
    'field:onLoad',
    { heading: 'Functions' },
    'field:setFocus',
    'field:setValue',
    'field:setValid',
    'field:setInvalid',
    'field:reset',
    { heading: 'Components' },
    'field:Layout',
    'field:Label',
    'field:Input',
    'field:Message',
    'field:UseField',
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
    // ['number',    'Number, Date, etc'],
  ]
}

export const CustomisingMenu = {
  title: 'Customising',
  url:   '/customising',
  items: [
    // ['input',    'Custom Input'],
    // ['layout',   'Custom Layout'],
  ]
}

export const StylingMenu = {
  title: 'Styling',
  url:  '/styling',
  items: [
    ['css-classes',      'CSS Classes'],
    ['css-variables',    'CSS Variables'],
    ['css-defaults',     'CSS Variables - Defaults'],
    ['css-dark',         'CSS Variables - Dark Mode'],
    ['sass-variables',   'SASS Variables'],
    ['markup',           'HTML Markup'],
    ['forms',            'Form Styles'],
    ['fields',           'Field Styles'],
  ]
}


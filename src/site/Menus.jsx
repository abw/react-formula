
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
    ['required-optional', 'Required and Optional'],
    ['prefix-suffix',     'Prefix and Suffix'],
    ['focus-blur',        'Focus and Blur'],
    ['onchange',          'onChange'],
    ['prepare-value',     'prepareValue'],
    ['validation',        'Validation'],
  ]
}

export const ComponentsMenu = {
  title: 'Components',
  url:   '/components',
  items: [
    ['form',          'Form', FormMenu],
    ['field',         'Field', FieldMenu],
    ['submit',        'Submit'],
    ['reset',         'Reset'],
    ['cancel',        'Cancel'],
    ['cancel-submit', 'CancelSubmit'],
    ['reset-submit',  'ResetSubmit'],
    ['errors',        'Errors'],
    ['debug',         'Debug'],

  ]
}

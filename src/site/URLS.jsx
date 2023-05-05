export const URLS = {
  //--------------------------------------------------------------------------
  // Component links
  //--------------------------------------------------------------------------
  'component:Form': {
    url:    '/components/form',
    code:   'Form',
    about:  'Main component for a form',
  },
  'component:Field': {
    url:    '/components/field',
    code:   'Field',
    about:  'Component to render a form field',
  },
  'component:Changed': {
    url:    '/components/changed',
    text:   'Changed',
    about:  'Renders children only when a form state has changed',
  },

  //--------------------------------------------------------------------------
  // Form links
  //--------------------------------------------------------------------------
  'form:setFocus': {
    url:    '/components/form/setFocus',
    code:   'setFocus',
    about:  'Focus a form field',
  },
  'form:setValues': {
    url:    '/components/form/setValues',
    code:   'setValues',
    about:  'Set form values',
  },

  //--------------------------------------------------------------------------
  // Field links
  //--------------------------------------------------------------------------
  'field:onBlur': {
    url:    '/components/field/onBlur',
    code:   'onBlur',
    about:  ' Define a handler to be called when a field loses focus',
  },
  'field:onChange': {
    url:    '/components/field/onChange',
    code:   'onChange',
    about:  'Define a handler to be called when a field value changes',
  },
  'field:onFocus': {
    url:    '/components/field/onFocus',
    code:   'onFocus',
    about:  'Define a handler to be called when a field gains focus',
  },
  'field:onInvalid': {
    url:    '/components/field/onInvalid',
    code:   'onInvalid',
    about:  'Define a handler to be called when a field fails validation',
  },
  'field:onValid': {
    url:    '/components/field/onValid',
    code:   'onValid',
    about:  'Define a handler to be called when a field passes validation',
  },
  'field:optionalLabel': {
    url:    '/components/field/optionalLabel',
    code:   'optionalLabel',
    about:  'Customise the label displayed for optional fields',
  },
  'field:prefix': {
    url:    '/components/field/prefix',
    code:   'prefix',
    about:  'Add a prefix to a field',
  },
  'field:prepareValue': {
    url:    '/components/field/prepareValue',
    code:   'prepareValue',
    about:  'Define a handler to prepare the value entered for a field',
  },
  'field:required': {
    url:    '/components/field/required',
    code:   'required',
    about:  'Mark a field as being required',
  },
  'field:requiredLabel': {
    url:    '/components/field/requiredLabel',
    code:   'requiredLabel',
    about:  'Customise the label displayed for required fields',
  },
  'field:requiredMessage': {
    url:    '/components/field/requiredMessage',
    code:   'requiredMessage',
    about:  'Customise the error message generated for required fields',
  },
  'field:reset': {
    url:    '/components/field/reset',
    code:   'reset',
    about:  'Reset a field to its original state',
  },
  'field:setFocus': {
    url:    '/components/field/setFocus',
    code:   'setFocus',
    about:  'Focus a field',
  },
  'field:setValue': {
    url:    '/components/field/setValue',
    code:   'setValue',
    about:  'Set a field value',
  },
  'field:showOptional': {
    url:    '/components/field/showOptional',
    code:   'showOptional',
    about:  'Enable the label shown for optional fields',
  },
  'field:showRequired': {
    url:    '/components/field/showRequired',
    code:   'showRequired',
    about:  'Enable the label shown for required fields',
  },
  'field:suffix': {
    url:    '/components/field/suffix',
    code:   'suffix',
    about:  'Add a suffix to a field',
  },
  'field:validate': {
    url:    '/components/field/validate',
    code:   'validate',
    about:  'Handler to validate field input',
  },
  'field:validateOnBlur': {
    url:    '/components/field/validateOnBlur',
    code:   'validateOnBlur',
    about:  'Run field validation when it loses focus',
  },
  'field:validateOnChange': {
    url:    '/components/field/validateOnChange',
    code:   'validateOnChange',
    about:  'Run field validation when the value changes',
  },
}

export default URLS
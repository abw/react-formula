import { FieldMenu, FormMenu } from './Menus.jsx'

export const URLS = {
  //--------------------------------------------------------------------------
  // Tutorial Links
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  // Component links
  //--------------------------------------------------------------------------
  'component:Form': {
    url:    '/components/Form',
    code:   'Form',
    about:  'Main component for a form',
    menu:   FormMenu,
  },
  'component:Field': {
    url:    '/components/Field',
    code:   'Field',
    about:  'Render a form field',
    menu:   FieldMenu,
  },
  'component:Fields': {
    url:    '/components/Fields',
    code:   'Fields',
    about:  'Render multiple form fields',
  },
  'component:Fieldset': {
    url:    '/components/Fieldset',
    code:   'Fieldset',
    about:  'Render a set of fields',
  },
  'component:Changed': {
    url:    '/components/Changed',
    code:   'Changed',
    about:  'Renders children only when a form state has changed',
  },
  'component:Submit': {
    url:    '/components/Submit',
    code:   'Submit',
    about:  'Render a form submit button',
  },
  'component:Reset': {
    url:    '/components/Reset',
    code:   'Reset',
    about:  'Render a form reset button',
  },
  'component:Cancel': {
    url:    '/components/Cancel',
    code:   'Cancel',
    about:  'Render a cancel button',
  },
  'component:ResetSubmit': {
    url:    '/components/ResetSubmit',
    code:   'ResetSubmit',
    about:  'Render reset and submit buttons',
  },
  'component:CancelSubmit': {
    url:    '/components/CancelSubmit',
    code:   'CancelSubmit',
    about:  'Render cancel and submit buttons',
  },
  'component:CancelResetSubmit': {
    url:    '/components/CancelResetSubmit',
    code:   'CancelResetSubmit',
    about:  'Render cancel, reset and submit buttons',
  },
  'component:Errors': {
    url:    '/components/Errors',
    code:   'Errors',
    about:  'Render form errors',
  },
  'component:Debug': {
    url:    '/components/Debug',
    code:   'Debug',
    about:  'Render debugging information for a form',
  },
  'component:Layout': {
    url:    '/components/Layout',
    code:   'Layout',
    about:  'Renders the default content for a form field',
  },
  'component:Label': {
    url:    '/components/Label',
    code:   'Label',
    about:  'Render a label for a form field',
  },
  'component:Message': {
    url:    '/components/Message',
    code:   'Message',
    about:  'Render a message for a form field',
  },

  //--------------------------------------------------------------------------
  // Form links
  //--------------------------------------------------------------------------
  'form:classes': {
    url:    '/components/Form/classes',
    code:   'classes',
    about:  'Custom CSS classes for form components',
  },
  'form:fields': {
    url:    '/components/Form/fields',
    code:   'fields',
    about:  'Properties for form fields',
  },
  'form:hidden': {
    url:    '/components/Form/hidden',
    code:   'hidden',
    about:  'Hidden values for a form',
  },
  'form:onSubmit': {
    url:    '/components/Form/onSubmit',
    code:   'onSubmit',
    about:  'Function to handle form submission',
  },
  'form:onSuccess': {
    url:    '/components/Form/onSuccess',
    code:   'onSuccess',
    about:  'Function to handle successful form submission',
  },
  'form:onError': {
    url:    '/components/Form/onError',
    code:   'onError',
    about:  'Function to handle failed form submission',
  },
  'form:setFocus': {
    url:    '/components/Form/setFocus',
    code:   'setFocus',
    about:  'Focus a form field',
  },
  'form:setValues': {
    url:    '/components/Form/setValues',
    code:   'setValues',
    about:  'Set form values',
  },
  'form:validate': {
    url:    '/components/Form/validate',
    code:   'validate',
    about:  'Validation function for a form',
  },
  'form:values': {
    url:    '/components/Form/values',
    code:   'values',
    about:  'Values for form fields',
  },

  //--------------------------------------------------------------------------
  // Field links
  //--------------------------------------------------------------------------
  'field:help': {
    url:    '/components/Field/help',
    code:   'help',
    about:  'Additional help for a field',
  },
  'field:Input': {
    url:    '/components/Field/Input',
    code:   'Input',
    about:  'Custom input component for a field',
  },
  'field:label': {
    url:    '/components/Field/label',
    code:   'label',
    about:  'A label for the field',
  },
  'field:Layout': {
    url:    '/components/Field/Layout',
    code:   'Layout',
    about:  'Custom layout component for a field',
  },
  'field:minValidateLength': {
    url:    '/components/Field/minValidateLength',
    code:   'minValidateLength',
    about:  'The minimum input length to trigger validation',
  },
  'field:name': {
    url:    '/components/Field/name',
    code:   'name',
    about:  'The field name',
  },
  'field:onBlur': {
    url:    '/components/Field/onBlur',
    code:   'onBlur',
    about:  'Define a handler to be called when a field loses focus',
  },
  'field:onChange': {
    url:    '/components/Field/onChange',
    code:   'onChange',
    about:  'Define a handler to be called when a field value changes',
  },
  'field:onFocus': {
    url:    '/components/Field/onFocus',
    code:   'onFocus',
    about:  'Define a handler to be called when a field gains focus',
  },
  'field:onInvalid': {
    url:    '/components/Field/onInvalid',
    code:   'onInvalid',
    about:  'Define a handler to be called when a field fails validation',
  },
  'field:onValid': {
    url:    '/components/Field/onValid',
    code:   'onValid',
    about:  'Define a handler to be called when a field passes validation',
  },
  'field:optionalLabel': {
    url:    '/components/Field/optionalLabel',
    code:   'optionalLabel',
    about:  'Customise the label displayed for optional fields',
  },
  'field:placeholder': {
    url:    '/components/Field/placeholder',
    code:   'placeholder',
    about:  'Add a placeholder to a field',
  },
  'field:prefix': {
    url:    '/components/Field/prefix',
    code:   'prefix',
    about:  'Add a prefix to a field',
  },
  'field:prepareValue': {
    url:    '/components/Field/prepareValue',
    code:   'prepareValue',
    about:  'Define a handler to prepare the value entered for a field',
  },
  'field:required': {
    url:    '/components/Field/required',
    code:   'required',
    about:  'Mark a field as being required',
  },
  'field:requiredLabel': {
    url:    '/components/Field/requiredLabel',
    code:   'requiredLabel',
    about:  'Customise the label displayed for required fields',
  },
  'field:requiredMessage': {
    url:    '/components/Field/requiredMessage',
    code:   'requiredMessage',
    about:  'Customise the error message generated for required fields',
  },
  'field:reset': {
    url:    '/components/Field/reset',
    code:   'reset',
    about:  'Reset a field to its original state',
  },
  'field:setFocus': {
    url:    '/components/Field/setFocus',
    code:   'setFocus',
    about:  'Focus a field',
  },
  'field:setValue': {
    url:    '/components/Field/setValue',
    code:   'setValue',
    about:  'Set a field value',
  },
  'field:setValid': {
    url:    '/components/Field/setValid',
    code:   'setValid - TODO',
    about:  'Set a field to be valid',
  },
  'field:setInvalid': {
    url:    '/components/Field/setInvalid',
    code:   'setInvalid - TODO',
    about:  'Set a field to be invalid',
  },
  'field:showOptional': {
    url:    '/components/Field/showOptional',
    code:   'showOptional',
    about:  'Enable the label shown for optional fields',
  },
  'field:showRequired': {
    url:    '/components/Field/showRequired',
    code:   'showRequired',
    about:  'Enable the label shown for required fields',
  },
  'field:suffix': {
    url:    '/components/Field/suffix',
    code:   'suffix',
    about:  'Add a suffix to a field',
  },
  'field:type': {
    url:    '/components/Field/type',
    code:   'type',
    about:  'The input type for a field',
  },
  'field:validate': {
    url:    '/components/Field/validate',
    code:   'validate',
    about:  'Handler to validate field input',
  },
  'field:validateOnBlur': {
    url:    '/components/Field/validateOnBlur',
    code:   'validateOnBlur',
    about:  'Run field validation when it loses focus',
  },
  'field:validateOnChange': {
    url:    '/components/Field/validateOnChange',
    code:   'validateOnChange',
    about:  'Run field validation when the value changes',
  },

  //--------------------------------------------------------------------------
  // Input links
  //--------------------------------------------------------------------------
  'input:types': {
    url:    '/inputs',
    text:   'Input Types',
    about:  'Input components',
  },
  'input:Text': {
    url:    '/inputs/Text',
    text:   'Text',
    about:  'Text input',
  },
  'input:TextArea': {
    url:    '/inputs/TextArea',
    text:   'TextArea',
    about:  'Text area input',
  },
  'input:Checkbox': {
    url:    '/inputs/Checkbox',
    text:   'Checkbox',
    about:  'Checkbox input',
  },
  'input:Radio': {
    url:    '/inputs/Radio',
    text:   'Radio',
    about:  'Radio buttons input',
  },
  'input:Select': {
    url:    '/inputs/Select',
    text:   'Select',
    about:  'Select list input',
  },
  'input:Hidden': {
    url:    '/inputs/Hidden',
    text:   'Hidden',
    about:  'Hidden input',
  },

  //--------------------------------------------------------------------------
  // Customising links
  //--------------------------------------------------------------------------
  'custom:Input': {
    url:    '/customising/Input',
    text:   'Custom Input',
    about:  'Custom input component for a field',
  },

  //--------------------------------------------------------------------------
  // Styling Links
  //--------------------------------------------------------------------------
  'styling:css-classes': {
    url:    '/styling/css-classes',
    text:   'CSS Classes',
    about:  'Defining custom CSS classes',
  },
  'styling:css-variables': {
    url:    '/styling/css-variables',
    text:   'CSS Variables',
    about:  'Styling with CSS variables',
  },
}


export default URLS
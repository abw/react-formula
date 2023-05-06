# TODO

## Config

* Form should accept all config options that field supports.

* General clean-up of configuration options

* merge all the `xxxClass` properties into a single `classes`?

* also add `styles`?

## Components

* Debug needs to be updated to reflect changes in form state

* Changed - docs and tests

## Field

* tests and docs for setValid() and setInvalid()

* hide/show

* ENTER triggers form submit

## Form

* should fields initially go through the field prepareValue() before
registering with the form?

* change errorsInHeader to showErrors - it's simple enough to insert the
  <Errors/> wherever you want them.

## State

* default select value isn't being passed up to form or included in submission

## Validation

* focus/scroll to first invalid field

* minLength, maxLength, pattern, etc.

## Misc

* placeholder for select as initial unselected/unselectable option

## Docs

* API / component reference

* Changed component

* Tutorial - examples of edit form with value

* components/{fieldlayout,label,input,message,etc}

* Move onSubmit() from Submit to Form

* Move onReset() from Reset to Form

* Form "Validation" looks like a copy-n-paste from field validation - should
be `validate`

* Form "Setting Values" -> `setValues()`

## Styling

* thin/wide fields - be consistent and let it be set on form

* prefix/suffix for checkboxes

* wide radio buttons are on the wonk

## Theming

* Consistent prefix, e.g. Formula.Form, Formula.Field

* Form and Field components should be themed (only Control/* so far)

## Headless

* Field `getContext()` should do all the work to determine classes and
other props and then expose as `fieldProps`, `labelProps`, `inputProps`,
etc.

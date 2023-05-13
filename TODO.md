# TODO

## Config

* Form should accept all config options that field supports.

* General clean-up of configuration options

* merge all the `xxxClass` properties into a single `classes`?

* also add `styles`?

## Context

* Looks like I broke the status change methods when I switch them to functions
e.g. `Changed` doesn't work.  UPDATE - HUZZAH!  Fixed it (but write some
tests)

## Components

* Debug needs to be updated to reflect changes in form state

* Changed - docs and tests

* default values

## Field

* tests and docs for setValid() and setInvalid()

* hide/show

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

* Tutorial - examples of edit form with values

* Move onSubmit() from Submit to Form

* Move onReset() from Reset to Form

* Form "Validation" looks like a copy-n-paste from field validation - should
be `validate`

* Form "Setting Values" -> `setValues()`

* Form / Field `onLoad` event

* Tutorial / Headless Fields

* useForm() / useField()

* Text input docs looks like the original first page of the tutorial

* Debug properties

* ...and properties for other components, too, e.g. Cancel, Reset, Submit, etc.

## Styling

* thin/wide fields - be consistent and let it be set on form

* prefix/suffix for checkboxes

* bare radio buttons and checkboxes don't have any padding on left which shows
when focussed

## Theming

* Consistent prefix, e.g. Formula.Form, Formula.Field

* Form and Field components should be themed (only Control/* so far)

## Headless

* Field `getContext()` should do all the work to determine classes and
other props and then expose as `fieldProps`, `labelProps`, `inputProps`,
etc.

# TODO

## Config

* Form should accept all config options that field supports.

* General clean-up of configuration options

* merge all the `xxxClass` properties into a single `classes`?

* also add `styles`?

## Components

* Debug needs to be updated to reflect changes in form state

* default values - tests and docs

* Docs for Debug need updating

## Field

* hide/show?

* Should there be a default Input component which selects the appropriate
input and renders it.  This might be useful if we want to change the Layout
to define custom label and message, but keep the default Input.

## Form

* should fields initially go through the field prepareValue() before
registering with the form?

* change errorsInHeader to showErrors - it's simple enough to insert the
  <Errors/> wherever you want them.  Maybe also make it false by default.

## State

* default select value isn't being passed up to form or included in submission

## Validation

* focus/scroll to first invalid field

* minLength, maxLength, pattern, etc.  Maybe also "format" to define some
basic format, e.g. email

## Docs

* API / component reference

* Changed component

* Move onSubmit() from Submit to Form

* Move onReset() from Reset to Form

* Form "Validation" looks like a copy-n-paste from field validation - should
be `validate`

* Form "Setting Values" -> `setValues()`

* Form / Field `onLoad` event

* Tutorial / Headless Fields

* useForm() / useField()

* Docs for Field setValid() and setInvalid()

* Text input docs looks like the original first page of the tutorial

* Debug properties

* ...and properties for other components, too, e.g. Cancel, Reset, Submit, etc.

* consistent p.intro on each section index page (and component page?)

* Added pager to pages in components

## Styling

* finish cleaning up CSS props

* thin/wide fields - be consistent and let it be set on form

* prefix/suffix for checkboxes

* .block style is redundant?

## Theming

* Consistent prefix, e.g. Formula.Form, Formula.Field

* Form and Field components should be themed (only Control/* so far)

## Headless

* Field `getContext()` should do all the work to determine classes and
other props and then expose as `fieldProps`, `labelProps`, `inputProps`,
etc.

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

## Form

* should fields initially go through the field prepareValue() before
registering with the form?

* change errorsInHeader to showErrors - it's simple enough to insert the
  <Errors/> wherever you want them.  Maybe also make it false by default.

* Submit button should be disabled when form is submitting

* Overlay / spinner when saving

## State

* default select value isn't being passed up to form or included in submission

## Validation

* focus/scroll to first invalid field

* minLength, maxLength, pattern, etc.  Maybe also "format" to define some
basic format, e.g. email

## Docs

* Changed component

* Move onSubmit() from Submit to Form

* Move onReset() from Reset to Form

* Form "Validation" looks like a copy-n-paste from field validation - should
be `validate`

* Form "Setting Values" -> `setValues()`

* Form / Field `onLoad` event

* Tutorial / Headless Fields

* useForm() / useField()

* Debug properties

* ...and properties for other components, too, e.g. Cancel, Reset, Submit, etc.

* consistent p.intro on each section index page (and component page?)

* Pager doesn't work with menus defined using shorthand 'section:name' links

* Add Pager to pages in components and input types

* Field properties: value, default

* Field functions: setValid() and setInvalid()

## Input Types

* Checkbox classes
* Radio classes
* Select classes
* Text attrs

## Styling

* down caret icon for select

* better name than mar-r-option for inline margins

## Theming

* Consistent prefix, e.g. Formula.Form, Formula.Field

* Form and Field components should be themed (only Control/* so far)

## Headless

* Field `getContext()` should do all the work to determine classes and
other props and then expose as `fieldProps`, `labelProps`, `inputProps`,
etc.

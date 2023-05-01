# TODO

## Config

* Form should accept all config options that field supports.

* General clean-up of configuration options

## Form

* internal values shouldn't default to all values, but should cherry pick
  as fields are registered (and also go through the field prepareValue()
  and/or validation)

* change errorsInHeader to showErrors - it's simple enough to insert the
  <Errors/> wherever you want them.

## State

* default select value isn't being passed up to form or included in submission

## Validation

* focus/scroll to first invalid field

## Misc

* placeholder for select as initial unselected/unselectable option

## Docs

* API / component reference

* Changed component

* Tutorial - examples of edit form with value

* components/{fieldlayout,label,input,message,etc}

## Styling

* thin/wide fields - be consistent and let it be set on form

* prefix/suffix for checkboxes

* wide radio buttons are on the wonk

## Theming

* Consistent prefix, e.g. Formula.Form, Formula.Field

* Form and Field components should be themed (only Control/* so far)
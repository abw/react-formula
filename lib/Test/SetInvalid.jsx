import React from 'react'
import { Consumer } from '../Form/Context.js'

export const SetInvalid = ({setInvalidState}) =>
  <button type="button" onClick={() => setInvalidState()}>Set Form Invalid</button>

export default Consumer(SetInvalid)

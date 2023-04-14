import React from 'react'
import { Consumer } from '../Form/Context.js'

export const SetInvalid = ({setInvalid}) =>
  <button type="button" onClick={() => setInvalid()}>Set Form Invalid</button>

export default Consumer(SetInvalid)

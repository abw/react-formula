import React from 'react'
import { Consumer } from '../Form/Context.js'

export const SetValid = ({setValid}) =>
  <button type="button" onClick={() => setValid()}>Set Form Valid</button>

export default Consumer(SetValid)

import React from 'react'
import { Consumer } from '../Form/Context.js'

export const SetValid = ({setValidState}) =>
  <button type="button" onClick={() => setValidState()}>Set Form Valid</button>

export default Consumer(SetValid)

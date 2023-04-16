import React from 'react'
import { Consumer } from '../Form/Context.js'

export const SetChanged = ({setChangedState}) =>
  <button type="button" onClick={() => setChangedState()}>Set Form Changed</button>

export default Consumer(SetChanged)

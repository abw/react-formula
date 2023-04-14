import React from 'react'
import { Consumer } from '../Form/Context.js'

export const SetChanged = ({setChanged}) =>
  <button type="button" onClick={() => setChanged()}>Set Form Changed</button>

export default Consumer(SetChanged)

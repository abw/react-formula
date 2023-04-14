import { Consumer } from './Context.js'

export const Changed = ({status, children}) =>
  status.changed && children

export default Consumer(Changed)

import useForm from './useForm.jsx'

export const Changed = ({ children }) => {
  const form = useForm()
  return form.changed && children
}

export default Changed

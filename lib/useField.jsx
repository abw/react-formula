import useForm from './useForm.jsx'
import { BLANK } from './Constants.jsx'

export const useField = (spec) => {
  const form  = useForm()
  const field = form.getField(spec)
  const name  = field.name
  return {
    ...field,
    form,
    value: form.getValue(name) ?? BLANK,
    get:      ()    => form.getValue(name),
    reset:    ()    => form.resetValue(name),
    set:      value => form.setValue(name, value),
    setState: state => form.setField({ name, ...state }),
  }
}

export default useField
import { useField } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const animals = ['badger', 'gorilla', 'kitten']

const PictureInput = () => {
  const { value, onChange } = useField()
  return (
    <div className="animals">
      { animals.map(
        animal =>
          <Picture
            key={animal}
            animal={animal}
            select={() => onChange(animal)}
            selected={value === animal}
          />
      )}
    </div>
  )
}

const Picture = ({ animal, select, selected }) =>
  <div
    className={`animal ${selected ? 'selected' : ''}`}
    onClick={select}
  >
    <img
      src={`/${animal}.jpg`} width="120" height="120"
      alt={animal}
    />
  </div>

export default PictureInput
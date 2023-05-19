import { useField } from '../../../../../lib/index.js'
import badgerUrl from '/badger.jpg'
import kittenUrl from '/kitten.jpg'
import gorillaUrl from '/gorilla.jpg'
{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const animals = ['badger', 'gorilla', 'kitten']
/* REAL */const URLS = { badger: badgerUrl, kitten: kittenUrl, gorilla: gorillaUrl }/* UNREAL */
const PictureInput = () => {
  const { value, onChange } = useField()
  return (
    <div className="animals">
      { animals.map(
        animal =>
          <Picture
            key={animal}
            animal={animal}
            selected={value === animal}
            select={() => onChange(animal)}
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
      /* REAL */src={URLS[animal]}/* UNREAL */// PRETEND: src={`/${animal}.jpg`}
      width="120" height="120"
      alt={animal}
    />
  </div>

export default PictureInput
import React, { useState } from 'react'

const options = [
  { value: 100, text: "Alan's Accessories" },
  { value: 101, text: "Brian's Bits" },
  { value: 102, text: "Charlie's Components" },
]

const SelectBug = () => {
  const [selected, setSelected] = useState(10)

  return (
    <form>
      <select
        value={selected}
        onChange={e => setSelected(e.target.value)}
      >
        { options.map(
          option =>
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
        )}
      </select>
      <button onClick={e => { e.preventDefault(); setSelected(100)} }>Alan</button>
      <button onClick={e => { e.preventDefault(); setSelected(101)} }>Brian</button>
      <button onClick={e => { e.preventDefault(); setSelected(102)} }>Charlie</button>
    </form>
  )
}

export default SelectBug
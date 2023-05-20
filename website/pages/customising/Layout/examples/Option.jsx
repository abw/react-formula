import React from 'react'

const Option = ({id, topping, selected, select}) =>
  <div>
    <label htmlFor={id} className="option">
      <input
        className="input" type="checkbox"
        checked={selected}
        onChange={select}
        id={id}
      />
      <span className="text">
        {topping}
      </span>
    </label>
  </div>

export default Option
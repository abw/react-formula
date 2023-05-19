import React from 'react'

const VarsTable = ({vars}) =>
  <>
    <table className="wide vars table">
      <thead>
        <tr>
          <th>Variable</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        { vars.map(
          ({variable, defaultValue, description, section}, n) =>
            section
              ? <tr key={n}>
                  <th className="section" colSpan="3">{section}</th>
                </tr>
              : <tr key={variable}>
                  <td className="name">{variable}</td>
                  <td className="default">{defaultValue}</td>
                  <td className="description">{description}</td>
                </tr>
        )}
      </tbody>
    </table>
  </>

export default VarsTable
import React              from 'react'
// import CodeBlock          from '../../site/CodeBlock.jsx'
import Pager              from '../../site/Pager/Styling.jsx'
import namespace          from '../../../styles/config/namespace.scss?raw'
import { parseSassVars }  from '../../site/ParseSassVars.js'

const namespaceVars = parseSassVars(namespace)

const CSSClasses = () =>
  <div>
    <h1>CSS Classes</h1>
    <p className="intro">
      The CSS classes used in the main stylesheet are shown in the table
      below.
    </p>
    <Table/>

    <Pager uri="css-classes"/>
  </div>

const Table = () =>
  <table className="wide vars table">
    <thead>
      <tr>
        <th>CSS Class</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      { namespaceVars.map(
        ({variable, defaultValue, description, section}) =>
          section
            ? null
            : <tr key={variable}>
                <td className="default">{defaultValue}</td>
                <td className="description">{description}</td>
              </tr>
      )}
    </tbody>
  </table>

export default CSSClasses
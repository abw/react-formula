import React from 'react'
import colors from '../../../styles/config/colors.scss?raw'
import input  from '../../../styles/config/input.scss?raw'
import { parseSassVars } from '../../site/ParseSassVars.js'

const colorVars = parseSassVars(colors)
const inputVars = parseSassVars(input)

const Variables = () =>
  <div>
    <h1>SASS Variables</h1>
    <Table title="Input" vars={inputVars}/>
    <Table title="Colors" vars={colorVars}/>
  </div>

const Table = ({title, vars}) =>
  <>
    <h2>{title}</h2>
    <table className="wide sass-vars table">
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


export default Variables
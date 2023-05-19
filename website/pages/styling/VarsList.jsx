import React from 'react'

const VarsList = ({vars}) =>
  <>
    { vars.map(
      ({variable, defaultValue, description, section}, n) =>
        section
          ? <h3 key={n}>{section}</h3>
          : <div key={variable} className="variable">
              <h4 className="name-default smallish">
                <div className="var">
                  <code>{variable}</code>
                </div>
                :
                <div className="val">
                  <code>{defaultValue}</code>
                </div>
              </h4>
              <div className="description smallish" >
                {description}
              </div>
            </div>
    )}
  </>

export default VarsList
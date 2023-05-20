import{j as n,a as e,T as x,an as m,ao as u,F as h,c as d,D as g,P as S,ap as T,E as f,B as l,a3 as c,K as w,aq as k,X as P,_ as C,$ as s}from"./index-3a1c635d.js";const F=()=>n("div",{children:[e("h1",{children:"Custom Components"}),e("p",{children:"This example is TODO."}),n("ul",{children:[e("li",{children:"Adding a custom Layout, Input or other component"}),e("li",{children:"Writing your own components"}),e("li",{children:"Registering components, input types, handlers, etc."})]})]}),N=()=>n("div",{children:[e("h1",{children:"Customising"}),e("p",{className:"intro",children:"This section of the documentation looks at how you can create your own custom components."}),e(x,{menu:m})]}),R="/react-formula/badger.jpg",j="/react-formula/kitten.jpg",O="/react-formula/gorilla.jpg",z={badger:R,kitten:j,gorilla:O},L=({animal:t,select:o,selected:i})=>e("div",{className:`animal ${i?"selected":""}`,onClick:o,children:e("img",{src:z[t],width:"120",height:"120",alt:t})}),E=["badger","gorilla","kitten"],I=()=>{const{value:t,onChange:o}=u();return e("div",{className:"animals",children:E.map(i=>e(L,{animal:i,selected:t===i,select:()=>o(i)},i))})};const U=()=>n(h,{children:[e(d,{name:"name",label:"Your name",requiredMessage:"You must enter your name",required:!0}),e(d,{name:"animal",label:"Pick an animal guide",requiredMessage:"You must pick an animal",required:!0,Input:I}),e(g,{})]}),_=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
import PictureInput from './PictureInput.jsx'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'
import './animals.css'

const PictureForm = () =>
  <Form>
    <Field
      name="name" label="Your name"
      requiredMessage="You must enter your name"
      required
    />
    <Field
      name="animal" label="Pick an animal guide"
      requiredMessage="You must pick an animal"
      required
      Input={PictureInput}
    />
    <ResetSubmit/>
  </Form>

export default PictureForm`,A=`import { useField } from '../../../../../lib/index.js'
{/* START */}
import React from 'react'
import Picture from './Picture.jsx'
// PRETEND: import { useField } from '@abw/react-formula'

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
            selected={value === animal}
            select={() => onChange(animal)}
          />
      )}
    </div>
  )
}

export default PictureInput`,q=`import badgerUrl from '/badger.jpg'
import kittenUrl from '/kitten.jpg'
import gorillaUrl from '/gorilla.jpg'
{/* START */}
import React from 'react'
/* REAL */const URLS = { badger: badgerUrl, kitten: kittenUrl, gorilla: gorillaUrl }/* UNREAL */
const Picture = ({ animal, select, selected }) =>
  <div
    className={\`animal \${selected ? 'selected' : ''}\`}
    onClick={select}
  >
    <img
      /* REAL */src={URLS[animal]}/* UNREAL */// PRETEND: src={\`/\${animal}.jpg\`}
      width="120" height="120"
      alt={animal}
    />
  </div>

export default Picture`,W=`div.animals {
  display: flex;
  gap: 1rem;
}
div.animal {
  font-size: 0;
  line-height: 0;
  border: 6px solid white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.5s;
}
div.animal:hover {
  border-color: #ccf;
  cursor: pointer;
}
div.animal.selected {
  border-color: #88f;
}`,y=({uri:t})=>e(S,{uri:t,menu:m}),$=()=>n("div",{children:[e("h1",{children:"Custom Input"}),e("p",{className:"intro",children:"You can define your own components to handle the input for a field."}),n("p",{children:["The ",e(T,{})," property can be set on a field to contain a custom component for rendering the field input.  In this example we define a ",e("code",{children:"PictureInput"})," component to show some pictures of animals for the user to select an animal guide from."]}),e(f,{Element:U,code:_,caption:"Picture Form",expand:!0,children:e("p",{children:"Click on an animal to select it.  In this example we're just implementing a custom input and relying on the default field layout to provide us with the label and validation message.  Try submitting the form without selecting an animal to see the validation error message in effect."})}),n("p",{children:["Here's the implementation of the ",e("code",{children:"PictureInput"})," component."]}),e(l,{code:c(A),caption:"PictureInput",expand:!0}),n("p",{children:["On line 7 we call ",e("code",{children:"useField()"})," to get the current field"," ",e("code",{children:"value"})," and the ",e("code",{children:"onChange"})," function to set the value.  We iterate over a list of animals on line 10 and render the"," ",e("code",{children:"Picture"})," component for each.  We pass the ",e("code",{children:"selected"})," ","flag on line 15 to indicate if the animal name matches the current"," ",e("code",{children:"value"}),".  We also pass a ",e("code",{children:"select"})," ","function on line 16 which calls the ",e("code",{children:"onChange"})," handler to select the animal."]}),n("p",{children:["Here's the ",e("code",{children:"Picture"})," component."]}),e(l,{code:c(q),caption:"Picture",expand:!0}),e("p",{children:"For completeness, here's the additional CSS we're using to apply the styling."}),e(l,{code:W,caption:"animals.css",language:"css",expand:!0}),e("h2",{className:"hint",children:"Picture Credits"}),n("ul",{className:"credits",children:[n("li",{children:["Badger photo by ",e("a",{href:"https://unsplash.com/es/@vincentvanzalinge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Vincent van Zalinge"})," on ",e("a",{href:"https://unsplash.com/photos/jd8s5zhWEug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),n("li",{children:["Gorilla photo by ",e("a",{href:"https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Kelly Sikkema"})," on ",e("a",{href:"https://unsplash.com/images/animals/monkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),n("li",{children:["Kitten photo by ",e("a",{href:"https://unsplash.com/@feneek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Sergey Semin"})," on ",e("a",{href:"https://unsplash.com/images/animals/kitten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})]}),e(y,{uri:"input"})]}),Y=({id:t,topping:o,selected:i,select:r})=>e("div",{children:n("label",{htmlFor:t,className:"option",children:[e("input",{className:"input",type:"checkbox",checked:i,onChange:r,id:t}),e("span",{className:"text",children:o})]})}),D=({id:t,toppings:o,selected:i,select:r})=>e("div",{className:"options",children:o.map(a=>e(Y,{topping:a,id:`${t}-${a}`,selected:i[a]||!1,select:()=>r(a)},a))}),H=({value:t,free:o,price:i})=>e("div",{className:"summary",children:t.map((r,a)=>n("div",{className:"selected",children:[e("div",{children:r}),e("div",{children:a<o?"Free":i})]},r))}),M=t=>t.reduce((o,i)=>(o[i]=!0,o),{}),B=(t,o)=>i=>{t[i]=!t[i],o(Object.entries(t).filter(r=>r[1]).map(r=>r[0]))},K=()=>{const{id:t,value:o,onChange:i,free:r,price:a,toppings:v}=u(),p=M(o),b=B(p,i);return n("div",{className:"toppings field",children:[e("p",{children:"Select any extra toppings you want on your pizza."}),n("p",{className:"pricing",children:["The first ",r," are free. Any additional toppings are ",e("span",{className:"price",children:a})," each."]}),e(w,{}),n("div",{className:"selection",children:[e(D,{id:t,toppings:v,value:o,selected:p,select:b}),e(H,{value:o,free:r,price:a})]})]})};const G={toppings:{Layout:K,label:"Pick your toppings",default:[],free:3,price:"£1.00",toppings:["Ham","Bacon","Onions","Sausage","Pepperoni","Mushrooms","Sweetcorn","Pineapple","Extra Cheese"]}},V=()=>n(h,{fields:G,children:[e(d,{name:"toppings"}),e(g,{})]}),X=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
import Toppings from './Toppings.jsx'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'
import './pizza.scss'

const fields = {
  toppings: {
    Layout:   Toppings,
    label:    'Pick your toppings',
    default:  [ ],
    free:     3,
    price:    '£1.00',
    toppings: [
      'Ham',
      'Bacon',
      'Onions',
      'Sausage',
      'Pepperoni',
      'Mushrooms',
      'Sweetcorn',
      'Pineapple',
      'Extra Cheese',
    ],
  }
}

const PizzaForm = () =>
  <Form fields={fields}>
    <Field name="toppings"/>
    <ResetSubmit/>
  </Form>

export default PizzaForm`,Z=`import { Label, useField } from '../../../../../lib/index.js'
{/* START */}
import React from 'react'
import Options from './Options.jsx'
import Summary from './Summary.jsx'
// PRETEND: import { Label, useField } from '@abw/react-formula'
import { selectedToppings, toppingSelector } from './Utils.js'

const Toppings = () => {
  const { id, value, onChange, free, price, toppings } = useField()
  const selected = selectedToppings(value)
  const select = toppingSelector(selected, onChange)

  return (
    <div className="toppings field">
      <p>
        Select any extra toppings you want on your pizza.
      </p>
      <p className="pricing">
        The first {free} are free. Any additional toppings
        are <span className="price">{price}</span> each.
      </p>
      <Label/>
      <div className="selection">
        <Options
          id={id} toppings={toppings} value={value}
          selected={selected} select={select}
        />
        <Summary
          value={value} free={free} price={price}
        />
      </div>
    </div>
  )
}
export default Toppings`,J=`// convert the toppings array to an object
export const selectedToppings = value =>
  value.reduce(
    (selected, option) => {
      selected[option] = true
      return selected
    },
    { }
  )

// select (or unselect) a topping
export const toppingSelector = (selected, onChange) =>
  topping => {
    // toggle the selection
    selected[topping] = ! selected[topping]
    // update the field value
    onChange(
      // extract the names (keys) of all selected toppings
      Object.entries(selected)
        .filter( entry => entry[1] )  // filter by value
        .map( entry => entry[0] )     // return the key
    )
  }`,Q=`import React from 'react'
import Option from './Option.jsx'

const Options = ({id, toppings, selected, select}) =>
  <div className="options">
    { toppings.map(
      topping =>
        <Option
          key={topping}
          topping={topping}
          id={\`\${id}-\${topping}\`}
          selected={selected[topping] || false}
          select={() => select(topping)}
        />
    )}
  </div>

export default Options`,ee=`import React from 'react'

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

export default Option`,ne=`import React from 'react'

const Summary = ({value, free, price}) =>
  <div className="summary">
    { value.map(
      (topping, n) =>
        <div className="selected" key={topping}>
          <div>
            {topping}
          </div>
          <div>
            {n < free ? 'Free' : price}
          </div>
        </div>
    )}
  </div>

export default Summary`,te=`div.toppings {
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  p {
    margin: 0;
    font-size: 1.1rem;
    &.pricing {
      font-size: 0.9rem;
      opacity: 0.8;
      margin-bottom: 1rem;
    }
  }
  div.selection {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: flex-end;
    gap: 1rem;
    div.options {
      padding-left: 1rem;
    }
    div.summary {
      div.selected {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
      }
    }
  }
}
.dark div.toppings {
  background-color: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}`,ie=()=>n("div",{children:[e("h1",{children:"Custom Layout"}),e("p",{className:"intro",children:"You can define your own component to handle the complete layout for a field."}),n("p",{children:["The ",e(k,{})," property can be set on a field to contain a custom component for rendering the field layout.  In this example we define a ",e("code",{children:"Toppings"})," layout component to render a field allowing a user to select some toppings for a pizza."]}),n("p",{children:["We're defining the schema for the ",e("code",{children:"fields"})," externally (lines 6 to 25) and passing them into the ",e("code",{children:"Form"})," as the"," ",e("code",{children:"fields"})," property (line 28). In addition to setting the ",e("code",{children:"Layout"})," component on line 8, we're also defining some extra data that the field will require: the number of ",e("code",{children:"free"})," toppings (line 11), the"," ",e("code",{children:"price"})," of additional toppings after that (line 12), and a list of available ",e("code",{children:"toppings"})," (lines 13 to 23).  This is the kind of data that we want defined up front and not buried in the form markup."]}),e(f,{Element:V,code:X,caption:"Pizza Form",expand:!0,children:e("p",{children:"Before we go any further into the code, let's see how it looks. Select some toppings for your pizza!"})}),n("p",{children:["Here's the implementation of the ",e("code",{children:"Toppings"})," component."]}),e(l,{code:c(Z),caption:"Toppings",expand:!0}),n("p",{children:["On line 8 we call ",e("code",{children:"useField()"})," to get the current field"," ","context.  As well as the ",e("code",{children:"id"}),", ",e("code",{children:"value"})," and"," ",e("code",{children:"onChange"})," function to set the value, we're also getting our additional data fields: ",e("code",{children:"free"}),", ",e("code",{children:"price"})," and"," ",e("code",{children:"toppings"}),"."]}),n("p",{children:["We've got two utility functions that we're importing from our ",e("code",{children:"Utils.js"})," file.  On line 9 we call"," ",e("code",{children:"selectedToppings()"})," to convert the array of toppings in"," ",e("code",{children:"value"})," into an object so we can easily tell which toppings are selected (each selected topping will be set ",e("code",{children:"true"}),"). On line 10 we call the ",e("code",{children:"toppingSelector()"})," factory function which returns a function for selecting a topping (or unselecting one that's already selected) and calling the ",e("code",{children:"onChange"})," handler to update the field.  We'll look at the definitions of those functions shortly."]}),n("p",{children:["We have some explanatory text from lines 14 to 20.  Note how this includes the ",e("code",{children:"free"})," and ",e("code",{children:"price"})," values defined in our field schema. On line 21 we render the default ",e(P,{})," ","component to generate the field label. On line 23 we render a custom"," ",e("code",{children:"Options"})," component and on line 27 a custom"," ",e("code",{children:"Summary"})," component."]}),e("p",{children:"Here's the definitions for those utility functions."}),e(l,{code:c(J),caption:"Utils.js",expand:!0}),n("p",{children:["The ",e("code",{children:"Options"})," component iterates over the available toppings and renders the ",e("code",{children:"Option"})," component for each.  It passes a custom ",e("code",{children:"id"}),", ",e("code",{children:"selected"})," flag and"," ",e("code",{children:"select"})," function tailored to each option."]}),e(l,{code:c(Q),caption:"Options.jsx",expand:!0}),n("p",{children:["The ",e("code",{children:"Option"})," component simply renders a checkbox in a label using those properties."]}),e(l,{code:c(ee),caption:"Option.jsx",expand:!0}),n("p",{children:["The ",e("code",{children:"Summary"})," component displays a summary of the selected toppings."]}),e(l,{code:c(ne),caption:"Summary.jsx",expand:!0}),e("p",{children:"And finally, here's the additional SCSS we're using to apply the styling."}),e(l,{code:te,caption:"pizza.scss",language:"css",expand:!0}),e(y,{uri:"layout"})]}),re=()=>n(C,{children:[e(s,{path:"",end:!0,element:e(N,{})}),e(s,{path:"input",element:e($,{})}),e(s,{path:"layout",element:e(ie,{})}),e(s,{path:"components",element:e(F,{})})]});export{re as default};

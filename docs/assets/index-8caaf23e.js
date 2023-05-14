import{j as n,a as e,z as o,L as f,I as a,ak as y,o as v,F as x,b as w,A as $,al as F,Y as C,Z as h}from"./index-e88f7b9f.js";import{E as k}from"./Example-640aaaeb.js";const T=()=>n("div",{children:[e("h1",{children:"Styling the Forms"}),e("p",{children:"There's good news and bad news.  The good news is that there's a default stylesheet which should give you reasonable results as a starting point.  You can import it into the top-level of your React app with something like this:"}),e(o,{children:"import '@abw/react-formula/css/formula.css'"}),n("p",{children:["The gooder news is that the stylesheet is built using SASS (specifically SCSS) and you can import the styles into your own SASS stylesheet. There are numerous "," ",e(f,{to:"/styling/sass-variables",text:"configuration variables"})," ","which you can tweak to change the styling.  They're all defined using the ",e("code",{className:"code",children:"!default"})," directive which means you can provide your own values before importing the main SCSS file and it'll use your values instead of the defaults."]}),e(o,{language:"scss",children:`$brand-hue:     123;
$valid-hue:     40;
$invalid-hue:   12;
@import '@abw/react-formula/scss/formula.scss';`}),e("p",{children:"The goodest news of all is that most of these variables are then defined as CSS variables that you can change without having to mess around with SASS."}),e(o,{language:"css",children:"--brand-hue: 123;"}),n("p",{children:["Or you can rewrite large chunks of the styling if you prefer. Every element has its own CSS class and they're all scoped inside"," ",e("code",{className:"code",children:"form.formula"}),".  For example, you can import the main stylesheet and then selectively override the things you want to change."]}),e(o,{language:"scss",children:`@import '@abw/react-formula/scss/formula.scss';

form.formula {
  .field {
    .inputs {
      select {
        // your custom styling overrides
      }
    }
  }
}`}),e("p",{children:"The bad news is that CSS/SASS is currently all there is.  If you want to use styled components or any other CSS-in-JS solution then you're bang out of luck.  I'm personally not a huge fan of putting CSS in JS (although I totally respect that it may be what works for you), and given that I wrote this library to help me get my job done, it's understandably focussed on what works for me."})]}),W=()=>n("div",{children:[e("h1",{children:"Form Styles"}),n("div",{className:"note",children:[e("b",{children:"NOTE:"})," these are mockup forms and don't have full interactivity. For example, clicking on an input will not automatically focus it."]}),e("p",{children:"This is TODO"})]}),i={...y,label:"Example Label",type:"text",placeholder:"Placeholder text",form:{},status:{}},D=()=>n("div",{children:[e("h1",{children:"Field Styles"}),n("div",{className:"note",children:[e("b",{children:"NOTE:"})," these are mockup fields and don't have full interactivity. For example, clicking on an input will not automatically focus it."]}),n("form",{className:"formula",children:[e("h3",{children:"Field With Placeholder Text"}),e(a,{field:i}),e("h3",{children:"Field With Value"}),e(a,{field:{...i,value:"Hello World"}}),e("h3",{children:"Field With Help"}),e(a,{field:{...i,help:"Your password must be between 11 and 42 characters"}}),e("h3",{children:"Field With Required Label"}),e(a,{field:{...i,value:"Hello World",required:!0,showRequired:!0}}),e("h3",{children:"Field With Optional Label"}),e(a,{field:{...i,value:"Hello World",showOptional:!0}}),e("h3",{children:"Field With Prefix and Suffix"}),e(a,{field:{...i,prefix:"$",suffix:".00"}}),e("h3",{children:"Focussed Field With Placeholder Text"}),e(a,{field:{...i,status:{focus:!0}}}),e("h3",{children:"Focussed Field With Value"}),e(a,{field:{...i,value:"Hello World",status:{focus:!0}}}),e("h3",{children:"Focussed Field With Help"}),e(a,{field:{...i,help:"Your password must be between 11 and 42 characters",status:{focus:!0}}}),e("h3",{children:"Focussed Field With Prefix and Suffix"}),e(a,{field:{...i,prefix:"$",suffix:".00",status:{focus:!0}}}),e("h3",{children:"Valid Field"}),e(a,{field:{...i,value:"Hello World",status:{valid:!0}}}),e("h3",{children:"Valid Field With Message"}),e(a,{field:{...i,message:"That username is available!",status:{valid:!0}}}),e("h3",{children:"Valid Field With Prefix and Suffix"}),e(a,{field:{...i,value:"Hello World",prefix:"$",suffix:".00",status:{valid:!0}}}),e("h3",{children:"Focussed Valid Field With Prefix and Suffix"}),e(a,{field:{...i,value:"Hello World",prefix:"$",suffix:".00",status:{valid:!0,focus:!0}}}),e("h3",{children:"Invalid Field"}),e(a,{field:{...i,value:"Hello World",status:{invalid:!0}}}),e("h3",{children:"Invalid Field With Message"}),e(a,{field:{...i,message:"Something went wrong!",status:{invalid:!0}}}),e("h3",{children:"Invalid Field With Prefix and Suffix"}),e(a,{field:{...i,value:"Hello World",prefix:"$",suffix:".00",status:{invalid:!0}}}),e("h3",{children:"Focussed Invalid Field With Prefix and Suffix"}),e(a,{field:{...i,value:"Hello World",prefix:"$",suffix:".00",status:{invalid:!0,focus:!0}}}),e("h3",{children:"Disabled Field"}),e(a,{field:{...i,prefix:"£",message:"Denied!",status:{disabled:!0}}})]})]}),N=`//= Spacing
// Default spacing unit for margin and padding
$spacing:                 0.25em !default;
//= Margins
// Default margin unit
$margin:                  $spacing !default;
// Twice the default margin unit
$margin-2:                $margin * 2;
// Three times the default margin unit
$margin-3:                $margin * 3;
// Four times the default margin unit
$margin-4:                $margin * 4;
//= Padding
// Default padding unit
$padding:                 $spacing !default;
// Twice the default padding unit
$padding-2:               $padding * 2;
// Three times the default padding unit
$padding-3:               $padding * 3;
// Four times the default padding unit
$padding-4:               $padding * 4;
// Default vertical padding for inputs, buttons, etc.
$padding-y:               $padding-2 !default;
// Default horizontal padding for inputs, buttons, etc.
$padding-x:               $padding-4 !default;
//= Borders
// Default border width for inputs, buttons, etc.
$border-width:            1px !default;
// Default border radius for inputs, buttons, etc.
$border-radius:           3px !default;
//= Focus Ring
// Default width of focus ring for inputs, buttons, etc.
$focus-ring-width:        3px !default;
// Default gap between border and focus ring for inputs, buttons, etc.
$focus-ring-gap:          2px !default;
//= Text Sizes
// Default size of smaller text
$smaller-size:            0.75em;
// Default size of small text
$small-size:              0.875em;
// Default size of large text
$large-size:              1.125em;
// Default size of larger text
$larger-size:             1.25em;
`,V=`//= Namespace Variables
// CSS class for checkboxes and radio buttons without a border
$bare:     '.bare'      !default;
// CSS class for radio buttons displayed full-width
$block:    '.block'     !default;
// CSS class for checkbox inputs
$checkbox: '.checkbox'  !default;
// CSS class for checked checkboxes
$checked:  '.checked'   !default;
// CSS class for form controls: reset, submit, etc
$controls: '.controls'  !default;
// CSS class for dark theme
$dark:     '.dark'      !default;
// CSS class for debug component
$debug:    '.debug'     !default;
// CSS class for disabled fields
$disabled: '.disabled'  !default;
// CSS class for errors component
$errors:   '.errors'    !default;
// CSS class for fields
$field:    '.field'     !default;
// CSS class for focussed fields
$focus:    '.focus'     !default;
// Main CSS scope for all react-formula CSS rules
$formula:  '.formula'   !default;
// CSS class for help messages, include valid/invalid messages
$help:     '.help'      !default;
// CSS class for field input
$input:    '.input'     !default;
// CSS class for field inputs, including any prefix and/or suffix
$inputs:   '.inputs'    !default;
// CSS class for invalid field
$invalid:  '.invalid'   !default;
// CSS class for radio button option
$option:   '.option'    !default;
// CSS class for Optional label
$optional: '.optional'  !default;
// CSS class for panels inside debug component
$panel:    '.panel'     !default;
// CSS class for input prefix
$prefix:   '.prefix'    !default;
// CSS class for fields that have a prefix
$prefixed: '.prefixed'  !default;
// CSS class for radio button fields
$radio:    '.radio'     !default;
// CSS class for Required label
$required: '.required'  !default;
// CSS class for input suffix
$suffix:   '.suffix'    !default;
// CSS class for fields that have a suffix
$suffixed: '.suffixed'  !default;
// CSS class for text displayed with a checkbox or radio button
$text:     '.text'      !default;
// CSS class for thin fields that don't stretch to 100% width
$thin:     '.thin'      !default;
// CSS class for valid fields
$valid:    '.valid'     !default;
// CSS class for wide checkboxes and radio buttons
$wide:     '.wide'      !default;
`,R=`$formula: '.my-formula';
$field:   '.my-field';
$dark:    '.my-dark-theme';

@import '@abw/react-formula/sass/formula.scss';`,H=`$spacing:           0.5rem;
$border-width:      2px;
$focus-ring-width:  5px;
$smaller-size:      0.65rem;

@import '@abw/react-formula/sass/formula.scss';`;function g(l){const c=l.split(/[\r\n]+/);let u=[],r=[],t;for(let d of c){if(d.match(/^\s*$/)){r=[];continue}if(t=d.match(/^\/\*\s*(.*?)\s*\*\/$/)){r=[],u.push({section:t[1]});continue}if(t=d.match(/^\/\/=\s*(.*?)$/)){r=[],u.push({section:t[1]});continue}if(t=d.match(/\/\/\s*(.*)/)){r.push(t[1]);continue}if(t=d.match(/(\$[\w-]*):\s*(.*?)\s*(!default)?;/)){const m=t[2],p=m.match(/^'(.*?)'$/),b=p?p[1]:m;u.push({variable:t[1],defaultValue:b,description:r.join(" ")}),r=[]}}return u}const I=g(V),A=g(N),P=()=>n("div",{children:[e("h1",{children:"SASS Variables"}),n("p",{className:"intro",children:["The easiest way to modify the styles is by use of"," ",e(f,{to:"/styling/css-variables",text:"CSS variables"}),". If you want or need to go a bit deeper then you can generate your own variant of the default CSS file, customised using SASS variables."]}),e("h2",{children:"CSS Classes"}),n("p",{children:["The CSS classes used in the main stylesheet are defined using the variables listed in the table below.  Everything is scoped inside the main ",e("code",{children:".formula"})," namespace."]}),n("p",{children:["If you want to use different class names then you can define the variables before importing the main ",e("code",{children:"formula.scss"})," file, as show in this example.  Note that you will also need to configure the React components to use these new CSS classes."]}),e(o,{language:"scss",code:R,expand:!0,caption:"your-formula.scss"}),e(S,{vars:I}),e("h2",{children:"Default Values"}),e("p",{children:"There are a few SASS variables that are used to define some common units, shown in the table below."}),n("p",{children:["If you want to create your own stylesheet with different default values then the process is the same as shown above.  Define your own SASS stylesheet that defines custom values for these variables before importing the main ",e("code",{children:"formula.scss"}),"."]}),e(o,{language:"scss",code:H,expand:!0,caption:"your-formula.scss"}),e(S,{vars:A})]}),S=({vars:l})=>e(v,{children:n("table",{className:"wide vars table",children:[e("thead",{children:n("tr",{children:[e("th",{children:"Variable"}),e("th",{children:"Default"}),e("th",{children:"Description"})]})}),e("tbody",{children:l.map(({variable:c,defaultValue:u,description:r,section:t},d)=>t?e("tr",{children:e("th",{className:"section",colSpan:"3",children:t})},d):n("tr",{children:[e("td",{className:"name",children:c}),e("td",{className:"default",children:u}),e("td",{className:"description",children:r})]},c))})]})}),z=`.wide-border .formula {
  --input-border-width: 2px;
  --focus-ring-width:   4px;
  --focus-ring-gap:     1px;
  --focus-ring-opacity: 0.4;
}
.branded-red .formula {
  --brand-hue: 0;
}
.branded-orange .formula {
  --brand-hue: 30;
}
.branded-yellow .formula {
  --brand-hue: 60;
}
.branded-green .formula {
  --brand-hue: 120;
}
.branded-teal .formula {
  --brand-hue: 160;
}
.branded-blue .formula {
  --brand-hue: 190;
}
.branded-indigo .formula {
  --brand-hue: 240;
}
.branded-violet .formula {
  --brand-hue: 280;
}
.branded-maroon .formula {
  --brand-hue: 320;
}`,s=({color:l})=>e("div",{className:`branded-${l}`,children:n(x,{children:[e(w,{name:"field1",label:`The ${l} field`,placeholder:`The ${l} placeholder`}),e($,{})]})}),E=()=>n("div",{className:"wide-border lg-grid-3",children:[e(s,{color:"red"}),e(s,{color:"orange"}),e(s,{color:"yellow"}),e(s,{color:"green"}),e(s,{color:"teal"}),e(s,{color:"blue"}),e(s,{color:"indigo"}),e(s,{color:"violet"}),e(s,{color:"maroon"})]}),B=`import { Form, Field, ResetSubmit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SimpleForm = ({color}) =>
  <div className={\`branded-\${color}\`}>
    <Form>
      <Field
        name="field1"
        label={\`The \${color} field\`}
        placeholder={\`The \${color} placeholder\`}
      />
      <ResetSubmit/>
    </Form>
  </div>

const BrandedForms = () =>
  <div className="wide-border lg-grid-3">
    <SimpleForm color="red"/>
    <SimpleForm color="orange"/>
    <SimpleForm color="yellow"/>
    <SimpleForm color="green"/>
    <SimpleForm color="teal"/>
    <SimpleForm color="blue"/>
    <SimpleForm color="indigo"/>
    <SimpleForm color="violet"/>
    <SimpleForm color="maroon"/>
  </div>

export default BrandedForms`,O=`.formula {
  --brand-hue:          123;
  --input-border-width: 2px;
  --focus-ring-width:   4px;
  --focus-ring-gap:     1px;
  --focus-ring-opacity: 0.4;
  --valid-border:       #4a4;
  --invalid-border:     #4a4;
}`;const q=()=>{const{dark:l,toggleTheme:c}=F();return n("div",{children:[e("h1",{children:"CSS Variables"}),n("p",{className:"intro",children:["The CSS file makes heavy use of CSS variable (also known as ",e("i",{children:"CSS Custom Properties"}),") for styling."]}),e("h2",{children:"Redefining Variables"}),n("p",{children:["To change the styling you simply need to define a ",e("code",{children:".formula"})," ","block in your CSS file with the new variable definitions."]}),e(o,{language:"css",code:O,caption:"your-stylesheet.css",expand:!0}),n("p",{children:["The ",e("code",{children:"--brand-hue"})," CSS variable defines the default hue for field input and other elements.  You can easily set this to match your site branding. Here's an extract of CSS which sets it to 9 different colors. We're also increasing the width of the border and focus ring to make it a bit more prominent."]}),e(o,{language:"css",code:z}),e("p",{children:"Here's the same form rendered 9 times inside each of those CSS scopes."}),e(k,{Element:E,code:B,caption:"Branded Forms",children:n("p",{children:["Try clicking on the fields to see the different colored focus rings.  Don't forget to check it out in"," ",n("span",{onClick:c,className:"link",children:[l?"light":"dark"," mode"]})," ","too!"]})}),n("p",{children:["If for some reason you need to change the CSS class names that are used (e.g. to change ",e("code",{children:".formula"})," to ",e("code",{children:".my-formula"}),") then you can do that by creating your own version of the CSS stylesheet from the SASS sources.  The class names and a number of other core properties are defined as "," ",e(f,{to:"/styling/sass-variables",text:"SASS variables"}),"."]})]})},M=()=>n(C,{children:[e(h,{path:"",exact:!0,element:e(T,{})}),e(h,{path:"forms",element:e(W,{})}),e(h,{path:"fields",element:e(D,{})}),e(h,{path:"css-variables",element:e(q,{})}),e(h,{path:"sass-variables",element:e(P,{})})]});export{M as default};

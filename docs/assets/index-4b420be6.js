import{j as n,a as e,B as a,at as B,a1 as b,au as R,P as q,av as E,L as l,aw as D,p as N,ax as y,F as w,c as p,D as I,ay as V,E as S,S as k,d as W,az as z,_ as M,$ as c}from"./index-354a0d01.js";const $=(r="formula")=>({formula:r,bare:`${r}--bare`,checkbox:`${r}--checkbox`,checked:`${r}--checked`,controls:`${r}--controls`,debug:`${r}--debug`,disabled:`${r}--disabled`,errors:`${r}--errors`,field:`${r}--field`,fluid:`${r}--fluid`,focus:`${r}--focus`,help:`${r}--help`,inline:`${r}--inline`,input:`${r}--input`,invalid:`${r}--invalid`,option:`${r}--option`,optional:`${r}--optional`,panel:`${r}--panel`,prefix:`${r}--prefix`,prefixed:`${r}--prefixed`,radio:`${r}--radio`,required:`${r}--required`,suffix:`${r}--suffix`,suffixed:`${r}--suffixed`,valid:`${r}--valid`,wide:`${r}--wide`}),H=$(),O=`$brand-hue:   123;
$valid-hue:   40;
$invalid-hue: 12;
@import '@abw/react-formula/styles/formula.scss';`,P=`@import '@abw/react-formula/styles/formula.scss';

.formula {
  .field {
    .inputs {
      select {
        // your custom styling overrides
      }
    }
  }
}`,A=()=>n("div",{children:[e("h1",{children:"Styling the Forms"}),e("p",{className:"intro",children:"There's good news and bad news when it comes to styling..."}),e("h2",{className:"hint",children:"The Good News"}),e("p",{children:"The good news is that there's a default stylesheet which should give you reasonable results as a starting point.  You can import it into the top-level of your React app with something like this:"}),e(a,{code:B,expand:!0}),n("p",{children:["The gooder news is that the stylesheet is built using SASS (specifically SCSS) and you can import the styles into your own SASS stylesheet. There are numerous "," ",e(b,{to:"/styling/sass-variables",text:"configuration variables"})," ","which you can tweak to change the styling.  They're all defined using the ",e("code",{className:"code",children:"!default"})," directive which means you can provide your own values before importing the main SCSS file and it'll use your values instead of the defaults."]}),e(a,{code:O,language:"scss",expand:!0}),n("p",{children:["The goodest news of all is that most of these variables are then defined as ",e(b,{to:"/styling/css-variables",text:"CSS variables"})," that you can change without having to mess around with SASS.  Just add something like this to your CSS stylesheet."]}),e(a,{code:R,language:"css",expand:!0}),n("p",{children:["Or you can rewrite large chunks of the styling if you prefer. Every element has its own CSS class and they're all scoped inside"," ",e("code",{className:"code",children:".formula"})," (which you can change if you want to).  For example, you can import the main stylesheet and then selectively override the things you want to change."]}),e(a,{code:P,language:"scss",expand:!0}),e("h2",{className:"hint",children:"The Bad News"}),e("p",{children:"The bad news is that CSS/SASS is currently all there is.  If you want to use styled components or any other CSS-in-JS solution then you're bang out of luck.  I'm personally not a huge fan of putting CSS in JS (although I totally respect that it may be what works for you), and given that I wrote this library to help me get my job done, it's understandably focussed on what works for me."}),e("p",{children:"That said, I have plans to add it.  It shouldn't be particularly hard because the library is designed to make changes like that relatively simple.  But I just haven't got around to it yet because it's not high on my list of priorities."})]}),f=({uri:r})=>e(q,{uri:r,menu:E}),L=()=>n("div",{children:[e("h1",{children:"Form Styles"}),e("p",{children:"This page demonstrates the default form styles."}),n("div",{className:"note",children:[e("b",{children:"NOTE:"})," these are mockup forms and don't have full interactivity. For example, clicking on an input will not automatically focus it."]}),e("p",{children:"This is TODO"}),e(f,{uri:"forms"})]}),t={...D,label:"Example Label",type:"text",placeholder:"Placeholder text",form:{},status:{}},Y=()=>n("div",{children:[e("h1",{children:"Field Styles"}),e("p",{className:"intro",children:"This page demonstrates the default form field styles in their various states."}),n("div",{className:"note",children:[e("b",{children:"NOTE:"})," these are mockup fields and don't have full interactivity. For example, clicking on an input will not automatically focus it."]}),n("form",{className:"formula",children:[e("h3",{children:"Field With Placeholder Text"}),e(l,{field:t}),e("h3",{children:"Field With Value"}),e(l,{field:{...t,value:"Hello World"}}),e("h3",{children:"Field With Help"}),e(l,{field:{...t,help:"Your password must be between 11 and 42 characters"}}),e("h3",{children:"Field With Required Label"}),e(l,{field:{...t,value:"Hello World",required:!0,showRequired:!0}}),e("h3",{children:"Field With Optional Label"}),e(l,{field:{...t,value:"Hello World",showOptional:!0}}),e("h3",{children:"Field With Prefix and Suffix"}),e(l,{field:{...t,prefix:"$",suffix:".00"}}),e("h3",{children:"Focussed Field With Placeholder Text"}),e(l,{field:{...t,status:{focus:!0}}}),e("h3",{children:"Focussed Field With Value"}),e(l,{field:{...t,value:"Hello World",status:{focus:!0}}}),e("h3",{children:"Focussed Field With Help"}),e(l,{field:{...t,help:"Your password must be between 11 and 42 characters",status:{focus:!0}}}),e("h3",{children:"Focussed Field With Prefix and Suffix"}),e(l,{field:{...t,prefix:"$",suffix:".00",status:{focus:!0}}}),e("h3",{children:"Valid Field"}),e(l,{field:{...t,value:"Hello World",status:{valid:!0}}}),e("h3",{children:"Valid Field With Message"}),e(l,{field:{...t,message:"That username is available!",status:{valid:!0}}}),e("h3",{children:"Valid Field With Prefix and Suffix"}),e(l,{field:{...t,value:"Hello World",prefix:"$",suffix:".00",status:{valid:!0}}}),e("h3",{children:"Focussed Valid Field With Prefix and Suffix"}),e(l,{field:{...t,value:"Hello World",prefix:"$",suffix:".00",status:{valid:!0,focus:!0}}}),e("h3",{children:"Invalid Field"}),e(l,{field:{...t,value:"Hello World",status:{invalid:!0}}}),e("h3",{children:"Invalid Field With Message"}),e(l,{field:{...t,message:"Something went wrong!",status:{invalid:!0}}}),e("h3",{children:"Invalid Field With Prefix and Suffix"}),e(l,{field:{...t,value:"Hello World",prefix:"$",suffix:".00",status:{invalid:!0}}}),e("h3",{children:"Focussed Invalid Field With Prefix and Suffix"}),e(l,{field:{...t,value:"Hello World",prefix:"$",suffix:".00",status:{invalid:!0,focus:!0}}}),e("h3",{children:"Disabled Field"}),e(l,{field:{...t,prefix:"£",message:"Denied!",status:{disabled:!0}}})]}),e(f,{uri:"fields"})]}),j=`//= Spacing
// Default spacing unit for margin and padding
$spacing:                 0.25rem !default;
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
`,C=`//= Namespace Variables
// Main CSS scope for all react-formula CSS rules
$formula:  '.formula'   !default;
// Checkboxes and radio buttons without a border
$bare:     '.bare'      !default;
// Checkbox inputs
$checkbox: '.checkbox'  !default;
// Checked checkboxes and radio button options
$checked:  '.checked'   !default;
// Form controls: reset, submit, etc
$controls: '.controls'  !default;
// Dark theme
$dark:     '.dark'      !default;
// Debug component
$debug:    '.debug'     !default;
// Disabled fields
$disabled: '.disabled'  !default;
// Errors component
$errors:   '.errors'    !default;
// Fields
$field:    '.field'     !default;
// Fluid fields
$fluid:    '.fluid'     !default;
// Focussed fields
$focus:    '.focus'     !default;
// Help messages, include valid/invalid messages
$help:     '.help'      !default;
// Inline field
$inline:   '.inline'    !default;
// Field input
$input:    '.input'     !default;
// Invalid field
$invalid:  '.invalid'   !default;
// Radio button option
$option:   '.option'    !default;
// Optional label
$optional: '.optional'  !default;
// Panels inside debug component
$panel:    '.panel'     !default;
// Input prefix
$prefix:   '.prefix'    !default;
// Fields that have a prefix
$prefixed: '.prefixed'  !default;
// Radio button fields
$radio:    '.radio'     !default;
// Required label
$required: '.required'  !default;
// Input suffix
$suffix:   '.suffix'    !default;
// Fields that have a suffix
$suffixed: '.suffixed'  !default;
// Valid fields
$valid:    '.valid'     !default;
// Wide fields, checkboxes and radio buttons
$wide:     '.wide'      !default;
`,J=`$formula: '.my-formula';
$field:   '.my-field';
$dark:    '.my-dark-theme';

@import '@abw/react-formula/sass/formula.scss';`,G=`$spacing:           0.5rem;
$border-width:      2px;
$focus-ring-width:  5px;
$smaller-size:      0.65rem;

@import '@abw/react-formula/sass/formula.scss';`,m=({vars:r})=>e(N,{children:r.map(({variable:u,defaultValue:s,description:o,section:i},d)=>i?e("h3",{children:i},d):n("div",{className:"variable",children:[n("h4",{className:"name-default smallish",children:[e("div",{className:"var",children:e("code",{children:u})}),":",e("div",{className:"val",children:e("code",{children:s})})]}),e("div",{className:"description smallish",children:o})]},u))});function F(r){const u=r.split(/[\r\n]+/);let s=[],o=[],i;for(let d of u){if(d.match(/^\s*$/)){o=[];continue}if(i=d.match(/^\/\*\s*(.*?)\s*\*\/$/)){o=[],s.push({section:i[1]});continue}if(i=d.match(/^\/\/=\s*(.*?)$/)){o=[],s.push({section:i[1]});continue}if(i=d.match(/\/\/\s*(.*)/)){o.push(i[1]);continue}if(i=d.match(/(\$[\w-]*):\s*(.*?)\s*(!default)?;/)){const g=i[2],v=g.match(/^'(.*?)'$/),x=v?v[1]:g;s.push({variable:i[1],defaultValue:x,description:o.join(" ")}),o=[]}}return s}const U=F(C),_=F(j),K=()=>n("div",{children:[e("h1",{children:"SASS Variables"}),n("p",{className:"intro",children:["The easiest way to modify the styles is by use of"," ",e(b,{to:"/styling/css-variables",text:"CSS variables"}),". If you want or need to go a bit deeper then you can generate your own variant of the default CSS file, customised using SASS variables."]}),e("h2",{children:"CSS Classes"}),n("p",{children:["The CSS classes used in the main stylesheet are defined using the variables listed in the table below.  Everything is scoped inside the main ",e("code",{children:".formula"})," namespace."]}),n("p",{children:["If you want to use different class names then you can define the following SASS variables before importing the main"," ",e("code",{children:"formula.scss"})," file, as show in this example.  Note that you will also need to configure the React components to use these new CSS classes.  You can do that with the ",e(y,{})," property."]}),e(a,{language:"scss",code:J,expand:!0,caption:"your-formula.scss"}),e(m,{vars:U}),e("h2",{children:"Default Values"}),e("p",{children:"There are a few SASS variables that are used to define some common units, shown in the table below."}),n("p",{children:["If you want to create your own stylesheet with different default values then the process is the same as shown above.  Define your own SASS stylesheet that defines custom values for these variables before importing the main ",e("code",{children:"formula.scss"}),"."]}),e(a,{language:"scss",code:G,expand:!0,caption:"your-formula.scss"}),e(m,{vars:_}),e(f,{uri:"sass-variables"})]}),Q=`.wide-border .formula {
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
}`,h=({color:r})=>e("div",{className:`branded-${r}`,children:n(w,{children:[e(p,{name:"field1",label:`The ${r} field`,placeholder:`The ${r} placeholder`}),e(I,{})]})}),X=()=>n("div",{className:"wide-border lg-grid-3",children:[e(h,{color:"red"}),e(h,{color:"orange"}),e(h,{color:"yellow"}),e(h,{color:"green"}),e(h,{color:"teal"}),e(h,{color:"blue"}),e(h,{color:"indigo"}),e(h,{color:"violet"}),e(h,{color:"maroon"})]}),Z=`import { Form, Field, ResetSubmit } from '../../../../lib/index.js'

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

export default BrandedForms`,ee=`.formula {
  --brand-hue:          123;
  --input-border-width: 2px;
  --focus-ring-width:   4px;
  --focus-ring-gap:     1px;
  --focus-ring-opacity: 0.4;
  --valid-border:       #4a4;
  --invalid-border:     #4a4;
}`;const ne=()=>{const{isDark:r,toggleTheme:u}=V();return n("div",{children:[e("h1",{children:"CSS Variables"}),n("p",{className:"intro",children:["The CSS file makes heavy use of CSS variable (also known as ",e("i",{children:"CSS Custom Properties"}),") for styling."]}),e("h2",{children:"Redefining Variables"}),n("p",{children:["To change the styling you simply need to define a ",e("code",{children:".formula"})," ","block in your CSS file with the new variable definitions."]}),e(a,{language:"css",code:ee,caption:"your-stylesheet.css",expand:!0}),n("p",{children:["The ",e("code",{children:"--brand-hue"})," CSS variable defines the default hue for field input and other elements.  You can easily set this to match your site branding. Here's an extract of CSS which sets it to 9 different colors. We're also increasing the width of the border and focus ring to make it a bit more prominent."]}),e(a,{language:"css",code:Q}),e("p",{children:"Here's the same form rendered 9 times inside each of those CSS scopes."}),e(S,{Element:X,code:Z,caption:"Branded Forms",children:n("p",{children:["Try clicking on the fields to see the different colored focus rings.  Don't forget to check it out in"," ",n("span",{onClick:u,className:"link",children:[r?"light":"dark"," mode"]})," ","too!"]})}),n("p",{children:["If for some reason you need to change the CSS class names that are used (e.g. to change ",e("code",{children:".formula"})," to ",e("code",{children:".my-formula"}),") then you can do that by creating your own version of the CSS stylesheet from the SASS sources.  The class names and a number of other core properties are defined as "," ",e(b,{to:"/styling/sass-variables",text:"SASS variables"}),"."]}),e(f,{uri:"css-variables"})]})},re="import '@abw/react-formula/styles/formula-bem.css'";const ae=()=>n(w,{classes:H,children:[e(p,{name:"name",label:"Your name",required:!0}),e(p,{name:"email",label:"Your email address",required:!0}),e(p,{name:"terms",type:"checkbox",text:"I accept the terms and conditions",className:"formula--fluid",required:!0}),e(k,{})]}),ie=`import { Form, Field, Submit, BEMClasses } from '../../lib/index.js'
import '../../styles/formula-bem.scss'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit, BEMClasses } from '@abw/react-formula'

const BEMExample = () =>
  <Form classes={BEMClasses}>
    <Field
      name="name" label="Your name"
      required
    />
    <Field
      name="email" label="Your email address"
      required
    />
    <Field
      name="terms" type="checkbox"
      text="I accept the terms and conditions"
      className="formula--fluid"
      required
    />
    <Submit/>
  </Form>

export default BEMExample`,le=`$namespace: 'my-form';
@import '@abw/react-formula/styles/formula-bem.scss';`;const te=()=>n(w,{classes:$("my-form"),children:[e(p,{name:"name",label:"Your name",required:!0}),e(p,{name:"email",label:"Your email address",required:!0}),e(p,{name:"terms",type:"checkbox",text:"I accept the terms and conditions",className:"my-form--fluid",required:!0}),e(k,{})]}),oe=`import { Form, Field, Submit, prefixClasses } from '../../lib/index.js'
import '../styles/my-form.scss'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit, prefixClasses } from '@abw/react-formula'

const BEMExample = () =>
  <Form classes={prefixClasses('my-form')}>
    <Field
      name="name" label="Your name"
      required
    />
    <Field
      name="email" label="Your email address"
      required
    />
    <Field
      name="terms" type="checkbox"
      text="I accept the terms and conditions"
      className="my-form--fluid"
      required
    />
    <Submit/>
  </Form>

export default BEMExample`,de=F(C),se=()=>n("div",{children:[e("h1",{children:"CSS Classes"}),e("p",{className:"intro",children:"The CSS classes used in the main stylesheet are shown in the table below."}),e(ue,{}),e("h2",{children:"Alternate BEM Stylesheet"}),n("p",{children:["The default classes are intentionally simple and map directly onto the element or state they represent. However there is always the possibility that you can get a clash with an existing CSS class in your stylesheet. For example, you may have an existing CSS rule for the ",e("code",{children:"invalid"})," ","class which could interfere with the ",e("code",{children:"react-formula"})," rule of the same name."]}),n("p",{children:["If that is the case then you can use the alternate stylesheet that explicitly scopes the classes under the ",e("code",{children:"formula--"})," prefix. For example, it uses ",e("code",{children:"formula--invalid"})," instead of"," ",e("code",{children:"invalid"}),".  This is commonly known as"," ",e("a",{href:"https://getbem.com/",children:"BEM"}),` for "Block, Element, Modifier" (although it should be noted that this isn't necessarily a strict implementation of BEM).`]}),e(a,{code:re,caption:"BEM Stylesheet",expand:!0}),n("p",{children:["You will also need to update your code to tell ",e("code",{children:"react-formula"})," ","to use these classes in the code it generates.  You can do this by importing the ",e("code",{children:"BEMClasses"})," from ",e("code",{children:"@abw/react-formula"})," ","and passing it to your form as using the ",e(y,{})," property."]}),e(S,{Element:ae,code:ie,caption:"Using BEMClasses",expand:!0,children:n("p",{children:["Note that any other classes you use will now require the"," ",e("code",{children:"formula--"})," prefix.  For example, the checkbox in this example uses ",e("code",{children:"formula--fluid"})," instead of just"," ",e("code",{children:"fluid"})," to make it have a fluid width."]})}),e("h2",{children:"Custom CSS Namespace"}),n("p",{children:["You can create your own stylesheet with a custom CSS namespace using the SASS components.  Create your own ",e("code",{children:".scss"})," file like the one below.  Define ",e("code",{children:"$namespace"})," to be the prefix you want and then ",e("code",{children:"@import"})," the"," ",e("code",{children:"@abw/react-formula/styles/formula-bem.scss"})," component."]}),e(a,{code:le,caption:"Custom Stylesheet",expand:!0,language:"scss"}),n("p",{children:["You will then need to include this stylesheet in your application. If your framework doesn't support loading SASS styles directly then you should pre-process it using the ",e("code",{children:"sass"})," command line tool to generate a CSS file which you can import into your app."]}),n("p",{children:["In your React code you can then use the ",e("code",{children:"prefixClasses()"})," ","function to generate the CSS classes with your prefix that you can pass to each ",e(W,{})," using the ",e(y,{})," property."]}),e(S,{Element:te,code:oe,caption:"prefixCSS",expand:!0,children:n("p",{children:["Note that any other classes you use will now require the"," ",e("code",{children:"my-form--"})," prefix.  For example, the checkbox in this example uses ",e("code",{children:"my-form--fluid"})," instead of just"," ",e("code",{children:"fluid"})," to make it have a fluid width."]})}),n("p",{children:["If you just want to change one or two classes to avoid a clash then you can do that by setting the appropriate SASS namespace variables (see ",e(z,{}),") before importing the ",e("code",{children:"formula.scss"})," ","component."]}),e(f,{uri:"css-classes"})]}),ue=()=>n("table",{className:"wide vars table",children:[e("thead",{children:n("tr",{children:[e("th",{children:"CSS Class"}),e("th",{children:"Description"})]})}),e("tbody",{children:de.map(({variable:r,defaultValue:u,description:s,section:o})=>o?null:n("tr",{children:[e("td",{className:"default",children:u}),e("td",{className:"description",children:s})]},r))})]}),ce=`<form class="formula">
  ...
</form>`,he=`<div class="field">
  ...
</div>`,fe=`<div class="field focus">
  ...
</div>`,pe=`<div class="field valid">
  ...
</div>`,be=`<div class="field invalid">
  ...
</div>`,ge=`<div class="field disabled">
  ...
</div>`,ve=`<div class="field fluid">
  ...
</div>`,me=`<div class="field inline">
  ...
</div>`,xe=`<div class="field wide">
  ...
</div>`,ye=`<div class="field">
  <label for="xxx" class="label">Text Field</label>
  <div class="input text">
    <input type="text" id="xxx" name="yyy" value=""/>
  </div>
</div>`,Se=`<div class="field">
  <label for="xxx" class="label">Textarea Field</label>
  <div class="input textarea">
    <textarea id="xxx" name="yyy" rows="5"></textarea>
  </div>
</div>`,we=`<div class="field">
  <label for="xxx" class="label">Select Field</label>
  <div class="input select">
    <select id="xxx" name="yyy">
      <option class="option" value="One">One</option>
      <option class="option" value="Two">Two</option>
      <option class="option" value="Three">Three</option>
    </select>
  </div>
</div>`,Fe=`<div class="field">
  <label for="xxx" class="label">Checkbox Field</label>
  <div class="input checkbox">
    <label for="xxx" class="option checked">
      <input type="checkbox" id="xxx" name="yyy">
      <span>This is a checkbox</span>
    </label>
  </div>
</div>`,ke=`<div class="field">
  <label for="xxx" class="label">Radio Field</label>
  <div class="input radio">
    <label for="xxx-One" class="option checked">
      <input type="radio" id="xxx-One" name="yyy" value="One">
      <span>One</span>
    </label>
    <label for="xxx-Two" class="option">
      <input type="radio" id="xxx-Two" name="yyy" value="Two">
      <span>Two</span>
    </label>
    <label for="xxx-Three" class="option">
      <input type="radio" id="xxx-Three" name="yyy" value="Three">
      <span>Three</span>
    </label>
  </div>
</div>`,$e=`<div class="field">
  <label for="xxx" class="label">Field With Help</label>
  <div class="input">
    ...
  </div>
  <div class="help">Help or validation message</div>
</div>`,Ce=`<div class="field">
  <label for="xxx" class="label">Field With Prefix</label>
  <div class="input prefixed">
    <div class="prefix">prefix</div>
    <input type="text" id="xxx">
  </div>
</div>`,Te=`<div class="field">
  <label for="xxx" class="label">Field With Suffix</label>
  <div class="input suffixed">
    <input type="text" id="xxx">
    <div class="suffix">suffix</div>
  </div>
</div>`,Be=`<div class="field">
  <label for="xxx" class="label">
    Required Field
    <span class="required">Required</span>
  </label>
  <div class="input">
    ...
  </div>
</div>
`,Re=`<div class="field">
  <label for="xxx" class="label">
    Optional Field
    <span class="optional">Optional</span>
  </label>
  <div class="input">
    ...
  </div>
</div>
`,qe='<button type="submit" class="submit">Submit</button>',Ee='<button type="reset" class="reset">Reset</button>',De='<button type="button" class="cancel">Cancel</button>',Ne=`<div class="controls">
  <button type="reset" class="reset">Reset</button>
  <button type="submit" class="submit">Submit</button>
</div>`,Ie=`<div class="controls">
  <button type="button" class="cancel">Cancel</button>
  <button type="submit" class="submit">Submit</button>
</div>`,Ve=`<div class="controls">
  <div>
    <button type="button" class="cancel">Cancel</button>
    <button type="reset" class="reset">Reset</button>
  </div>
  <button type="submit" class="submit">Submit</button>
</div>`,We=`<div class="errors">
  <h3>Form Submission Errors</h3>
  <div>
    <p>
      Please correct these problems and re-submit:
    </p>
    <ul>
      <li><b>Field one: </b>A value is required</li>
      <li><b>Field two: </b>A value is required</li>
    </ul>
  </div>
</div>`,ze=`<div class="debug">
  <div class="panel">
    <h4>Values</h4>
    <pre>
      ...
    </pre>
  </div>
</div>`,Me=()=>n("div",{children:[e("h1",{children:"Markup Examples"}),e("p",{className:"intro",children:"These examples show the HTML markup that is typically generated by the components."}),e("h2",{children:"Form"}),e(a,{code:ce,caption:"Form",language:"html",expand:!0}),e("h2",{children:"Field"}),e(a,{code:he,caption:"Field",language:"html",expand:!0}),e("h2",{children:"Focussed Field"}),e(a,{code:fe,caption:"Focussed Field",language:"html",expand:!0}),e("h2",{children:"Valid Field"}),e(a,{code:pe,caption:"Valid Field",language:"html",expand:!0}),e("h2",{children:"Invalid Field"}),e(a,{code:be,caption:"Invalid Field",language:"html",expand:!0}),e("h2",{children:"Disabled Field"}),e(a,{code:ge,caption:"Disabled Field",language:"html",expand:!0}),e("h2",{children:"Fluid Field"}),e(a,{code:ve,caption:"Fluid Field",language:"html",expand:!0}),e("h2",{children:"Inline Field"}),e(a,{code:me,caption:"Inline Field",language:"html",expand:!0}),e("h2",{children:"Wide Field"}),e(a,{code:xe,caption:"Wide Field",language:"html",expand:!0}),e("h2",{children:"Text Field"}),e(a,{code:ye,caption:"Text Field",language:"html",expand:!0}),e("h2",{children:"Text Area Field"}),e(a,{code:Se,caption:"Textarea Field",language:"html",expand:!0}),e("h2",{children:"Select Field"}),e(a,{code:we,caption:"Select Field",language:"html",expand:!0}),e("h2",{children:"Checkbox Field"}),e(a,{code:Fe,caption:"Checkbox Field",language:"html",expand:!0}),e("h2",{children:"Radio Field"}),e(a,{code:ke,caption:"Radio Field",language:"html",expand:!0}),e("h2",{children:"Field With Help"}),e(a,{code:$e,caption:"Help Field",language:"html",expand:!0}),e("h2",{children:"Field With Prefix"}),e(a,{code:Ce,caption:"Prefix Field",language:"html",expand:!0}),e("h2",{children:"Field With Suffix"}),e(a,{code:Te,caption:"Suffix Field",language:"html",expand:!0}),e("h2",{children:"Required Label"}),e(a,{code:Be,caption:"Required Label",language:"html",expand:!0}),e("h2",{children:"Optional Label"}),e(a,{code:Re,caption:"Optional",language:"html",expand:!0}),e("h2",{children:"Submit Button"}),e(a,{code:qe,caption:"Submit",language:"html",expand:!0}),e("h2",{children:"Reset Button"}),e(a,{code:Ee,caption:"Reset",language:"html",expand:!0}),e("h2",{children:"Cancel Button"}),e(a,{code:De,caption:"Cancel",language:"html",expand:!0}),e("h2",{children:"ResetSubmit Buttons"}),e(a,{code:Ne,caption:"ResetSubmit",language:"html",expand:!0}),e("h2",{children:"CancelSubmit Buttons"}),e(a,{code:Ie,caption:"CancelSubmit",language:"html",expand:!0}),e("h2",{children:"CancelResetSubmit Buttons"}),e(a,{code:Ve,caption:"CancelResetSubmit",language:"html",expand:!0}),e("h2",{children:"Errors"}),e(a,{code:We,caption:"Errors",language:"html",expand:!0}),e("h2",{children:"Debug"}),e(a,{code:ze,caption:"Debug",language:"html",expand:!0}),e(f,{uri:"markup"})]});function T(r){r=r.replaceAll(/(:|,)\s*\n/g,"$1");const u=r.split(/[\r\n]+/);let s=[],o=[],i;for(let d of u)if(!d.match(/^(@|})/)){if(d.match(/^\s*$/)){o=[];continue}if(i=d.match(/^\s*\/\*\s*(.*?)\s*\*\/$/)){o=[],s.push({section:i[1]});continue}if(i=d.match(/^\s*\/\/=\s*(.*?)$/)){o=[],s.push({section:i[1]});continue}if(i=d.match(/\/\/\s*(.*)/)){o.push(i[1]);continue}if(i=d.match(/(--[\w-]*):\s*(.*?);/)){const g=i[2],v=g.match(/^'(.*?)'$/),x=v?v[1]:g;s.push({variable:i[1],defaultValue:x,description:o.join(" ")}),o=[];continue}console.log("failed to match: ",d)}return s}const He=`@include where-formula {
  /* Base units */
  // The default unit of spacing
  --spacing:                      #{$spacing};
  // The default margin unit
  --margin:                       #{$margin};
  // Twice the margin unit
  --margin-2:                     #{$margin-2};
  // Three times the margin unit
  --margin-3:                     #{$margin-3};
  // Four times the margin unit
  --margin-4:                     #{$margin-4};
  // The default padding unit
  --padding:                      #{$padding};
  // Twice the padding unit
  --padding-2:                    #{$padding-2};
  // Three times the padding unit
  --padding-3:                    #{$padding-3};
  // Four times the padding unit
  --padding-4:                    #{$padding-4};
  // Vertical padding
  --padding-y:                    var(--padding-2);
  // Horizontal padding
  --padding-x:                    var(--padding-4);
  // The border width for inputs, buttons, etc
  --border-width:                 #{$border-width};
  // The border radius for inputs, buttons, etc
  --border-radius:                #{$border-radius};
  // The width of a focus ring
  --focus-ring-width:             #{$focus-ring-width};
  // The gap between a border and focus ring
  --focus-ring-gap:               #{$focus-ring-gap};
  // Font size for smaller text
  --smaller-size:                 #{$smaller-size};
  // Font size for small text
  --small-size:                   #{$small-size};
  // Font size for large text
  --large-size:                   #{$large-size};
  // Font size for larger text
  --larger-size:                  #{$larger-size};

  /* Base hues */
  // A hue for your brand used to style various components
  --brand-hue:                    190;
  // Hue for default state inputs
  --input-hue:                    var(--brand-hue);
  // Hue for labels in the default state
  --label-hue:                    var(--brand-hue);
  // Hue for focussed inputs
  --focus-hue:                    var(--brand-hue);
  // Hue for buttons.
  --button-hue:                   var(--brand-hue);
  // Hue for the "Required" label tag
  --required-hue:                 30;
  // Hue for the "Optional" label tag
  --optional-hue:                 210;
    // Hue for validated inputs, usually a green hue
  --valid-hue:                    90;
  // Hue for invalid inputs, usually a red hue
  --invalid-hue:                  0;
  // Hue for disabled inputs, usually a desaturated brown
  --disabled-hue:                 30;
  // Hue for errors
  --errors-hue:                   var(--invalid-hue);
  // Hue for debugging panel, not usually seen by end users
  --debug-hue:                    240;

  /* Shadows */
  // Small, tight shadow
  --shadow-1:                     1px 1px 2px rgba(0, 0, 0, 0.1);
  // Medium shadow
  --shadow-2:                     2px 2px 4px rgba(0, 0, 0, 0.08);
  // Larger shadow
  --shadow-3:                     3px 3px 6px rgba(0, 0, 0, 0.06);

  /* Fields */
  // Margin between fields
  --field-margin:                 var(--margin-4);
  // Margin between options, e.g. in radio sets
  --option-margin:                var(--margin-4);

  /* Labels, including Required and Optional label tags */
  // Text color for field labels in the default state
  --label-text:                   hsl(var(--label-hue), 10%, 50%);
  // Text color for the "Required" label tag
  --required-text:                hsl(var(--required-hue), 90%, 30%);
  // Background color for the "Required" label tag
  --required-back:                hsl(var(--required-hue), 50%, 90%);
  // Border color for the "Required" label tag.
  --required-border:              hsl(var(--required-hue), 70%, 80%);
  // Text color for the "Optional" label tag
  --optional-text:                hsl(var(--optional-hue), 10%, 30%);
  // Background color for the "Optional" label tag
  --optional-back:                hsl(var(--optional-hue), 50%, 90%);
  // Border color for the "Optional" label tag
  --optional-border:              hsl(var(--optional-hue), 70%, 80%);
  // Font size of label
  --label-size:                   var(--small-size);
  // Margin between label and input
  --label-margin:                 var(--margin-2);
  // Text color for help text in the default state
  --help-text:                    var(--label-text);
  // Size of help text
  --help-size:                    var(--small-size);
  // Margin between input and help/validation message
  --help-margin:                  var(--margin);

  /* Inputs */
  // Text color for inputs in the default state.
  --input-text:                   hsl(var(--input-hue), 20%, 40%);
  // Background color for inputs in the default state.
  --input-back:                   hsl(var(--input-hue), 10%, 97%);
  // Border color for inputs in the default state.
  --input-border:                 hsl(var(--input-hue), 30%, 80%);
  // Width of border
  --input-border-width:           var(--border-width);
  // Border radius of inputs
  --input-border-radius:          var(--border-radius);
  // Vertical padding
  --input-padding-y:              var(--padding-y);
  // Horizontal padding
  --input-padding-x:              var(--padding-x);
  // Combined padding
  --input-padding:                var(--input-padding-y) var(--input-padding-x);
  // Max height of input
  --input-max-height:             calc(1em + (var(--input-padding-y) * 2) + (var(--input-border-width) * 2));
  // Tweak select to make same size
  --select-padding-tweak:         1.25px;

  /* Prefix and suffix  */
  // Text color for input prefix/suffix elements in the default state.
  --prefix-text:                  hsl(var(--input-hue), 70%, 20%);
  // Background color for input prefix/suffix elements in the default state.
  --prefix-back:                  hsl(var(--input-hue), 20%, 90%);
  // Border color for input prefix/suffix
  --prefix-border:                var(--input-border);
  // Combined padding for prefix/suffix
  --prefix-padding:               var(--input-padding);

  /* Placeholder text */
  // Color for input placeholder text in the default state.
  --placeholder-text:             hsl(var(--input-hue), 20%, 75%);

  /* Focussed Input State */
  // Text color for inputs in focussed fields.
  --focus-text:                   hsl(var(--focus-hue), 60%, 20%);
  // Background color for inputs in focussed fields.
  --focus-back:                   hsl(var(--focus-hue), 60%, 99%);
  // Border color for inputs in focussed fields.
  --focus-border:                 hsl(var(--focus-hue), 60%, 70%);
  // Opacity of focus ring
  --focus-ring-opacity:           0.5;
  // Border color for inputs in focussed fields.
  --focus-ring-border:            hsla(var(--focus-hue), 70%, 60%, var(--focus-ring-opacity));
  // Color of gap between border and ring.
  --focus-gap-border:             hsl(var(--focus-hue), 10%, 95%);
  // Outer box shadow for focus ring
  --focus-ring-outline:           0 0 0 var(--focus-ring-width) var(--focus-ring-border);
  // Inner box shadow for focus ring
  --focus-ring-inline:            0 0 0 var(--focus-ring-gap)   var(--focus-gap-border);
  // Box shadow for focus ring
  --focus-ring:                   var(--focus-ring-inline), var(--focus-ring-outline);
  // Color for labels in focussed fields.
  --focus-label-text:             hsl(var(--focus-hue), 10%, 30%);
  // Text color for prefix/suffix elements in focussed fields.
  --focus-prefix-text:            hsl(var(--focus-hue), 70%, 20%);
  // Background color for prefix/suffix elements in focussed fields.
  --focus-prefix-back:            hsl(var(--focus-hue), 30%, 90%);
  // Color for input placeholder text in focussed fields.
  --focus-placeholder-text:       hsl(var(--focus-hue), 50%, 80%);
  // Color for help text in focussed fields.
  --focus-help-text:              var(--focus-label-text);

  /* Valid Field State */
  // Text color for inputs in valid fields.
  --valid-text:                   hsl(var(--valid-hue), 30%, 30%);
  // Background color for inputs in valid fields.
  --valid-back:                   hsl(var(--valid-hue), 30%, 97%);
  // Border color for inputs in valid fields.
  --valid-border:                 hsl(var(--valid-hue), 20%, 50%);
  // Opacity of focus ring
  --valid-ring-opacity:           var(--focus-ring-opacity);
  // Border color for valid inputs in focussed fields.
  --valid-ring-border:            hsla(var(--valid-hue), 60%, 75%, var(--valid-ring-opacity));
  // Color of gap between border and ring.
  --valid-gap-border:             hsl(var(--valid-hue), 10%, 95%);
  // Outer box shadow for valid focus ring
  --valid-ring-outline:           0 0 0 var(--focus-ring-width) var(--valid-ring-border);
  // Inner box shadow for valid focus ring
  --valid-ring-inline:            0 0 0 var(--focus-ring-gap)   var(--valid-gap-border);
  // Box shadow for valid focus ring
  --valid-ring:                   var(--valid-ring-inline), var(--valid-ring-outline);
  // Color for labels in valid fields.
  --valid-label-text:             hsl(var(--valid-hue), 50%, 30%);
  // Text color for prefix/suffix elements in valid fields.
  --valid-prefix-text:            hsl(var(--valid-hue), 70%, 20%);
  // Background color for prefix/suffix elements in valid fields.
  --valid-prefix-back:            hsl(var(--valid-hue), 30%, 90%);
  // Color for input placeholder text in valid fields.
  --valid-placeholder-text:       hsl(var(--valid-hue), 40%, 70%);
  // Successful validation message displayed under field input
  --valid-help-text:              hsl(var(--valid-hue), 60%, 40%);
  // Text to display at start of valid help message
  --valid-help-before:            '✔︎ ';

  /* Invalid Field State */
  // Text color for inputs in invalid fields.
  --invalid-text:                 hsl(var(--invalid-hue), 50%, 30%);
  // Background color for inputs in invalid fields.
  --invalid-back:                 hsl(var(--invalid-hue), 60%, 96%);
  // Border color for inputs in invalid fields.
  --invalid-border:               hsl(var(--invalid-hue), 60%, 70%);
  // Opacity of invalid focus ring
  --invalid-ring-opacity:         var(--focus-ring-opacity);
  // Border color for invalid inputs in focussed fields.
  --invalid-ring-border:          hsla(var(--invalid-hue), 70%, 85%, var(--invalid-ring-opacity));
  // Color of gap between border and ring.
  --invalid-gap-border:           hsl(var(--invalid-hue), 10%, 95%);
  // Outer box shadow for invalid focus ring
  --invalid-ring-outline:         0 0 0 var(--focus-ring-width) var(--invalid-ring-border);
  // Inner box shadow for invalid focus ring
  --invalid-ring-inline:          0 0 0 var(--focus-ring-gap)   var(--invalid-gap-border);
  // Box shadow for invalid focus ring
  --invalid-ring:                 var(--invalid-ring-inline), var(--invalid-ring-outline);
  // Color for labels in invalid fields.
  --invalid-label-text:           hsl(var(--invalid-hue), 50%, 30%);
  // Text color for prefix/suffix elements in invalid fields.
  --invalid-prefix-text:          hsl(var(--invalid-hue), 70%, 20%);
  // Background color for prefix/suffix elements in invalid fields.
  --invalid-prefix-back:          hsl(var(--invalid-hue), 30%, 90%);
  // Color for input placeholder text in invalid fields.
  --invalid-placeholder-text:     hsl(var(--invalid-hue), 50%, 80%);
  // Error message displayed under field input
  --invalid-help-text:            hsl(var(--invalid-hue), 70%, 50%);
  // Text to display at start of invalid help message
  --invalid-help-before:          '✘ ';

  /* Disabled Field State */
  // Saturation for disabled elements
  --disabled-sat:                 1%;
  // Text color for inputs in disabled fields.
  --disabled-text:                hsl(var(--disabled-hue), var(--disabled-sat), 50%);
  // Background color for inputs in disabled fields.
  --disabled-back:                hsl(var(--disabled-hue), var(--disabled-sat), 95%);
  // Border color for inputs in disabled fields.
  --disabled-border:              hsl(var(--disabled-hue), var(--disabled-sat), 75%);
  // Color for labels in invalid fields.
  --disabled-label-text:          hsl(var(--disabled-hue), var(--disabled-sat), 70%);
  // Text color for prefix/suffix elements in disabled fields.
  --disabled-prefix-text:         hsl(var(--disabled-hue), var(--disabled-sat), 50%);
  // Background color for prefix/suffix elements in disabled fields.
  --disabled-prefix-back:         hsl(var(--disabled-hue), var(--disabled-sat), 90%);
  // Color for input placeholder text in disabled fields.
  --disabled-placeholder-text:    hsl(var(--disabled-hue), var(--disabled-sat), 65%);
  // Error message displayed under field input
  --disabled-help-text:           hsl(var(--disabled-hue), var(--disabled-sat), 70%);
  // Text to display at start of disabled help message
  --disabled-help-before:         '✘ ';

  /* Errors panel */
  // Text color for errors
  --errors-text:                  hsl(var(--errors-hue), 50%, 50%);
  // Background color for errors.
  --errors-back:                  hsl(var(--errors-hue), 50%, 90%);
  // Color for errors border
  --errors-border:                hsl(var(--errors-hue), 80%, 40%);
  // Width for errors border
  --errors-border-width:          var(--border-width);
  // Width for errors border
  --errors-border-radius:         var(--border-radius);
  // Horizontal padding for errors
  --errors-padding-x:             var(--padding-4);
  // Vertical padding for errors
  --errors-padding-y:             var(--padding-3);
  // Combined padding for errors
  --errors-padding:               var(--errors-padding-y) var(--errors-padding-x);
  // Combined margin for errors
  --errors-margin:                0 0 var(--margin-4) 0;
  // Combined padding for errors title
  --errors-title-padding:         var(--padding-2) var(--padding-4);
  // Errors title size
  --errors-title-size:            var(--larger-size);
  // Color for errors title
  --errors-title-text:            hsl(var(--errors-hue), 50%, 90%);
  // Color for labels in errors
  --errors-label-text:            hsl(var(--errors-hue), 60%, 40%);
  // Box shadow for errors
  --errors-shadow:                var(--shadow-2);

  /* Fieldset */
  // Background color for fieldset
  --fieldset-back:              rgba(255, 255, 255, 0.5);
  // Color of fieldset border
  --fieldset-border:              var(--input-border);
  // Width for fieldset border
  --fieldset-border-width:        var(--border-width);
  // Border radius for fieldset
  --fieldset-border-radius:       var(--border-radius);
  // Margin for fieldset
  --fieldset-margin:              1em 0;
  // Padding for fieldset
  --fieldset-padding:             1em 2em;
  // Box shadow for fieldset
  --fieldset-shadow:              var(--shadow-2);

  /* Fieldset legend */
  // Text color for fieldset legend
  --legend-text:                  hsl(var(--brand-hue), 10%, 40%);
  // Background color for fieldset legend
  --legend-back:                  hsl(var(--brand-hue), 5%, 95%);
  // Padding for fieldset legend
  --legend-padding:               var(--padding) var(--padding-2);
  // Text size for fieldset legend
  --legend-size:                  var(--smaller-size);
  // Border color for fieldset legend
  --legend-border:                var(--fieldset-border);
  // Border width for fieldset legend
  --legend-border-width:          var(--fieldset-border-width);
  // Border radius for fieldset legend
  --legend-border-radius:         var(--fieldset-border-radius);

  /* Button Variables */
  // Vertical padding
  --button-padding-y:             var(--input-padding-y);
  // Horizontal padding
  --button-padding-x:             var(--input-padding-x);
  // Combined padding
  --button-padding:               var(--button-padding-y) var(--button-padding-x);
  // Width of button border
  --button-border-width:          var(--input-border-width);
  // Border radius of buttons
  --button-border-radius:         var(--border-radius);
  // Default button text color
  --button-text:                  hsl(var(--brand-hue), 10%, 95%);
  // Default button background color
  --button-back:                  hsl(var(--brand-hue), 55%, 45%);
  // Default button border color
  --button-border:                hsl(var(--brand-hue), 55%, 45%);
  // Width of focus ring
  --button-ring-width:            var(--focus-ring-width);
  // Gap between border and focus ring
  --button-ring-gap:              var(--focus-ring-gap);
  // Opacity of button focus ring
  --button-ring-opacity:          var(--focus-ring-opacity);
  // Border color for focussed button.
  --button-ring-border:           hsla(var(--button-hue), 70%, 60%, var(--button-ring-opacity));
  // Color of gap between border and ring.
  --button-gap-border:            hsl(var(--button-hue), 10%, 95%);
  // Outer box shadow for button focus ring
  --button-ring-outline:         0 0 0 var(--focus-ring-width) var(--button-ring-border);
  // Inner box shadow for button focus ring
  --button-ring-inline:          0 0 0 var(--focus-ring-gap)   var(--button-gap-border);
  // Box shadow for button focus ring
  --button-ring:                 var(--button-ring-inline), var(--button-ring-outline);

  // Submit button background color
  --submit-back:                  var(--button-back);
  // Submit button text color
  --submit-text:                  var(--button-text);
  // Submit button border color
  --submit-border:                var(--button-border);
  // Reset button text color
  --reset-text:                   hsl(var(--button-hue), 60%, 10%);
  // Reset button background color
  --reset-back:                   hsl(var(--button-hue), 5%, 90%);
  // Reset button border color
  --reset-border:                 hsl(var(--button-hue), 10%, 80%);
  // Border color for focussed reset button.
  --reset-ring-border:            hsla(var(--button-hue), 15%, 85%, var(--button-ring-opacity));
  // Color of gap between border and ring.
  --reset-gap-border:             hsl(var(--button-hue), 10%, 95%);
  // Outer box shadow for reset focus ring
  --reset-ring-outline:           0 0 0 var(--focus-ring-width) var(--reset-ring-border);
  // Inner box shadow for reset focus ring
  --reset-ring-inline:            0 0 0 var(--focus-ring-gap)   var(--reset-gap-border);
  // Box shadow for reset focus ring
  --reset-ring:                   var(--reset-ring-inline), var(--reset-ring-outline);

  /* Debug variables */
   // Background color for debug component
  --debug-back:                   hsl(var(--debug-hue), 20%, 95%);
   // Border color for debug component
  --debug-border:                 hsl(var(--debug-hue), 30%, 85%);
  // Border width for debug component
  --debug-border-width:           var(--input-border-width);
  // Corner radius for debug component border
  --debug-border-radius:          var(--border-radius);
  // Margin for debug component
  --debug-margin:                 2rem 0 0 0;
  // Box shadow for debug component
  --debug-shadow:                 var(--shadow-2);

  // Text color for inset debugging panels
  --debug-panel-text:             hsl(var(--debug-hue), 90%, 10%);
  // Background color for inset debugging panels
  --debug-panel-back:             hsl(var(--debug-hue), 10%, 97%);
  // Title color for inset debugging panels
  --debug-panel-title-text:       hsl(var(--debug-hue), 90%, 10%);
  // Padding for inset debugging panels
  --debug-panel-padding:          var(--padding-2) var(--padding-4);
  // Margin for inset debugging panels
  --debug-panel-margin:           var(--margin-2);
  // Border color for inset debugging panels
  --debug-panel-border:           var(--debug-border);
  // Border width for inset debugging panels
  --debug-panel-border-width:     var(--debug-border-width);
  // Border radius for inset debugging panels
  --debug-panel-border-radius:    var(--debug-border-radius);
  // Box shadow for inset debugging panels
  --debug-panel-shadow:           var(--shadow-1);

  /* Miscelleaneous */
  // The accent color for inputs
  --accent-color:                 hsl(var(--brand-hue), 60%, 30%);

}

`,Oe=T(He),Pe=()=>n("div",{children:[e("h1",{children:"CSS Variables - Defaults"}),n("p",{className:"intro",children:["These are the default values defined for CSS variables.  Note that some of the base units are defined in terms of "," ",e(b,{to:"/styling/sass-variables",text:"SASS Variables"}),"."]}),e(m,{vars:Oe}),e(f,{uri:"css-defaults"})]}),Ae=`@include where-dark {
  color-scheme: dark;
  /* Labels, including Required and Optional label tags */
  // Text color for field labels in the default state
  --label-text:                   hsl(var(--label-hue), 10%, 60%);
  // Text color for the "Required" label tag
  --required-text:                hsl(var(--required-hue), 90%, 80%);
  // Background color for the "Required" label tag
  --required-back:                hsl(var(--required-hue), 60%, 30%);
  // Border color for the "Required" label tag.
  --required-border:              hsl(var(--required-hue), 30%, 35%);
  // Text color for the "Optional" label tag
  --optional-text:                hsl(var(--optional-hue), 90%, 80%);
  // Background color for the "Optional" label tag
  --optional-back:                hsl(var(--optional-hue), 35%, 35%);
  // Border color for the "Optional" label tag
  --optional-border:              hsl(var(--optional-hue), 40%, 40%);

  /* Inputs */
  // Text color for inputs in the default state.
  --input-text:                   hsl(var(--input-hue), 10%, 60%);
  // Background color for inputs in the default state.
  --input-back:                   hsl(var(--input-hue), 10%, 20%);
  // Border color for inputs in the default state.
  --input-border:                 hsl(var(--input-hue), 20%, 35%);

  /* Prefix and suffix  */
  // Text color for input prefix/suffix elements in the default state.
  --prefix-text:                  hsl(var(--input-hue), 20%, 50%);
  // Background color for input prefix/suffix elements in the default state.
  --prefix-back:                  hsl(var(--input-hue), 20%, 25%);

  /* Placeholder text */
  // Color for input placeholder text in the default state.
  --placeholder-text:             hsl(var(--input-hue), 10%, 35%);

  /* Focussed Input State */
  // Text color for inputs in focussed fields.
  --focus-text:                   hsl(var(--focus-hue), 10%, 80%);
  // Background color for inputs in focussed fields.
  --focus-back:                   hsl(var(--focus-hue), 15%, 15%);
  // Border color for inputs in focussed fields.
  --focus-border:                 hsl(var(--focus-hue), 30%, 45%);
  // Border color for inputs in focussed fields.
  --focus-ring-border:            hsla(var(--focus-hue), 40%, 50%, var(--focus-ring-opacity));
  // Color of gap between border and ring.
  --focus-gap-border:             hsl(var(--focus-hue), 10%, 5%);
  // Color for labels in focussed fields.
  --focus-label-text:             hsl(var(--focus-hue), 40%, 70%);
  // Text color for prefix/suffix elements in focussed fields.
  --focus-prefix-text:            hsl(var(--focus-hue), 20%, 60%);
  // Background color for prefix/suffix elements in focussed fields.
  --focus-prefix-back:            hsl(var(--focus-hue), 25%, 30%);
  // Color for input placeholder text in focussed fields.
  --focus-placeholder-text:       hsl(var(--focus-hue), 15%, 50%);

  /* Valid Field State */
  // Text color for inputs in valid fields.
  --valid-text:                   hsl(var(--valid-hue), 5%, 65%);
  // Background color for inputs in valid fields.
  --valid-back:                   hsl(var(--valid-hue), 10%, 15%);
  // Border color for inputs in valid fields.
  --valid-border:                 hsl(var(--valid-hue), 15%, 40%);
  // Border color for valid inputs in focussed fields.
  --valid-ring-border:            hsla(var(--valid-hue), 40%, 50%, var(--valid-ring-opacity));
  // Color of gap between border and ring.
  --valid-gap-border:             hsl(var(--valid-hue), 10%, 5%);
  // Color for labels in valid fields.
  --valid-label-text:             hsl(var(--valid-hue), 10%, 50%);
  // Text color for prefix/suffix elements in valid fields.
  --valid-prefix-text:            hsl(var(--valid-hue), 10%, 50%);
  // Background color for prefix/suffix elements in valid fields.
  --valid-prefix-back:            hsl(var(--valid-hue), 20%, 20%);
  // Color for input placeholder text in valid fields.
  --valid-placeholder-text:       hsl(var(--valid-hue), 10%, 35%);
  // Successful validation message displayed under field input
  --valid-help-text:              hsl(var(--valid-hue), 60%, 40%);

  /* Invalid Field State */
  // Text color for inputs in invalid fields.
  --invalid-text:                 hsl(var(--invalid-hue), 5%, 65%);
  // Background color for inputs in invalid fields.
  --invalid-back:                 hsl(var(--invalid-hue), 10%, 15%);
  // Border color for inputs in invalid fields.
  --invalid-border:               hsl(var(--invalid-hue), 30%, 45%);
  // Border color for invalid inputs in focussed fields.
  --invalid-ring-border:          hsla(var(--invalid-hue), 60%, 50%, var(--invalid-ring-opacity));
  // Color of gap between border and ring.
  --invalid-gap-border:           hsl(var(--invalid-hue), 10%, 5%);
  // Color for labels in invalid fields.
  --invalid-label-text:           hsl(var(--invalid-hue), 15%, 55%);
  // Text color for prefix/suffix elements in invalid fields.
  --invalid-prefix-text:          hsl(var(--invalid-hue), 10%, 50%);
  // Background color for prefix/suffix elements in invalid fields.
  --invalid-prefix-back:          hsl(var(--invalid-hue), 20%, 20%);
  // Color for input placeholder text in invalid fields.
  --invalid-placeholder-text:     hsl(var(--invalid-hue), 10%, 40%);
  // Error message displayed under field input
  --invalid-help-text:            hsl(var(--invalid-hue), 70%, 60%);

  /* Disabled Field State */
  // Text color for inputs in disabled fields.
  --disabled-text:                hsl(var(--disabled-hue), var(--disabled-sat), 40%);
  // Background color for inputs in disabled fields.
  --disabled-back:                hsl(var(--disabled-hue), var(--disabled-sat), 25%);
  // Border color for inputs in disabled fields.
  --disabled-border:              hsl(var(--disabled-hue), var(--disabled-sat), 40%);
  // Color for labels in invalid fields.
  --disabled-label-text:          hsl(var(--disabled-hue), var(--disabled-sat), 45%);
  // Text color for prefix/suffix elements in disabled fields.
  --disabled-prefix-text:         hsl(var(--disabled-hue), var(--disabled-sat), 60%);
  // Background color for prefix/suffix elements in disabled fields.
  --disabled-prefix-back:         hsl(var(--disabled-hue), var(--disabled-sat), 30%);
  // Color for input placeholder text in disabled fields.
  --disabled-placeholder-text:    hsl(var(--disabled-hue), var(--disabled-sat), 45%);
  // Error message displayed under field input
  --disabled-help-text:           hsl(var(--disabled-hue), var(--disabled-sat), 50%);

  /* Errors panel */
  // Text color for errors
  --errors-text:                  hsl(var(--errors-hue), 20%, 70%);
  // Background color for errors.
  --errors-back:                  hsl(var(--errors-hue), 30%, 15%);
  // Color for errors border
  --errors-border:                hsl(var(--errors-hue), 60%, 35%);
  // Color for errors title
  --errors-title-text:            hsl(var(--errors-hue), 20%, 70%);
  // Color for labels in errors
  --errors-label-text:            hsl(var(--errors-hue), 80%, 70%);

  /* Fieldset */
  // Background color for fieldset
  --fieldset-back:              rgba(255, 255, 255, 0.05);

  /* Fieldset legend */
  // Text color for fieldset legend
  --legend-text:                  hsl(var(--brand-hue), 10%, 70%);
  // Background color for fieldset legend
  --legend-back:                rgba(255, 255, 255, 0.15);

  /* Button Variables */
  // Default button text color
  --button-text:                  hsl(var(--button-hue), 10%, 95%);
  // Default button background color
  --button-back:                  hsl(var(--button-hue), 45%, 40%);
  // Default button border color
  --button-border:                hsl(var(--button-hue), 45%, 40%);
  // Color of gap between border and ring.
  --button-gap-border:            hsl(var(--button-hue), 10%, 5%);

  // Reset button text color
  --reset-text:                   hsl(var(--button-hue), 60%, 90%);
  // Reset button background color
  --reset-back:                   hsl(var(--button-hue), 5%, 30%);
  // Reset button border color
  --reset-border:                 hsl(var(--button-hue), 10%, 40%);
  // Border color for focussed reset button.
  --reset-ring-border:            hsla(var(--button-hue), 15%, 45%, var(--button-ring-opacity));
  // Color of gap between border and ring.
  --reset-gap-border:             hsl(var(--button-hue), 10%, 5%);

  /* Debug variables */
   // Background color for debug component
  --debug-back:                   hsl(var(--debug-hue), 2%, 15%);
   // Border color for debug component
  --debug-border:                 hsl(var(--debug-hue), 10%, 35%);
  // Text color for inset debugging panels
  --debug-panel-text:             hsl(var(--debug-hue), 20%, 85%);
  // Background color for inset debugging panels
  --debug-panel-back:             hsl(var(--debug-hue), 5%, 20%);
  // Title color for inset debugging panels
  --debug-panel-title-text:       hsl(var(--debug-hue), 90%, 95%);
}`,Le=T(Ae),Ye=()=>n("div",{children:[e("h1",{children:"CSS Variables - Dark Mode"}),n("p",{className:"intro",children:["These are the modified values that override the"," ",e(b,{to:"/styling/css-defaults",text:"default CSS variable values"})," ","in dark mode."]}),e(m,{vars:Le}),e(f,{uri:"css-dark"})]}),Je=()=>n(M,{children:[e(c,{path:"",exact:!0,element:e(A,{})}),e(c,{path:"forms",element:e(L,{})}),e(c,{path:"fields",element:e(Y,{})}),e(c,{path:"css-classes",element:e(se,{})}),e(c,{path:"css-variables",element:e(ne,{})}),e(c,{path:"css-defaults",element:e(Pe,{})}),e(c,{path:"css-dark",element:e(Ye,{})}),e(c,{path:"sass-variables",element:e(K,{})}),e(c,{path:"markup",element:e(Me,{})})]});export{Je as default};

import React from 'react'
import { imgUrl } from '../site/Utils.js'
import { ReactComponent as ReactFormula } from '../svg/react-formula.svg'
import Link from '../site/Link.jsx'

const Home = () =>
  <div className="home">
    <h1>@abw/react-formula</h1>
    <div className="pic-side">
      <div className="logo">
        <ReactFormula/>
      </div>
      <div className="blurb">
        <p className="intro">
          <code className="code">react-formula</code> is yet another React
          form component library.
        </p>
        <p className="subintro">
          I know what you&apos;re thinking.
          What does the World need with another React form library?
          What makes this different, better, and/or worse than all the
          other form libraries?  Will this guy do my homework for me?
          Why do we exist?  What is the meaning of life? Where did I leave
          my car keys? And what is it with all the badgers?
        </p>
      </div>
    </div>
    <p className="subintro">
      None of these questions will be answered, at least not directly.
      You can read the copious documentation provided here if you want to
      find out more.  Or don&apos;t.  It makes no difference to me.  Seriously,
      I&apos;m not looking to convince you that this is any better or worse
      than any other form library.  I&apos;m not interested in attracting new
      users or changing the world.  Been there, done that, burned out.
    </p>
    <p className="subintro">
      I wrote this library to help me do my job and make the process of
      working with forms less painful than I found it using other modules.
      It&apos;s Open Source and you can use it if you want to for <b>free</b>.
      Furthermore, you have full access to the source code which you want
      adapt if you need to.  You don&apos;t owe me anything.
    </p>
    <div className="warning">
      <h3>WARNING - THIS IS A WORK IN PROGRESS</h3>
      <p>
        Do not use this library unless you like living dangerously.
      </p>
      <p>
        It&apos;s in the process of being re-written and it&apos;s special.
        Look... see... still got the uh... the ol&apos; tagger on it... see...
        never even played it... Don&apos;t touch it!  Don&apos;t touch it!
        No one... no one... no!  Don&apos;t touch it. Don&apos;t point, even.
        No.  It can&apos;t be played... never... I mean...
      </p>
      <p>
        Don&apos;t even
        look at it.  You&apos;ve seen enough of that one.
      </p>
    </div>
    <p className="subintro">
      Still with me?  OK then, but proceed at your own risk.
    </p>
    <div>
      <ul className="large menu">
        <li>
          <Link to="/introduction">Getting Started - installing the library and importing the styles</Link>
        </li>
        <li>
          <Link to="/tutorial">Tutorial - a guided walk-through of the features</Link>
        </li>
        <li>
          <Link to="/components">Components - detailed documentation for each of the components</Link>
        </li>
        <li>
          <Link to="/inputs">Input Types - further information about the different types of input</Link>
        </li>
        <li>
          <Link to="/customising">Customising - adapting existing modules and adding your own</Link>
        </li>
        <li>
          <Link to="/styling">Styling - changing the default styles</Link>
        </li>
      </ul>
    </div>
    <div className="badger">
      <img src={imgUrl('badger.svg')} alt="badger"/>
      <div className="caption">
        Built by Badgers
      </div>
    </div>
  </div>

export default Home
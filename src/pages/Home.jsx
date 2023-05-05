import React from 'react'
import { imgUrl } from '../site/Utils.js'
import { ReactComponent as Github } from '../svg/github.svg'
import Link from '../site/Link.jsx'

const Home = () =>
  <div className="home">
    <h1>@abw/react-formula</h1>
    <a href="https://github.com/abw/react-formula" className="github">
      <Github/>
    </a>
    <div className="pic-side">
      <img src={imgUrl('react-formula.svg')}/>
      <div className="blurb">
        <p className="intro">
          <code className="code">react-formula</code> is yet another React
          form component library.
        </p>
        <p className="subintro">
          Yes, I know, there are plenty of other form libraries out there.
          Some of them are good, some are excellent, and some are not so good.
          This one isn&apos;t necessarily any better or worse than any other one.
          At best it&apos;s just a bit <Link to="/why" text="different"/>.
        </p>
        <p className="subintro">
          Should you use it?  Probably not.
          If you haven&apos;t tried it then{' '}
          <a href="https://final-form.org/react">React Final Form</a> is
          definitely one of the better existing form libraries.  I&apos;d
          recommend you start there.  Seriously, I&apos;m not looking to attract
          new users or change the world.  Been there, done that, burned out.
        </p>
      </div>
    </div>
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
    <p className="intro">
      Still with me?  OK then, but proceed at your own risk.
    </p>
    <div>
      <ul className="large menu">
        <li><a href="getting-started">Getting Started</a></li>
        <li><a href="why">Why Does This Exist?</a></li>
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
import React from 'react'
import { imgUrl } from '../site/Utils.js'

const Home = () =>
  <div className="home">
    <h1>@abw/react-formula</h1>
    <a href="https://github.com/abw/react-formula" className="github">
      <img
        src="https://github.githubassets.com/favicons/favicon.svg"
        alt="Github repository"
      />
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
          At best it&apos;s just a bit <a href="why">different</a>.
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
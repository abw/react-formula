import React from 'react'
import { imgUrl } from '../site/Utils.js'
import { ReactComponent as FruitLoop } from '../svg/fruit-loop.svg'

const Why = () =>
  <div className="home">
    <h1>Why Does This Exist?</h1>
    <div className="pic-side">
      <div>
        <div className="logo">
          <FruitLoop/>
        </div>
        <div className="caption">
          Fruit by Artem Yurov from{' '}
          <a href="https://thenounproject.com/browse/icons/term/fruit/" target="_blank" rel="noreferrer" title="Fruit Icons">Noun Project</a>.
          Clipboard and loop by Andy Wardley.
        </div>
      </div>
      <div className="blurb">
        <p className="intro">
          <code className="code">react-formula</code> is yet another React
          form component library.
        </p>
        <p className="subintro">
          I know what you&apos;re thinking.  Is this guy fruit loopy?
          What does the World need with another React form library?
          What makes this different, better, and/or worse than all the
          other form libraries?  Will this guy do my homework for me?
          Why do we exist?  What is the meaning of life?
          Where did I leave my car keys?
          And what is it with all the badgers?
        </p>
        <p className="subintro">
          All these questions will be answered and more.  Well, OK, maybe not
          all of them.  But perhaps I might be able to explain why I wrote
          this library.
        </p>
      </div>
    </div>
    <h2>Buzzword Bingo</h2>
    <p className="intro">
      Here&apos;s the TL;DR about what this library aims to achieve.
    </p>
    <ul>
      <li>Simplicity</li>
      <li>Consistency</li>
      <li>Maintainability</li>
      <li>Flexibility</li>
      <li>Extensibility</li>
      <li>Reliability</li>
      <li>Security</li>
      <li>Modularity</li>
      <li>Accessibility</li>
      <li>Presentability</li>
      <li>Efficiency</li>
    </ul>

    <h2>Am I Fruit Loopy?</h2>
    <p>
      Yes, probably.  But I had my reasons.
    </p>
    <p>
      So why did I write it?  Well, it started out a few years back when the
      state of the art in form libraries wasn&apos;t quite where it is today.
      React 16.3 had just been released with its shiny new contexts and I
      thought it might be a better way to build a form library than what we
      had at the time.  So I did and it turned out pretty well.  It was
      designed by me, for me, and unsurprisingly it met my particular needs
      particularly well.  It may not meet yours.
    </p>
    <p>
      Over the years I&apos;ve built a <i>lot</i> of forms with it for
      various different customers.  I don&apos;t much fancy the idea of having
      to re-write hundreds of forms that already work Just Fine™ and I
      don&apos;t imagine my customers would want to pay me to do it either.
      So I still use it, and have occasional bursts of development/maintenance
      where I add new features, clean up ugly bits of code, fix minor bugs
      or limitations that have been annoying me for a while, or update the
      documentation and examples.  That&apos;s what I&apos;m doing right now,
      as it happens.
    </p>
    <p>
      For the last few years it&apos;s been an integral part
      of my <a href="https://github.com/abw/badger-ui">badger-ui</a> library
      but I&apos;m now trying to break things up a little bit and extract some
      of the reusable functionality into different modules.  So that&apos;s
      how we got here.
    </p>
    <p>
      But the best reason of all is that I built it because I <i>wanted</i> to.
      I like writing software.  I like solving problems.  Sometimes that means
      spending my weekends re-inventing wheels that happen to fit my car a
      bit better than all the other wheels out there.  That&apos;s all the
      justification I need.
    </p>
    <h2>Why I Like This Library</h2>
    <ul>
      <li>
        Above all else, <b>simplicity</b>.  Building a form with{' '}
        <code>react-formula</code> should be <i>at least</i> as easy as
        defining a Vanilla HTML form, and ideally, easier.
        I don&apos;t want to have to build every field from a dozen different
        components to include a label, input, validation message, and so on.
      </li>
      <li>
        Closely related to that is <b>consistency</b>.
        In the vast majority of cases I want all my forms and fields to
        look the same and conform to whatever branding and/or style guide
        I&apos;ve got in place.  I don&apos;t mind spending a bit of time up
        front to get everything looking right, but after that I just want to
        &quot;push a button&quot; and get the same results every time with the
        minimum of fuss.
      </li>
      <li>
        And that brings us on to <b>maintainability</b>.  The less markup
        I have to write, the less I have to maintain, and the easier it will
        be to do so.  If the client or a designer decides they want all the
        form fields to have the label in a different place, be aligned
        differently, have more padding, or something else, then I want to be
        able to change that in a single place.  It might mean changing
        some CSS, re-defining a style, or updating a single field layout
        component.  But I certainly don&apos;t want to have to go and edit
        every field in every form to make the change.
      </li>
      <li>
        Of course there are times when you want to do something a bit different,
        so <b>flexibility</b> is also important.  It&apos;s good to have a
        default layout for <i>most</i> of your form fields, but you also need
        to be able to switch something else in for those special cases.
        This should be easy, not hard.
      </li>
      <li>
        <b>Extensibility</b> is also important for those times when there
        isn&apos;t something available off-the-shelf and you need to get your
        hands dirty and write a custom component.  Maybe you need a custom
        autocomplete component or search widget.  Maybe you need to include
        Recaptcha validation, or something else that requires aynchronous
        calls to an API.  I don&apos;t know what you might need.  I can&apos;t
        even predict what I might need this time next week.  So it&apos;s
        important that the library exposes enough of the internal workings to
        allow you to plug new things in.  It might not be easy, but it should
        be possible.
      </li>
      <li>
        None of that would be possible without <b>reliability</b>.  We need to
        be able to trust the library to &apos;Do The Right Thing&apos; and
        that means it has to be well tested.
      </li>
      <li>
        Another concern is <b>security</b>. It supports client-side and
        server-side validation.  If for some reason an invalid input gets past
        the client-side validation and generates an angry response from the
        server then it can update the form to display the errors and highlight
        the invalid field(s).
      </li>
      <li>
        And talking of concerns, we like to separate them, so <b>modularity</b>{' '}
        is important.  You should be able to define the schema for a form and
        all of its fields (including validation) in a single place, possibly
        away from the markup used to render the form.  Being able to separate
        the &quot;logic&quot; of a form from the presentational aspects make
        it easier to update both in isolation.
      </li>
      <li>
        TODO: <b>Accessibility</b> - WAI-ARIA compliance (although there&apos;s
        still a bit of work to be done there).
      </li>
      <li>
        Functionality is paramount, but we also care about <b>presentability</b>.
        It comes with a default stylesheet that provides reasonable defaults
        for styling different form components and all their states (focussed,
        valid, invalid, disabled, etc).  It&apos;s written using SASS and almost everything is styled
        using variables that you can easily change.  There&apos;s a single
        variable that you can set to change the basic theme colour to match
        your brand so you can get up and running really quickly.  As and when
        you need to change styles, add new components, or make other changes
        then you generally can with the minimum of fuss.
      </li>
      <li>
        And last, but not least, <b>efficiency</b>.  The library is
        comparatively small and simple (less than 10kB for the compressed
        bundle at the time of writing). It only works with modern (v18+)
        versions of React and there are no plans to port it to other web
        frameworks.  It doesn&apos;t set out to please all of the people
        all of the time.  Rather, it is designed to please me, most of the
        time, and as such it may not have (and may never have) all the
        features that other people might want.  You are, of course, free to
        go and write your own form library.
      </li>
    </ul>
    <div className="badger">
      <img src={imgUrl('badger.svg')} alt="badger"/>
      <div className="caption">
        Why am I here?
      </div>
    </div>
  </div>

export default Why


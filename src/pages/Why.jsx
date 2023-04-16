import React from 'react'
import { imgUrl } from '../site/Utils.js'

const Why = () =>
  <div className="home">
    <h1>Why Does This Exist?</h1>
    <div className="pic-side">
      <div>
        <img src={imgUrl('fruit-loop.svg')}/>
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
        It allows you to define the schema for your forms and all their
        fields in a single place, away from the markup.  I like being able
        to separate the &quot;logic&quot; of my forms from the presentational
        aspects.  It make it easier to update both.  Separation of concerns
        and all that.
      </li>
      <li>
        Given a set of form fields it can (usually) automatically render the
        whole form without any further intervention.  If you&apos;ve got a
        text field with a label, a validation function and some other details
        then you just need to say <i>where</i> you want the field and it&apos;ll
        render everything for you.  I <i>usually</i> want all my form fields
        to look the same.  I don&apos;t mind spending a bit of time up front
        setting up the styles, or working with a designer to get everything
        just right. But after that I just want to &quot;push a button&quot;
        and get the same results every time with the minimum of fuss.  I
        most certainly do <b>NOT</b> want to have to write out the markup
        for every single field, label, error message, and so on.  Nor do I
        want to have to go and update all that markup when the designer or
        client decides they want it done a bit different.
      </li>
      <li>
        You can define custom layouts for fields, or entire forms so you&apos;re
        not limited to using the defaults.  You can also define custom field
        inputs for those times when you want to do something other than get
        some text input, offer a checkbox or pull-down select list.  For
        example: integrating autocomplete fields, search boxes with
        asynchronous API calls, Recaptcha inputs, and so on.
      </li>
      <li>
        For those times when you want to take the wheel you can.  It supports
        the usual &quot;render-prop&quot; approach so you can take full
        responsibility for rendering a form, or individual fields inside it.
      </li>
      <li>
        It supports client-side and server-side validation.  If for some
        reason an invalid input gets past the client-side validation and
        generates an angry response from the server then it can update the
        form to display the errors and highlight the invalid field(s).
      </li>
      <li>
        It comes with a default stylesheet that looks reasonable out of the
        box.  It&apos;s written using SASS and almost everything is styled
        using variables that you can easily change.  There&apos;s a single
        variable that you can set to change the basic theme colour to match
        your brand so you can get up and running really quickly.  As and when
        you need to change styles, add new components, or make other changes
        then you generally can with the minimum of fuss.
      </li>
      <li>
        It&apos;s simple, reasonably efficient and small (less than 4kB for
        the compressed bundle at the time of writing).  It doesn&apos;t set
        out to please all of the people all of the time.  Rather, it is
        designed to please me, most of the time, and as such it may not
        have (and may never have) all the features that other people might
        want.  So in that sense, it is opinionated and selfish software.
        But that&apos;s just how I roll these days.  I&apos;m more than
        happy to share it with the world for other people to benefit from,
        just as long as they understand what they&apos;re getting for the
        money (or lack of it).
      </li>
    </ul>
    <div className="badger">
      <img src="/badger3-bw.svg" alt="badger"/>
      <div className="caption">
        Why am I here?
      </div>
    </div>

  </div>

export default Why


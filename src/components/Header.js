import React from 'react'

const Header = (props) => {
  return (
    <header>
      <h1>{props.subject}</h1>
      <h3>
        <span
          role="img"
          aria-label={`emoji of ${props.emojiNoun}`}
        >
          {props.emoji}
        </span>
      </h3>
    </header>
  )
}

export default Header

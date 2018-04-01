import React from 'react'
import PropTypes from 'prop-types'

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

Header.propTypes = {
  emoji: PropTypes.string.isRequired,
  emojiNoun: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
}

export default Header

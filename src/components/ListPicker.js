import React from 'react'

const ListPicker = () => {
  return (
    <React.Fragment>
      <h2>please enter a list</h2>
      <form className="list-selector">
        <input type="text" required placeholder="Learning List Subject" />
        <button type="submit">start</button>
        <span
          role="img"
          aria-label="emoji of clapperboard"
        >
          🎬
        </span>
      </form>
    </React.Fragment>
  )
}

export default ListPicker

import React from 'react'

const ListPicker = () => {
  return (
    <React.Fragment>
      <h2>please enter a list</h2>
      <form className="list-selector">
        <input type="text" required placeholder="List Name" />
        <button type="submit">start</button>
      </form>
    </React.Fragment>
  )
}

export default ListPicker

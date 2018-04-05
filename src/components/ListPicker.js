import React from 'react'
import { getFunName } from '../helpers'

class ListPicker extends React.Component {
  listInput = React.createRef()

  goToList = (event) => {
    event.preventDefault()
    // get text from input
    const listName = this.listInput.current.value
    // change page to input
    this.props.history.push(`/list/${listName}`)
  }

  render() {
    return (
      <React.Fragment>
        <h2>please enter a list</h2>
        <form className="list-selector" onSubmit={this.goToList}>
          <input
            type="text"
            ref={this.listInput}
            required
            placeholder="Learning List Subject"
            defaultValue={getFunName()}
          />
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
}

export default ListPicker

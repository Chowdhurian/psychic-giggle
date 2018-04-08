import React from 'react'
import { formatLength } from '../helpers'

const Item = (props) => {
  const {
    name,
    tags,
    status,
    link,
    load,
    length,
    medium,
  } = props.item

  const isComplete = status === 'complete'

  const styleComplete = {
    textDecoration: 'line-through',
  }

  const styleIncomplete = {
    textDecoration: 'none',
  }

  const handleChange = (event) => {
    props.markItem(props.index, event)
  }

  return (
    <React.Fragment>
      <form>
        <input
          type='checkbox'
          id={name}
          value={status}
          onChange={handleChange}
        />
        <label htmlFor={name}>
          <a href={link} style={isComplete ? styleComplete : styleIncomplete}>{name}</a>
        </label>
      </form>
      <div>
        <span>{load}</span>
        <span>{medium}</span>
        <span>{formatLength(length)}</span>
      </div>
      <div>
        {Object.keys(tags).map(key => <span key={key}>{tags[key]}</span>)}
      </div>
    </React.Fragment>
  )
}

export default Item

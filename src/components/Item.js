import React from 'react'
import { formatLength } from '../helpers'

const Item = (props) => {
  const {
    name,
    tags,
    // status,
    link,
    load,
    length,
    medium,
  } = props.item

  return (
    <React.Fragment>
      <form>
        <input
          type='checkbox'
          id={name}
          // checked={props.item.status === 'incomplete'}
        />
        <label htmlFor={name}>
          <a href={link}>{name}</a>
        </label>
      </form>
      <div>
        <span>{load}</span>
        <span>{medium}</span>
        <span>{formatLength(length)}</span>
      </div>
      <div>
        {Object.keys(tags).map(key => <span>{tags[key]}</span>)}
      </div>
    </React.Fragment>
  )
}

export default Item

import React from 'react'

const Item = (props) => {
  return (
    <form>
      <input
        type='checkbox'
        id={props.item.name}
        // checked={props.item.status === 'incomplete'}
      />
      <label htmlFor={props.item.name}>{props.item.name}</label>
    </form>
  )
}

export default Item

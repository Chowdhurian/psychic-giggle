import React from 'react'
import Item from './Item'

const TodoList = (props) => {
  return (
    <div>
      {
        Object.keys(props.items).map((key) => {
          return (
            <Item
              key={key}
              index={key}
              item={props.items[key]}
              markItem={props.markItem}
            />
          )
        })
      }
    </div>
  )
}

export default TodoList

import React from 'react'
import PropTypes from 'prop-types'
import AddItemForm from './AddItemForm'

const Footer = (props) => {
  return (
    <React.Fragment>
      <div className='footer'>footer!</div>
      <AddItemForm addItem={props.addItem} />
      <button onClick={props.loadCoreItems}>load core items</button>
    </React.Fragment>
  )
}

Footer.propTypes = {
  addItem: PropTypes.func.isRequired,
  loadCoreItems: PropTypes.func.isRequired,
}

export default Footer

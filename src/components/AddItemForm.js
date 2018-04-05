import React from 'react'

const AddItemForm = (props) => {
  const nameRef = React.createRef()
  const statusRef = React.createRef()
  const linkRef = React.createRef()
  const loadRef = React.createRef()
  const lengthRef = React.createRef()
  const mediumRef = React.createRef()

  const createItem = (event) => {
    // stop the form from submitting
    event.preventDefault()
    // get the inputs
    const item = {
      name: nameRef.current.value,
      status: statusRef.current.value,
      link: linkRef.current.value,
      load: loadRef.current.value,
      length: parseFloat(lengthRef.current.value),
      medium: mediumRef.current.value,
    }
    // update the state
    props.addItem(item)
    // refresh the form
    event.currentTarget.reset()
  }

  return (
    <form onSubmit={createItem}>
      <input
        name='name'
        type='text'
        ref={nameRef}
        placeholder='name'
      />
      <input
        name='status'
        type='checkbox'
        ref={statusRef}
        placeholder='statusRef'
      />
      <input
        name='link'
        type='text'
        ref={linkRef}
        placeholder='link'
      />
      <select
        name='load'
        type='text'
        ref={loadRef}
        placeholder='load'
      >
        <option value='light'>light</option>
        <option value='heavy'>heavy</option>
      </select>
      <input
        name='length'
        type='text'
        ref={lengthRef}
        placeholder='length'
      />
      <select
        name='medium'
        type='text'
        ref={mediumRef}
        placeholder='medium'
      >
        <option value='text'>text</option>
        <option value='audio'>audio</option>
        <option value='submit'>video</option>
        <option value='interactive'>interactive</option>
      </select>
      <button type='submit'>add item</button>
    </form>
  )
}

export default AddItemForm

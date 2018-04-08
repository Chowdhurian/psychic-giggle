import React from 'react'
import Header from './Header'
import TodoList from './TodoList'
import Footer from './Footer'
import coreItems from '../core-items/core-cs-items'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      items: [],
    }

    this.addItem = (item) => {
      const items = { ...this.state.items }

      items[`fish${Date.now()}`] = item

      this.setState({ items })
    }

    this.loadCoreItems = () => {
      this.setState({ items: coreItems })
    }

    this.markItem = (key, event) => {
      const items = { ...this.state.items }

      items[key].status = event.currentTarget.value === 'complete' ? 'incomplete' : 'complete'

      this.setState({ items })
    }
  }

  render() {
    return (
      <div className='press-start-to-begin'>
        <Header subject='computer science' emoji='💻' emojiNoun='laptop' />
        <TodoList items={this.state.items} markItem={this.markItem} />
        <Footer addItem={this.addItem} loadCoreItems={this.loadCoreItems} />
      </div>
    )
  }
}

export default App

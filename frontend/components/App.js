import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        
        <ul>
          <li>walk the dog</li>
          <li>take out the trash</li>
          <li>workout</li>
        </ul>

        <form>
          <input/>
          <button>add</button>
        </form>

        <button>clear</button>

      </div>
    )
  }
}

import React from 'react'
import RandomDiv from './components/RandomDiv'

class App extends React.Component {
  state = {
    divs: []
  }

  componentDidMount() {
    let divs = []
    for (let i = 0; i < 50; i++) {
      divs.push(<RandomDiv />)
    }
    this.setState({ divs })
  }

  display = (i) => {
    if( i <= this.state.divs.length)
      setTimeout(() => this.display(++i), 10)
    else
      return this.state.divs[i]
  }

  render() {
    return (
      <div className="App">
        {this.display(0)}
      </div>
    )
  }
}

export default App
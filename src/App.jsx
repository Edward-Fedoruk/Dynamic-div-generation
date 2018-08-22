import React from 'react'
import RandomDiv from './components/RandomDiv'

class App extends React.Component {
  state = {
    divs: [],
    counter: 0,
    increment: true,
  }

  randomNumb = () => Math.round(Math.random() * 255)

  interval = () => {
    setInterval(() => {

      if(this.state.counter === 50) this.setState({ increment: false }) 
      else if( this.state.counter === 0) this.setState({ increment: true })

      this.setState( state => {
        if(this.state.increment === true)
          return {counter: state.counter + 1}
        else return {counter: state.counter - 1}
      }, () => {
        let divs = []
        for (let i = 0; i < this.state.counter; i++) {
          divs.push(<RandomDiv rand={this.randomNumb} key={i}/>)
        }
        this.setState({ divs })
      })

    }, 50)
  }

  componentDidMount() { 
    this.interval()
  }


  render() {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} className="App">
        {this.state.divs.map(div => div)}
      </div>
    )
  }
}

export default App
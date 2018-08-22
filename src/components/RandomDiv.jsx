import React from 'react'

class RandomDiv extends React.Component {
  render() {
    return (
      <div style={{
        backgroundColor: `rgb(${this.props.rand()}, ${this.props.rand()}, ${this.props.rand()})`,
        width: '100px',
        height: '100px',
        margin: '5px',
        borderRadius: '5px'
      }}>
      {/*  */}
      </div>
    )
  }
}

export default RandomDiv
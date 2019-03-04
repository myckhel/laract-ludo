import React, { Component } from 'react'

class Die extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount = () => {
    // console.log(this.props);
  }

  roll = () => {
    this.props.onClick()
  }

  render () {
    return (
      <div className={`die size-1 btn btn-light center text-dark`}>
        <h3 onClick={() => this.props.roll}>{this.props.num}</h3>
      </div>
    )
  }
}

export default Die

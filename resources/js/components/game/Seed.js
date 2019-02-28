import React, { Component } from 'react'

class Seed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inHouse: true,
      selectAble: false,
    }
  }

  componentDidMount = () => {
    this.props.onRef(this)
  }

  componentWiilUnmount = () => {
    this.props.onRef(undefined)
  }

  handleClick = () => {
    if (this.state.selectAble) {
      console.log('i am moveable');
    }
  }

  selectAble = (num) => {
    this.setState({
      selectAble: true,
    });
  }

  render () {
    return (
      <div onClick={() => this.handleClick()}
        className={`seed size-0 bg-${this.state.selectAble ? 'light btn': this.props.color}`}
      >
      </div>
    )
  }
}

export default Seed

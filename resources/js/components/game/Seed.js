import React, { Component } from 'react'

import { removeSeed, seedReferences } from '../../store/actions'
import { connect } from "react-redux";

class Seed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inHouse: true,
      selectAble: false,
    }
  }

  componentDidMount = () => {
    this.props.seedReferences(this)
    // this.props.onRef(this)
  }

  componentDidUpdate = ( props ) => {
    // console.log('componentDidUpdate', props);
  }

  seedTime = () => {
    // this.selectAble(this.props.boardState.currentRoll[0])
    // this.props.removeSeed(this.props.belongsTo)
    // this.props.seedTime = false
  }

  componentWillReceiveProps = ( nextProps ) => {
    // if (!nextProps.seedTime) {
    //   this.seedTime()
    // }
    // Object.keys(nextProps).filter(key => nextProps[key] !== this.props[key])
    // .map(key => console.log('changed', key, 'from', this.props[key], 'to', nextProps[key]) )
    // this.props.onRef(undefined)
  }

  handleClick = () => {
    if (this.state.selectAble) {
      this.props.removeSeed({side: this.props.belongsTo, position: this.props.seedPos})
      console.log(this.props);
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

const mapStateToProps = ({ boardState }) => { return { boardState } }
const mapDispatchToProps = dispatch => ({
  removeSeed: ({side, position}) => dispatch(removeSeed({side, position})),
  seedReferences: (ref) => dispatch(seedReferences(ref))
});

export default connect(mapStateToProps, mapDispatchToProps) (Seed)
// export default Seed

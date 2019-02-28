class Player {
  constructor(side) {
    // super(props)
    this.state = {
      rolled: [],
      side,
    }
  }

  roll = () => {
    this.state.rolled.push(parseInt(Math.random() * (6 - 1) + 1))
    this.state.rolled.push(parseInt(Math.random() * (6 - 1) + 1))
    return this.state.rolled
  }

  chooseNum = () => {
    return this.state.rolled[0]
  }
}

export default Player

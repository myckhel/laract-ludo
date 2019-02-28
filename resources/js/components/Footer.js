import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const style = {
      // position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      textAlign: 'center',
    }

    return (
      <footer style={style} className="jumbotron bg-dark">
        <p>© Company 2017-2018</p>
      </footer>
    )
  }
}

export default Footer;

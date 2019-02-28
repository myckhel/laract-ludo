import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.price}
          </td>
          <td>
            <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <form onSubmit={(e) => this.props.handleSubmit(e, this.props.obj.id)}>
              <input type="submit" value="Delete" className="btn btn-danger"/>
            </form>
          </td>
        </tr>
    );
  }
}

export default TableRow;

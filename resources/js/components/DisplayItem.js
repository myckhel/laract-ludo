import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import TableRow from './TableRow';

class DisplayItem extends Component {
  constructor(props) {
       super(props);
       this.state = {value: '', items: ''};

       this.tabRow = this.tabRow.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.load = this.load.bind(this);
     }
     componentDidMount(){
       document.title = "Item List"
       this.load()
     }

     load(){
       axios.get('/api/items')
       .then(response => {
         this.setState({ items: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }

     handleSubmit(event, id) {
       event.preventDefault();
       if (confirm('Are you sure you want to delete task')) {
         let uri = `/api/items/${id}`;
         axios.delete(uri).then((res) => {
           this.load();
         });
       }
     }

     tabRow(){
       if(this.state.items instanceof Array){
         return this.state.items.map((object, i) => {
             return <TableRow handleSubmit={this.handleSubmit} obj={object} key={i} />;
         })
       }
     }

  render(){
    return (
      <div>
        <h1>Items</h1>

        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link className="btn btn-success" to="/add-item">Create Item</Link>
          </div>
        </div><br />

        <table className="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Item Name</td>
                <td>Item Price</td>
                <td>Actions</td>
            </tr>
            </thead>
            <tbody>
              {this.tabRow()}
            </tbody>
        </table>
    </div>
    )
  }
}
export default DisplayItem;

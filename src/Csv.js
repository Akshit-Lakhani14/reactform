import React, { Component } from 'react'
import Axios from 'axios';


export class Csv extends Component {
   
    
      handleSubmit = () => {
          
            
        alert(`A form was submitted:  ${this.props.forms}`);
          Axios.post("http://localhost:1002/store-data", {
            forms:this.props.forms
        }).then((response) => {
            console.log(response);
        });
       
    }
  render() {
    return (
      <div className="mb-3 mx-5">
        <button onClick={this.handleSubmit} className='btn btn-success'>Get CSV</button>
      </div>
    )
  }
}

export default Csv

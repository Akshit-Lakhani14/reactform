import React, { Component } from 'react'
import Axios from 'axios';
import fileDownload from 'js-file-download';


export class Csv extends Component {
   
    
      handleSubmit = () => {
          
            
        alert(`A form was submitted:  ${this.props.forms}`);
          Axios.post("http://localhost:1002/store-data", {
            forms:this.props.forms
        }).then((response) => {
            console.log(response);
              fileDownload(response.data, "destination.csv")
        });
        Axios.get('http://localhost:1002/download')
        .then((res)=> {
          console.log(res.data);
          fileDownload(res.data,"destination.csv")
        })
       
    }
 
     

  render() {
    return (
      <div className="mb-3 mx-5">
        <button onClick={this.handleSubmit} className='btn btn-success'>Get CSV</button><br />
      </div>
    )
  }
}

export default Csv

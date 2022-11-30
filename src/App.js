import React,{useState, useEffect} from 'react'
import { View } from './components/View';
import Csv from './Csv';
import './App.css'

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('forms');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  const [forms, setforms]=useState(getDatafromLS());
  // input field states
  const [number, setNumber]=useState('');
  const [name, setName]=useState('');
  const [quantity, setQuantity]=useState('');
  const [price, setPrice]=useState('');
  const [amount, setAmount]=useState('');


  // form submit event
  const handleAddformSubmit=(e)=>{
    e.preventDefault();
    if(number !== "" && name !== "" && quantity !== "" && price !=="" && amount !==   ""){
    // creating an object
    let form={
      number,
      name,
      quantity,
      price,
      amount
    }
    
    setforms([...forms,form]);
    setNumber('');
    setName('');
    setQuantity('');
    setPrice('');
    setAmount('');
  }
  }


  



  // delete form from LS
  const deleteform=(number)=>{
    const filteredforms=forms.filter((element,index)=>{
      return element.number !== number
    })
    setforms(filteredforms);
  }

  const handleasesort = () => {
    const sortedData = [...forms].sort((a,b)=>{
      return b.number > a.number ? 1 : -1
    })
    setforms(sortedData)
  }
  const handledecsort = () => {
    const sortedData = [...forms].sort((a,b)=>{
      return a.number > b.number ? 1 : -1
    })
    setforms(sortedData)
  }

  const handleEnter = (event) => {
    if (event.key.toLowerCase() === "enter") {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      if(index < 3){
      form.elements[index + 1].focus();
      event.preventDefault();
    }else{
      form.elements[0].focus();
    }
    }
  };
  // saving data to local storage
  useEffect(()=>{
    setAmount(quantity*price)
    localStorage.setItem('forms',JSON.stringify(forms));
  },[forms,price,quantity])

  return (
    <div className='mb-1 mx-5'>
      <h1>Form</h1>
      <div className='main'>

        <div className='form-container'>
        <form className="row g-3" onSubmit={handleAddformSubmit}>
        <div className="mb-1 mx-5">
    <label htmlFor="inputNumber" className="form-label">Index No.</label>
    <input type="Number" onKeyDown={handleEnter} onChange={(e)=>setNumber(e.target.value)} value={number} className="form-control" id="inputNumber" />
  </div>
  <div className="mb-1 mx-5">
    <label htmlFor="inputName" className="form-label">Name</label>
    <input type="name" onKeyDown={handleEnter} onChange={(e)=>setName(e.target.value)} value={name} className="form-control" id="inputName"/>
  </div>
  <div className="mb-1 mx-5">
    <label htmlFor="inputDate" className="form-label">Quantity</label>
    <input type="number" onKeyDown={handleEnter} onChange={(e)=>setQuantity(e.target.value)} value={quantity} className="form-control" id="inputDate"/>
  </div>

  <div className="mb-1 mx-5">
    <label htmlFor="inputAge" className="form-label">Price</label>
    <input type="number" onKeyDown={handleEnter} onChange={(e)=>setPrice(e.target.value)} value={price} className="form-control" id="inputAge" />
  </div>
  <div className="mb-1 mx-5">
    <label htmlFor="inputAge" className="form-label">Amount</label>
    <input type="number" onChange={(e)=>setAmount(e.target.value)} value={quantity*price} className="form-control" id="inputAge" />
  </div>
 
  
  <div className="mb-1 mx-5">
  </div>
  <div className="mb-1 mx-5">
    <button type="submit" className="btn btn-primary">Add</button>
  </div>
  

</form>
<div className="mb-3 mx-5">
    <button onClick={handleasesort} className="btn btn-primary">Sort Asending </button>
  </div>
  <div className="mb-3 mx-5">
    <button onClick={handledecsort} className="btn btn-primary">Sort Desending </button>
  </div>
  <Csv forms={forms}/>

        </div>

        <div className='view-container'>
          {forms.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Index No.</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>price</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <View forms={forms} deleteform={deleteform}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setforms([])}>Remove All</button>
          </>}
          {forms.length < 1 && <div>No Forms are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default App

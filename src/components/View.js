import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({forms,deleteform}) => {
    

    return forms.map(form=>(
        
        <tr key={form.id}>
        <td>{form.number}</td>
        <td>{form.name}</td>
        <td>{form.quantity}</td>
        <td>{form.price}</td>
        <td>{form.amount}</td>
        <td className='delete-btn' onClick={()=>deleteform(form.number)}>
            <Icon icon={trash}/>
        </td>          
            <td className='edit-btn'>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
             Edit
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog " >
    <div className="modal-content " style={{padding:'50px'}}>
    <form className="row g-3" >
        <div className="col-md-6">
    <label htmlFor="inputId" className="form-label">ID</label>
    <input type="text"  className="form-control" id="inputId"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email"  className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputUserName4" className="form-label">UserName</label>
    <input type="text"  className="form-control" id="inputUserName4"/>
  </div>

  <div className="col-12">
    <label htmlFor="inputAge" className="form-label">Age</label>
    <input type="text" className="form-control" id="inputAge" />
  </div>

  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>

</form>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            </td>           
        </tr>            
    
))
}

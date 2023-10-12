import React, {useState,useLayoutEffect, useEffect} from 'react'
import Topheader from "./../components/Topheader"
import axios from 'axios'
function Signup() {


 async function handleSubmit(e) {
    e.preventDefault()
    let form = new FormData(e.currentTarget)//this lets every new data from 'form e' e=be stored in variable 'form1'
    // alert(form1.get("first_name"))
    // alert(form1.get("last_name"))//these two lines of code are simply written in order to show you that the certain data has been stored in the form under the first and last name properties.
     await axios.post("https://iamimmortal8.pythonanywhere.com/signup/", form)
    .then((res) => {
      alert("acconut created successfully")
    })
    .catch((err)=> {
      for (let i in err?.response?.data)
    {
      alert(i + ": " + err?.response?.data[i])
    }
    })
  }




  return (
    <div className="signup container ">
      <Topheader/>
      {/* onChange={(e) => console.log(e.target.value)} */}
    <form className='' onSubmit={(e) => handleSubmit(e)} >
        <div className="row">

          <div className="col-md-6">
            <label htmlFor="fname" className="form-label">FirstName</label>
            <input name='first_name' id="fname" type="text" className="form-control" />
          </div>

          <div className="col-md-6">
          <label htmlFor="" className="form-label">LastName</label>
            <input name='last_name' type="text" className="form-control" />
          </div>

          <div className="col-md-6">
          <label htmlFor="" className="form-label">Username</label>
            <input name='username' type="text" className="form-control" />
          </div>

         

          <div className="col-md-6">
          <label htmlFor="" className="form-label">Phone</label>
            <input name='phone' type="text" className="form-control" />
          </div>

          <div className="col-md-6">
          <label htmlFor="" className="form-label">Email</label>
            <input name='email' type="email" className="form-control" />
          </div>

          <div className="col-md-6">
          <label htmlFor="" className="form-label">Password</label>
            <input name='password' type="password" className="form-control" />
          </div>

          <div className="col-md-6">
          <label htmlFor="" className="form-label">Photo</label>
            <input name='photo' type="file" className="form-control" />
          </div>


          <button type='submit' className="btn btn-primary btn-md mt-4 w-100">
            Signup
          </button>

          
          
        </div>
      </form>
    </div>
  )
}

export default Signup



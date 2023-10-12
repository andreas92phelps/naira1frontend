import React from 'react'
import Topheader from '../components/Topheader'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()
    let form = new FormData(e.currentTarget)//this lets every new data from 'form e' e=be stored in variable 'form1'
    // alert(form1.get("first_name"))
    // alert(form1.get("last_name"))//these two lines of code are simply written in order to show you that the certain data has been stored in the form under the first and last name properties.
    await axios.post("https://iamimmortal8.pythonanywhere.com/login/", form)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data))
        alert("Login successful")
        navigate("/")
      })
      .catch((err) => {
        if (err.response.data === "invalid login details") {
          alert("invalid credentials")
        } else {
          for (let i in err?.response?.data) {
            alert(i + ": " + err?.response?.data[i])
          }
        }
      })
  }

  return (
    <div className='login'>
      <Topheader />
      {/* onChange={(e) => console.log(e.target.value)} */}
      <form className='' onSubmit={(e) => handleLogin(e)} >
        <div className="row">

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input name='email' id="email" type="text" className="form-control" />
          </div>

          <div className="col-md-6">
            <label htmlFor="password" className="form-label">Password</label>
            <input name='password' type="text" className="form-control" />
          </div>


          <button type='submit' className="btn btn-primary btn-md mt-4 w-100">
            Login
          </button>



        </div>
      </form>
    </div>
  )


}

export default Login
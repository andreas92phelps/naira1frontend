import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimesCircle } from "react-icons/fa"
import { PiNyTimesLogoBold } from "react-icons/pi"
import { SiNewyorktimes } from "react-icons/si"
import { BsCartFill } from "react-icons/bs"
import Topheader from '../components/Topheader'
import {useEffect,useState} from 'react'
//import contents from '../fakedb'
import axios from 'axios'

function Home() {
  
  const [contents, setData] = useState([])//the 'data' is coming from the backend
  console.log(contents);

  useEffect(() => {//use effect is added here so that the code will not be repeatedly run before the page has finished loading. With this, it runs only once.

  axios.get(`https://iamimmortal8.pythonanywhere.com//getarticles/`)//this code states that as the page loads send a get request
  .then((res) => setData(res.data))
  .catch((err) => console.log(err)) //this code will 

  },[])

  return (
   <div className="home container ">

   <Topheader/>

   <div className="bottomheader my-2">
    <div className="card">
      <h5 className="text-center card-header">NAIRALAND NIGERIA FORUM</h5>
      <div className="">
        <p>
          <Link>Nairaland/General</Link>
          <Link>Politics</Link>
          <Link>Career</Link>
          <Link>Job Vacancy</Link>
          <Link>Education</Link>
          <Link>Tech</Link>
          <Link>Job</Link>
          <Link>Career</Link>
        </p>

        <p className='middle'>
          <Link>Nairaland/General</Link>
          <Link>Politics</Link>
          <Link>Career</Link>
          <Link>Job Vacancy</Link>
          <Link>Education</Link>
          <Link>Tech</Link>
          <Link>Job</Link>
          <Link>Career</Link>
        </p>

        <p>
          <Link>Nairaland/General</Link>
          <Link>Politics</Link>
          <Link>Career</Link>
          <Link>Job Vacancy</Link>
          <Link>Education</Link>
          <Link>Tech</Link>
          <Link>Job</Link>
          <Link>Career</Link>
        </p>
      </div>
    </div>
   </div>

   <div className="advert d-flex justify-content-center gap-3 ">

    <img className='img-fluid'  src="./../../advert1.jpg" alt="" />
 
    <img className='img-fluid'  src="./../../advert4.jpg" alt="" />
 
    <img className='img-fluid'  src="./../../dvert3.png" alt="" />

   </div>


    <div className="articles">
      <div className="card">

        <div className="card-header d-flex justify-content-center gap-3">
          <Link>Latest News</Link>
          <span>/</span>
          <Link>Twitter</Link>
          <span>/</span>
          <Link>Facebook</Link>
          <span>/</span>
          <Link>How To Advertise</Link>
        </div>

        <div className="card-body">
         
        {contents.map(a => (
          <Link to={`/details/${a.id}`} className='d-block text-center '>{a.title}</Link>
        ))}
       
         
        </div>


      </div>
    </div>

 
   </div>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import contents from '../fakedb'
import axios from 'axios'

function Details() {
  const [data, setData] = useState(null)
  

  console.log(data);

    const { id } = useParams()

    useEffect(() =>{

      axios.get(`https://iamimmortal8.pythonanywhere.com/getarticle/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      

    }, [id])
    


    

  return (
    <div >
         <h1 className="text-center">{data?.title}</h1> {/*the '?' means that if there is a delay in loading, wait a bit. */}
        <p  className="text-primary fs-italic" dangerouslySetInnerHTML={{__html: data?.body}}></p>
        <img src={`https://iamimmortal8.pythonanywhere.com/${data?.image}`} alt={data?.title} />
        <img src={`https://iamimmortal8.pythonanywhere.com/${data?.other}`} alt={data?.title} />
    </div>
  )
}

export default Details
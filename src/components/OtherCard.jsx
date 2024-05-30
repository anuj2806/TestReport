import React from 'react'
import {useParams} from 'react-router-dom'
const OtherCard = () => {
    const params =useParams();
  return (
    <div>{
        params.id==2?<>2222</>:params.id==3?<>333</>:<>444</>
        }
    </div>
  )
}

export default OtherCard

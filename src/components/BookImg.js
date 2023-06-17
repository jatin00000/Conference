import React from 'react'
import ConfImg from './images/9.jpg'
import './style/BookImg.css'
export default function () {
  return (
    <div className='row mb-3'>
        <div className="col-5"><img id="BookImg" src={ConfImg} alt="" /></div>
        <div className="col-7"><div id="BookDetail" className='text-right'>
            Chemical Engineering Research And Design
        </div></div>
        
        

    </div>
  )
}

import React from 'react'

export default function Modal(props) {
    return (

        <>
          <div className="">
          <button type="button" className="btn btn-dark btn-modal " data-bs-toggle="modal" data-bs-target={`#exampleModal${props.id}`}>
  View More
</button>
            </div>  


<div className="modal  fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" id={`exampleModal${props.id}`}>
  <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable ">
    <div className="modal-content o1">
      <div className="modal-header">
        
        <h2 className="modal-title o2" id="staticBackdropLabel">{props.name}</h2>
        
      

              
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-dark">
        <div className="row">
          <div className="col-md-4 ms-auto text-center">        <img className="cardimag2 rounded-circle" src={require(`${props.imag}`)}  alt="Card" />
        <p className="o3">{props.place}</p></div><div className="col-md-8 ms-auto">        <p className="he2 p-2 fs-5">{props.desc}<a href={props.know} className="link-dark" target="_blank" rel="noopener noreferrer">here</a></p>
        </div>
        </div>


      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
            </>
    )
}

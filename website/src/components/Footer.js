import React from 'react'

export default function Footer(props) {
  return (
    <>
      {props.show &&
        <div className="w-100 ">

          <footer className="bg-dark py-3 m-0 sticky-bottom" >
            <p className="text-center text-light"><hr /></p>
            <div className="row">
              <div className="col-xs-12 col-md-8">
                <p className="text-center  fs-4 mb-0 z1">Conference organizers</p>
                <p className="text-center  fs-5 mb-0 z2">Convenor:</p>
                <p className="text-center  fs-5 mb-0 z3">Dr. Jose V Parambil</p>
                <p className="text-center  fs-5 mb-0 z4">Chemical and Biochemical Engineering Department, <br />
Indian Institute of Technology Patna</p>
              </div>
              <div className="col-xs-12 col-md-4 text-center">
                <br/>
                <p className="text-center  fs-4 mb-0 z1">Links</p>
                <a target="_blank" rel="noopener noreferrer" href="https://www.iitp.ac.in/" className="text-white text-decoration-none">Institute Website</a><br />
                <a target="_blank" rel="noopener noreferrer" href="https://www.iitp.ac.in/index.php/departments/engineering-technology/chemical-and-biochemical-engineering" class="text-white text-decoration-none">Department Website</a><br />
              <br />
               
              </div>
            </div>
            <p className="text-center text-primary  fs-7 mb-0 z4">© 2022-23 IIT Patna &emsp;||&emsp;  Designed and developed by Jatin and Chandan</p>
          </footer>
        </div>
      }
    </>
  )
}

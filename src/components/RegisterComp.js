import React from 'react'
//import { useNavigate } from "react-router-dom";
export default function RegisterComp() {
//const navigate = useNavigate();
  return (
    <>
      
<div className="r6">
  <div className="r7">
    <div className="container">
        <div className="fs-2 text-left m-2 r1"><br></br>Registration Fee For Conference
        </div>
        <div className=" fs-4  m-2 r2">
          All rates are in INR and inclusive of GST.</div>
          <div className="table-responsive">        <table class="table  table-bordered border-primary fs-5">
          <caption className="r4">Registration fee includes conference kit, tea and snacks, and lunch during the conference. Accommodation is not included in the fee.</caption>
          <thead className='thead r3'>
            <tr>
              <th scope="col">Participant Category</th>
              <th scope="col">Early-Bird rate</th>
              <th scope="col">Regular rate</th>
            </tr>
          </thead>
          <tbody className="r4">
            <tr>
              <th scope="row">Students</th>
              <td>Rs. 3,500/-</td>
              <td>Rs. 4,000/-</td>
            </tr>
            <tr>
              <th scope="row">Faculty/ Academic/ Research/ Startup staff</th>
              <td>Rs. 5,500/-</td>
              <td>Rs. 6,500/-</td>
            </tr>
            <tr>
              <th scope="row">Industry participants</th>
              <td >Rs. 7,000/-</td>
              <td>Rs. 9,000/-</td>
            </tr>
          </tbody>
        </table></div>

        <div className="fs-2 text-left r1 m-2">Bundled Registration Fee for Pre-conference Workshop & Conference
        </div>
        <div className="fs-5 m-2 r2">
        (Those who register for the pre-conference workshop can attend the conference without additional registration. All rates are in INR and inclusive of GST)</div>
        <div className="table-responsive"><table class="table table-bordered border-primary fs-5">
          <caption className="r4">Registration fee includes conference kit, tea and snacks, and lunch during the workshop and conference. Accommodation is not included in the fee.</caption>
          <thead className='thead r3'>
            <tr>
              <th scope="col">Participant Category</th>
              <th scope="col">Early-Bird rate</th>
              <th scope="col">Regular rate</th>
            </tr>
          </thead>
          <tbody className="r4">
            <tr>
              <th scope="row">Students</th>
              <td>Rs. 5,000/-</td>
              <td>Rs. 6,000/-</td>
            </tr>
            <tr>
              <th scope="row">Faculty/ Academic/ Research/ Startup staff</th>
              <td>Rs. 8,000/-</td>
              <td>Rs. 10,000/-</td>
            </tr>
            <tr>
              <th scope="row">Industry participants</th>
              <td >Rs. 10,500/-</td>
              <td>Rs. 12,500/-</td>
            </tr>
          </tbody>
        </table></div>
  <div className="d-flex justify-content-around">
     {/* <div className=""><button onClick={() => navigate("/register")} class="btn btn-primary btn-lg btn-block m-2">Register</button></div> */}
     <div className="fs-5 m-2 r2">To be updated soon</div>
</div>
<br></br>
      </div>
        </div>
  </div>
    </>
  )
}

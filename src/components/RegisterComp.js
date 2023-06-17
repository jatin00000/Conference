import React from 'react'
//import { useNavigate } from "react-router-dom";
export default function RegisterComp() {
//const navigate = useNavigate();
  return (
    <>
      
<div className="">
  <div className="r7 p-3">
    <div className="container">
        <div className="REACHHEAD text-left"><br></br>Registration Fee For Conference
        </div>
        <div className="LINE1"></div>
        <div className="REACHTEXT" style={{marginTop: '10px', marginBottom: '5px'}}>
          All rates are in INR and inclusive of GST.</div>
          <div className="table-responsive">        <table class="table  table-bordered border-primary fs-5">
          <caption className="ABSTEXT2">Registration fee includes conference kit, tea and snacks, and lunch during the conference. Accommodation is not included in the fee.</caption>
          <thead className='thead  ABSTEXT3 '>
            <tr>
              <th scope="col">Participant Category</th>
              <th scope="col">Early-Bird rate</th>
              <th scope="col">Regular rate</th>
            </tr>
          </thead>
          <tbody className="ABSTEXT2">
            <tr>
              <th scope="row">Students</th>
              <td>₹ 3,500.00</td>
              <td>₹ 4,000.00</td>
            </tr>
            <tr>
              <th scope="row">Faculty/ Academic/ Research/ Startup staff</th>
              <td>₹ 5,500.00</td>
              <td>₹ 6,500.00</td>
            </tr>
            <tr>
              <th scope="row">Industry participants</th>
              <td >₹ 7,000.00</td>
              <td>₹ 9,000.00</td>
            </tr>
          </tbody>
        </table></div>

        <div className="REACHHEAD text-left r1 m-2" >Bundled Registration Fee for Pre-conference Workshop & Conference
        </div>
        <div className="LINE2" ></div>
        <div className="REACHTEXT" style={{marginTop: '10px', marginBottom: '5px'}}>
        (Those who register for the pre-conference workshop can attend the conference without additional registration. All rates are in INR and inclusive of GST)</div>
        <div className="table-responsive"><table class="table table-bordered border-primary fs-5">
          <caption className="ABSTEXT2">Registration fee includes conference kit, tea and snacks, and lunch during the workshop and conference. Accommodation is not included in the fee.</caption>
          <thead className='thead ABSTEXT3'>
            <tr>
              <th scope="col">Participant Category</th>
              <th scope="col">Early-Bird rate</th>
              <th scope="col">Regular rate</th>
            </tr>
          </thead>
          <tbody className="ABSTEXT2">
            <tr>
              <th scope="row">Students</th>
              <td>₹ 5,000.00</td>
              <td>₹ 6,000.00</td>
            </tr>
            <tr>
              <th scope="row">Faculty/ Academic/ Research/ Startup staff</th>
              <td>₹ 8,000.00</td>
              <td>₹ 10,000.00</td>
            </tr>
            <tr>
              <th scope="row">Industry participants</th>
              <td >₹ 10,500.00</td>
              <td>₹ 12,500.00</td>
            </tr>
          </tbody>
        </table></div>
     <div className="ABSTEXT2">For registration, please make your payment online via the link below and then complete the registration form.
            <br/>
            <br/>
            <div className="row text-center">
              <div className="col"><a href="#" target="_blank"><button className="ABSTEXT btn btn-light">MAKE PAYMENT</button></a></div>
              <div className="col"><a href="https://forms.office.com/r/TfFSqRjgZZ" target="_blank"><button className="ABSTEXT btn btn-light">REGISTRATION FORM</button></a></div>
            </div>
            
            
            
            <br/>
            <br/>
            For instructions, please see this document.
            </div>
    </div>
<br></br>
      </div>
        </div>

    </>
  )
}

import React from 'react'
import { useNavigate } from "react-router-dom";
export default function RegisterComp() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="fs-1 t1  text-center m-2"><br></br>Abstract Submission and Publication
        </div>
        {/* <div className=" fs-5 t2 m-2">
          The conference will offer opportunities for both oral and poster presentations to researchers. The format for abstract submission will be shared soon. Selected presentations from those who attend the conference will be invited to submit their manuscript to a reputed international journal for publication after due review process.</div>

        <div className="d-flex justify-content-around">
          <div className=""><button class="btn btn-outline-dark" onClick={() => navigate("/abstract")}>Submit Abstract</button></div>
        </div> */}
        <div className=" fs-5 t2 m-2 text-center"><br/><br/><br/>
        To be updated soon</div>
<br></br>
      </div>
    </>
  )
}

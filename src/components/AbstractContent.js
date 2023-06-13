import React from 'react'
//import { useNavigate } from "react-router-dom";
export default function RegisterComp() {
//const navigate = useNavigate();
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
        <div className=" fs-5 t2 m-2 text-center"><br/>
        The conference will offer opportunities for both oral and poster presentations to researchers. All abstracts will be published in an Abstract Booklet with ISBN and DOI (at book level). 

Selected papers presented at the conference will be invited to submit articles to a special issue in the journal Chemical Engineering Research and Design (IChemE publication in partnership with Elsevier; 4.119 Impact Factor) for publication after a due review process.
<br/>
Abstract format - download from here.
<br/>
For abstract submission and followup, use the link: https://cmt3.research.microsoft.com/ICSPT2023/
<br/>
For instructions regarding abstract submission, please see this document.
</div>
<br></br>
      </div>
    </>
  )
}

import React from "react";
import "./style/sponsors.css";

export default function Sponsors() {
  let about = [
    "Jayant Agro-Organics Ltd. is an emerging global oleochemical company with leadership in the Castor based specialty chemicals industry.",
    "",
  ];
  let links = ["http://www.jayantagro.com/", "#"];
  return (
    <div className="sponsors-container">
      <div className="themehead text-center mt-0">Our Sponsors</div>
      <div className="d-flex justify-content-center flex-wrap">
        {Array(about.length) // You can change the number of sponsor items as needed
          .fill()
          .map((_, index) => (
            <div key={index} className="p-3 sponsor-item">
              <a
                href={links[index]}
                style={{
                  backgroundImage: `url(${require(`./images/sponsors/${
                    index + 1
                  }.jpeg`)})`,
                  backgroundSize: "100% 100%",
                }}
                className="blurredBG"
                target="_blank" rel="noreferrer"
              >
                {about[index].length > 0 && (
                  <div className="parentBG">
                    <div className="content ABSTEXT ">{about[index]} <br/></div>
                    <div className="bG"></div>
                  </div>
                )}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

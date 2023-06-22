import React from "react";
import "./Compo7.css";

const Compo7 = () => {
  const foot = {
    ttitle: "Sounds interesting? Join us now!",
    btnn: "SEE ALL CURRENT OPENINGS",
  };

  return (
    <div className="fot">
      <h1>{foot.ttitle}</h1>
      <button>{foot.btnn}</button>
      <p>
        We are leaders in 13 countries: Poland, Turkey, Spain, Italy, Germany,
        Czech Republic, Portugal, Mexico, Colombia, Brazil, Argentina, Peru and
        Chile
      </p>
      <h5>www.docplanner.com © 2023</h5>
    </div>
  );
};

export default Compo7;

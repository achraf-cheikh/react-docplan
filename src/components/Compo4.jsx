import React from "react";
import "./Compo4.css";

const Compo4 = () => {
  const CompObjc = {
    title: "The world's biggest healthcare platform",
    prag: "We work from 9 offices all over the world, bringing Docplanner Group to life in 13 countries.",
  };

  const arr1 = [
    {
      ImgUrl: "https://www.docplanner.com/img/flag.png",
      titre: "Leader in 13 countries",
      pra: "Poland, Brazil, Mexico, Spain, Italy, Germany, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile",
    },
    {
      ImgUrl: "https://www.docplanner.com/img/patients.png",
      titre: "90,000,000 patients",
      pra: "visit our websites each month",
    },
  ];

  const arr2 = [
    {
      ImgUrl: "https://www.docplanner.com/img/visits.png",
      titre: "15,000,000 appointments",
      pra: "booked last month",
    },
    {
      ImgUrl: "https://www.docplanner.com/img/doctors.png",
      titre: "210,000 active doctors",
      pra: "trust our solutions",
    },
  ];

  return (
    <div className="compo4-bigdiv">
      <div className="compo4-div1">
        <h1>{CompObjc.title}</h1>
        <p>{CompObjc.prag}</p>
      </div>
      <div className="compo4-div2">
        {arr1.map((el) => (
          <div className="sous-div">
            <img src={el.ImgUrl} alt="" />
            <h1>{el.titre}</h1>
            <p>{el.pra}</p>
          </div>
        ))}
      </div>
      <div className="compo4-div3">
        {arr2.map((el) => (
          <div className="sous-div">
            <img src={el.ImgUrl} alt="" />
            <h1>{el.titre}</h1>
            <p>{el.pra}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compo4;

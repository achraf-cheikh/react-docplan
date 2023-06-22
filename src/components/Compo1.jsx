import React from "react";
import "./Comp1.css";

const Compo1 = () => {
  const data = {
    imge: "https://www.docplanner.com/img/sygnet.png",
    title: "Making the healthcare experience more human",
    par1: "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.",
    par2: "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.",
  };
  return (
    <div className="compodiv">
      <div>
        <img src={data.imge} alt="logo" />
        <h1 className="h1div">{data.title}</h1>
      </div>
      <div className="paradiv">
        <p>{data.par1}</p>
        <p>{data.par2}</p>
      </div>
    </div>
  );
};

export default Compo1;

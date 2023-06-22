import React from "react";
import "./Compo5.css";

const Compo5 = () => {
  const obb = {
    ttle1: "Improve the lives of millions.",
    ttle2: "Change yours forever.",
    paarg:
      "More than 2800 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Munich, Istanbul, Rome, Rio, Bologna, Mexico City and Curitiba, our search for great talent never stops.",
  };
  return (
    <div className="com5">
      <div>
        <h1>{obb.ttle1}</h1>
        <h1>{obb.ttle2}</h1>
      </div>
      <p>{obb.paarg}</p>
    </div>
  );
};

export default Compo5;

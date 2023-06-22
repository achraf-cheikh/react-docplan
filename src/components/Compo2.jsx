import React from "react";
import "./Compo2.css";

const Compo2 = () => {
  const tab = [
    {
      imge: "https://www.docplanner.com/icons/icon-patients.svg",
      titre: "For patients",
      para: "Find a doctor, book a visit and solve any health-related doubt",
      opti1: [
        "Choose country",
        "Argentina",
        "Brazil",
        "Chile",
        "Colombia",
        "Czech",
        "Germany",
        "Italy",
        "Mexico",
        "Peru",
        "Poland",
        "Portugal",
        "Spain",
        "Turkey",
      ],
      bgcolor: "#00ccb1",
    },
    {
      imge: "https://www.docplanner.com/icons/icon-doctors.svg",
      titre: "For doctors",
      para: "Save time managing visits and cut no-shows by half",
      opti1: [
        "choose country",
        "Argentina",
        "Brazil",
        "Chile",
        "Colombia",
        "Czech",
        "Germany",
        "Italy",
        "Mexico",
        "peru",
        "Poland",
        "Spain",
        "Turkey",
      ],
      bgcolor: "#3d83df",
    },
    {
      imge: "https://www.docplanner.com/icons/icon-clinics.svg",
      titre: "For clinics",
      para: "Deliver an exceptional patient experience in your clinic",
      opti1: [
        "2 to 20 specialists",
        "Brazil",
        "Czech",
        "Italy",
        "Mexico",
        "Poland",
        "Spain",
        "Turkey",
      ],
      opti2: [
        "More than 20 specialists",
        "Brazil",
        "Italy",
        "Mexico",
        "Poland",
        "Spain",
      ],
      bgcolor: "#1b2734",
    },
  ];
  return (
    <div className="big-container">
      {tab.map((el) => (
        <div className="contain" style={{ backgroundColor: el.bgcolor }}>
          <img src={el.imge} alt="" />
          <h1>{el.titre}</h1>
          <p>{el.para}</p>
          <select
            name=""
            id=""
            className="selec1"
            style={{ backgroundColor: el.bgcolor }}
          >
            {el.opti1.map((elm) => (
              <option value="" className="opt1">
                {elm}
              </option>
            ))}
          </select>
          {el.opti2 ? (
            <select
              name=""
              id=""
              className="selec2"
              style={{ backgroundColor: el.bgcolor }}
            >
              {el.opti2.map((elm) => (
                <option value="" className="opt1">
                  {elm}
                </option>
              ))}
            </select>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Compo2;

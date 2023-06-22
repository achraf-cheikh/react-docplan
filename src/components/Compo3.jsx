import React from "react";
import "./Comp3.css";

const Compo3 = () => {
  const data = {
    title: "We are a global company with local culture",
    TabTag: [
      "https://media.discordapp.net/attachments/1093497830917816403/1120717939209945138/image.png",
      "https://media.discordapp.net/attachments/1093497830917816403/1120717939209945138/image.png",
      "https://media.discordapp.net/attachments/1093497830917816403/1120717939209945138/image.png",
      "https://media.discordapp.net/attachments/1093497830917816403/1120717939209945138/image.png",
      "https://media.discordapp.net/attachments/1093497830917816403/1120717939209945138/image.png",
      "https://media.discordapp.net/attachments/1093497830917816403/1120717939209945138/image.png",
      "https://www.docplanner.com/logos/logo-tuotempo.svg",
      "https://www.docplanner.com/logos/logo-gipo-primary.svg",
      "https://www.docplanner.com/logos/logo-clinicloud.svg",
      "https://www.docplanner.com/logos/logo-feegow.svg",
    ],
  };
  return (
    <div className="big-div">
      <h1>{data.title}</h1>
      <div className="logo-div">
        {data.TabTag.map((el) => (
          <img src={el} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Compo3;

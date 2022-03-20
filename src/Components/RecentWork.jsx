import React from "react";

const RecentWork = () => {
  const projects = [
    {
      id: 1,
      name: "Wonder the world",
      madeWith: "Html,Css,JavaScript,REST API,ReactJs,Bootstrap",
      description:
        "In this Website, you can search, filter by region and know the details of countries in the world.This website is a challenge from frontendmentor",
      demo: "https://wonder-world-with-zarne.netlify.app",
    },
    {
      id: 2,
      name: "Unit Converter",
      madeWith: "Html,Css,JavaScript,Bootstrap",
      description:
        "In this Website, you can convert meter to any unit. This website is made by me and my teamates",
      demo: "https://heinzarne.github.io/unit-converter/index.html",
    },
    {
      id: 3,
      name: "Space Tourism",
      madeWith: "Html,Css,JavaScript,Bootstrap,React,Api,JSON",
      description:
        "In this Website, you can look around the space to travel. This website is a challenge from frontendmentor.",
      demo: "https://heinzarne.github.io/unit-converter/temperature/temperature.html",
    },
  ];
  return (
    <div className="RecentWork">
      <div className="upper-inner-div p-5 d-flex flex-column justify-content-center align-items-start">
        <span className="fs-1  text-center d-block w-100">
          My Recent <span className="highlight px-3 py-1">Projects</span>
        </span>
      </div>
      <div className="lower-inner-div">
        <div className="project-card p-3">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RecentWork;

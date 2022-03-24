import React, { useState } from "react";
import {
  Animator,
  Fade,
  Move,
  MoveIn,
  batch,
  MoveOut,
} from "react-scroll-motion";

const RecentWork = () => {
  const [isClicked, setIsClicked] = useState(false);

  const projects = [
    {
      id: 1,
      name: "Wonder the world",
      madeWith: "Html,Css,JavaScript,REST API,ReactJs,Bootstrap",
      description:
        "In this Website, you can search, filter by region and know the details of countries in the world.This website is a challenge from frontendmentor",
      demo: "https://wonder-world-with-zarne.netlify.app",
      image: "./images/world.png",
    },
    {
      id: 2,
      name: "Unit Converter",
      madeWith: "Html,Css,JavaScript,Bootstrap",
      description:
        "In this Website, you can convert meter to any unit. This website is made by me and my teamates",
      image: "./images/unit-converter.png",
      demo: "https://heinzarne.github.io/unit-converter/index.html",
    },
    {
      id: 3,
      name: "Space Tourism",
      madeWith: "Html,Css,JavaScript,Bootstrap,React,Api,JSON",
      description:
        "In this Website, you can look around the space to travel. This website is a challenge from frontendmentor.",
      demo: "https://space-tourism-by-zarne.netlify.app/",
      image: "./images/space.png",
    },
    {
      id: 4,
      name: "Burger Shop",
      madeWith: "Html,Css,JavaScript,Bootstrap,React",

      demo: "https://we-sell-burgers.netlify.app/",
      image: "./images/burgers.png",
    },
  ];
  return (
    <div className="RecentWork">
      <Animator animation={batch(Fade(), MoveOut(0, -1000))}>
        <div className="upper-inner-div p-5 d-flex flex-column justify-content-center align-items-start">
          <span className="fs-1 title fw-bolder text-center d-block w-100">
            My Recent <span className="highlight px-3 py-1">Projects</span>
          </span>
        </div>
      </Animator>
      <Animator animation={batch(Fade(), MoveOut(0, 1000))}>
        <div className="lower-inner-div row flex-wrap overflow-scroll  p-0 m-0 w-100 pb-0">
          {projects.map((m) => (
            <div className="col-12 h-fit col-md-6" key={m.id}>
              {" "}
              <a href={m.demo}>
                <div
                  key={m.id}
                  className="project-card   m-1 position-relative w-100"
                  onMouseLeave={(_) =>
                    setTimeout((_) => setIsClicked(false), 1000)
                  }
                >
                  <img
                    src={m.image}
                    className="w-100 border border-3 rounded-3 "
                    alt=""
                  />{" "}
                  <div
                    className={
                      isClicked
                        ? "details position-absolute top-0 p-3 "
                        : "details position-absolute top-0 p-3"
                    }
                  >
                    <div className="name py-1 ps-2 pe-4 bg-info rounded-3  mb-2">
                      {m.name}
                    </div>
                    <div className="used py-1 ps-2 pe-4 bg-info rounded-3  mb-2">
                      {m.madeWith}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </Animator>
    </div>
  );
};

export default RecentWork;

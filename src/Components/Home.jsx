import React, { useState } from "react";
import { Animator, MoveOut, Fade } from "react-scroll-motion";

const Home = () => {
  const [isAnimate, setIsAnimate] = useState(true);

  setTimeout((_) => setIsAnimate(false), 5000);

  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center home position-relative flex-column">
      <Animator animation={MoveOut(0, -1000)}>
        <div className="col-12 upper-inner-div p-5 d-flex flex-column justify-content-start align-items-center">
          <span
            className={
              isAnimate
                ? "dev-name mb-2 animate__animated animate__flipInX "
                : "dev-name mb-2"
            }
          >
            Hein <span className="last-name rounded-3">Zar Ne</span>
          </span>
          <span
            className={
              isAnimate
                ? "fs-6 details animate__animated animate__flipInX animate__delay-1s"
                : "fs-6 details"
            }
          >
            FRONTEND{" "}
            <span className="rounded last-detail px-2 py-1">DEVELOPER</span>
          </span>
        </div>
      </Animator>
      <div className="col-12 lower-inner-div p-5">
        {" "}
        <Animator animation={MoveOut(-1000, 0)}>
          <img
            src="./images/me.jpg"
            alt=""
            className={
              isAnimate
                ? "rounded-circle animate__animated animate__flipInX animate__delay-2s"
                : "rounded-circle"
            }
          />
        </Animator>
        <Animator animation={MoveOut(0, 1000)}>
          <span
            className={
              isAnimate
                ? "about-title  fs-3 w-100 d-block  text-center animate__animated animate__flipInX animate__delay-3s"
                : "about-title mt-3 fs-3 w-100 d-block  text-center"
            }
          >
            About <span className="rounded px-2 py-1 last-about">Me</span>
          </span>
          <p
            className={
              isAnimate
                ? "p-4 w-100 fs-6 d-block text-center about-text animate__animated animate__flipInX animate__delay-4s"
                : "p-4 w-100 fs-6 d-block text-center about-text  "
            }
          >
            <span className="highlight">Who am I?</span> Basically, I'm a{" "}
            <span className="highlight">17-year-old</span> student who works as
            a <span className="highlight">frontend website developer</span> and
            is a <span className="highlight">quick learner</span>. I can develop
            a website design into a fully functional website. If you encounter
            an error, don't panic; I can assist you in finding answers to your
            problems. I'm a <span className="highlight">flexible</span> and{" "}
            <span className="highlight">adaptable</span> person. I am{" "}
            <span className="highlight">
              capable of working as part of a team
            </span>{" "}
            and am willing to learn from seniors. I am, after all, a{" "}
            <span className="highlight">Burmese citizen</span>.
          </p>
        </Animator>
      </div>
    </div>
  );
};

export default Home;

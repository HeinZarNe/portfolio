import React from "react";

const Skill = () => {
  let skill = [
    { name: "html", id: 1, progress: 90 },
    { name: "css", id: 2, progress: 87 },
    { name: "scss", id: 4, progress: 93 },
    { name: "js", id: 5, progress: 70 },
    { name: "react", id: 6, progress: 70 },
    { name: "redux", id: 7, progress: 60 },
    { name: "git", id: 8, progress: 67 },
    { name: "github", id: 9, progress: 99 },
  ];
  return (
    <div className="Skill">
      <div className="upper-inner-div p-5 d-flex flex-column justify-content-center align-items-start">
        <span className="fs-1  text-center d-block w-100">
          My <span className="highlight px-3 py-1">Skills</span>
        </span>
        <span className="fs-6 mt-3 text-center d-block w-100">
          The Section below is displaying the{" "}
          <span className="highlight px-2 py-1">skills</span> I've already
          learned.
        </span>
      </div>
      <div className="lower-inner-div">
        <div className="row p-4 justify-content-center">
          {skill.map((s) => (
            <div key={s.id} className="skill col-12 col-md-5 m-2">
              <span className="skill-label px-2 py-1 mb-1 d-block   ">
                {s.name}
              </span>
              <div className="progress" style={{ height: "10px" }}>
                <div
                  className={`progress-bar skill-${s.id}`}
                  role="progressbar"
                  style={{ width: `${s.progress}%` }}
                  aria-valuenow={s.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;

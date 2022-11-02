import React, { useState } from "react";
import Project from "./Project";
// import ProjectModal from "./ProjectModal";
import "./Work.css";
import proj from "./ProjectItems";
// import ProjectModal from "./ProjectModal";

function Work(props) {
  // console.log(props);
  const [showModal, setShowModal] = useState(false);
  const viewModal = () => {
    setShowModal(true);
  };
  return (
    <div className="work page" name="work">
      <section className="work">
        <h2 className="heading">
          Projects That I've Built{" "}
          {/* <small>
            <small>
              <small>while learning</small>
            </small>
          </small> */}
        </h2>

        {/* {showModal && (
          <ProjectModal
            key={props.id}
            id={props.id}
            title={props.title}
            img={props.img}
            detail={props.detail}
            website={props.website}
            setShowModal={setShowModal}
          ></ProjectModal>
        )} */}

        <div className="projects" onClick={viewModal}>
          {proj.map((item, index) => (
            <Project
              key={index}
              id={item.id}
              title={item.title}
              img={item.img}
              detail={item.detail}
              website={item.website}
            ></Project>
          ))}
        </div>
      </section>
      {/* <ProjectModal></ProjectModal> */}
    </div>
  );
}

export default Work;

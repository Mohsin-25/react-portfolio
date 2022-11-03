import React, { useState } from "react";
import "./Project.css";
import ProjectModal from "./ProjectModal";

function Project(props) {
  const [showModal, setShowModal] = useState(false);
  const viewModal = () => {
    setShowModal(true);
  };

  // const showModal = (id) => {
  //   document.querySelector(".projDetail").classList.add("showModal");
  //   console.log(props.id);
  // };
  // console.log(props);
  return (
    <div className="project">
      {/* {proj.map((item, index) => (
        <ProjectModal
          key={props.id}
          id={props.id}
          title={props.title}
          img={props.img}
          detail={props.detail}
        ></ProjectModal>
      ))} */}

      {showModal && (
        <ProjectModal
          key={props.id}
          id={props.id}
          title={props.title}
          img={props.img}
          detail={props.detail}
          website={props.website}
          setShowModal={setShowModal}
        ></ProjectModal>
      )}
      <div className="projectImageDiv">
        <img
          src="images/project-icon.png"
          alt=""
          className="projectImage"
          // onClick={() => showModal(props.id)}
          onClick={viewModal}
          data-target="#myModal"
          data-aos="flip-left"
        />
      </div>
      <h3>{props.title}</h3>
    </div>
  );
}

export default Project;

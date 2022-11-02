import React from "react";
import "./ProjectModal.css";
import CloseIcon from "@mui/icons-material/Close";

function ProjectModal(props) {
  const closeModal = () => {
    // document.querySelector(".projDetail").classList.add("showModal");
    props.setShowModal(false);
  };
  document.addEventListener(`keydown`, (e) => {
    if (e.key === "Escape" || "Space") {
      // document.querySelector(".projDetail").classList.add("showModal");
      props.setShowModal(false);
    }
  });
  //   window.onclick = (e) => {
  //     if (e.target == document.querySelector(".App")) {
  //       document.querySelector(".projDetail").classList.remove("showModal");
  //     }
  //   };

  // console.table(props);
  return (
    <div className="projDetail">
      <div className="blurr"></div>
      <div className="modal">
        <div className="projImgDiv">
          <img
            src={props.img}
            alt=""
            className="projImg"
            //  data-aos="zoom-in"
          />
        </div>
        <div className="projDescription">
          <h3>{props.title}</h3>
          <p>{props.detail}</p>
          <a href={props.website} target="_blank" rel="noreferrer">
            <button className="websiteBtn">Visit Website</button>
          </a>
        </div>
        <div className="closeBtnDiv">
          <CloseIcon
            sx={{ fontSize: 35 }}
            className="closeBtn"
            onClick={closeModal}
          ></CloseIcon>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;

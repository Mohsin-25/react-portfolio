import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import "./BackToTop.css";

function BackToTop() {
  const Scroll = require("react-scroll");
  const scroll = Scroll.animateScroll;

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 100 });
  };
  return (
    <div>
      <div className="backToTopDiv" onClick={scrollToTop}>
        <ArrowCircleUpIcon
          sx={{ fontSize: 35 }}
          className="backToTop"
        ></ArrowCircleUpIcon>
      </div>
    </div>
  );
}

export default BackToTop;

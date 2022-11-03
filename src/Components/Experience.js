import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience page" name="experience">
      <section className="experience">
        <h2 className="heading">Experience</h2>
        <div className="para">
          <p data-aos="fade-right">
            As of now, being a newbie in this IT world, i do not have such
            experience. But I am looking forward to contribute my skills to this
            industry
          </p>
        </div>
        <img
          src="images/under-construction.png"
          alt=""
          className="expImage"
          data-aos="flip-left"
        />
      </section>
    </div>
  );
}

export default Experience;

import React, { useEffect } from "react";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      offset: 120,
      easing: "ease-out-back",
      //   delay: 100,
    });
  }, []);
  return (
    <div className="about page" name="about">
      <section className="about">
        <h2 className="heading">My Story</h2>
        <div className="paraAndPic">
          <div className="storyPara">
            <p className="aboutPara" data-aos="fade-right">
              Hello, my name is Mohammad Mohsin. I am 24 years old and I am an
              Engineer(civil). I have completed my graduation in 2020. I've
              always been someone who has both a creative and a logical side.
            </p>
            <p className="aboutPara" data-aos="fade-right">
              Early on after graduation i did few cources related to
              construction, then i practiced in my field (as site engineer),
              also attempted some enterance exams as well.
            </p>
            <p className="aboutPara" data-aos="fade-right">
              Slowly i gained interest in IT field, did some research, and found
              frontend development a better carrier option. So that, i can use
              my creative side to design and my logical side to code. Since
              then, i have been practicing on these technologies:
            </p>
            <div className="languages">
              <div className="language">
                <h3>HTML</h3>
                <div className="langImage">
                  <img
                    src="../images/HTML-logo.png"
                    alt=""
                    data-aos="flip-left"
                  />
                </div>
              </div>
              <div className="language">
                <h3>CSS</h3>
                <div className="langImage">
                  <img
                    src="../images/CSS-logo.png"
                    alt=""
                    data-aos="flip-left"
                  />
                </div>
              </div>
              <div className="language">
                <h3>JS</h3>
                <div className="langImage">
                  <img
                    src="../images/JavaScript-logo.png"
                    alt=""
                    data-aos="flip-left"
                  />
                </div>
              </div>
              <div className="language">
                <h3>REACT</h3>
                <div className="langImage">
                  <img
                    src="../images/React-logo.png"
                    alt=""
                    data-aos="flip-left"
                  />
                </div>
              </div>
            </div>
            <p>I desire to add more such technologies in my armory.</p>
            {/* <img src="../images/CSS-logo.png" alt="" />
            <img src="../images/JavaScript-logo.png" alt="" />
            <img src="../images/React-logo.png" alt="" /> */}
          </div>
          <div className="storyImage">
            <img
              src="../images/myPicBackground3.jpg.png"
              alt=""
              data-aos="fade-left"
              className="picBg"
            />
            <img
              src="../images/myPicForeground.png"
              alt=""
              className="picFg"
              data-aos="fade-right"
            />
            {/* <img src="../images/photo_1666806047827_1666806244178_1666982652169.png" alt="" /> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

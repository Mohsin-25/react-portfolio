import React from "react";
import "./Info.css";

function Info() {
  // window.addEventListener("scroll", (e) => {
  //   const target = document.querySelectorAll(".profile");
  //   let scrolled = window.pageYOffset;
  //   // console.log(scrolled);
  //   let rate = scrolled;
  //   for (let i = 0; i < target.length; i++) {
  //     target[i].style.transform =
  //       // `translate(` + rate * 0.75 + `px, ` + rate * 0.52 + `px)`;
  //       `translate(` + rate * 0.45 + `px, ` + rate * 0.715 + `px)`;
  //   }
  // });

  // window.addEventListener("scroll", (e) => {
  //   const target = document.querySelectorAll(".name");
  //   let scrolled = window.pageYOffset;
  //   // console.log(scrolled);
  //   let rate = scrolled;
  //   for (let i = 0; i < target.length; i++) {
  //     // target[i].style.transform = `translate(` + rate + `px, 0px)`;
  //     target[i].style.transform = `translate( 0px,` + rate * 0.7 + `px)`;
  //   }
  // });

  window.addEventListener("scroll", (e) => {
    const target = document.querySelectorAll(".small");
    let scrolled = window.pageYOffset;
    // console.log(scrolled);
    let rate = scrolled;
    for (let i = 0; i < target.length; i++) {
      target[i].style.transform = `translate( 0px,` + rate * 0.35 + `px)`;
    }
  });

  window.addEventListener("scroll", (e) => {
    const target = document.querySelectorAll(".big");
    let scrolled = window.pageYOffset;
    // console.log(scrolled);
    let rate = scrolled;
    for (let i = 0; i < target.length; i++) {
      target[i].style.transform = `translate( 0px,` + rate * 0.55 + `px)`;
    }
  });

  return (
    <div className="info page" name="info">
      <section className="info">
        <h2 className="info-heading">
          <span className="small">Hii, my name is</span>
          <span className="big name">Mohammad Mohsin</span>
          {/* <div className="nameDiv">
            <h2 class="big-heading big name">M</h2>
            <h2 class="big-heading big name">o</h2>
            <h2 class="big-heading big name">h</h2>
            <h2 class="big-heading big name">a</h2>
            <h2 class="big-heading big name">m</h2>
            <h2 class="big-heading big name">m</h2>
            <h2 class="big-heading big name">a</h2>
            <h2 class="big-heading big name">d</h2>
            <h2 class="big-heading big name">&nbsp;</h2>
            <h2 class="big-heading big name">M</h2>
            <h2 class="big-heading big name">o</h2>
            <h2 class="big-heading big name">h</h2>
            <h2 class="big-heading big name">s</h2>
            <h2 class="big-heading big name">i</h2>
            <h2 class="big-heading big name">n</h2>
          </div> */}
          <span className="small">and i'm a</span>
          <span className="big profile">Frontend Developer</span>
          {/* <div className="nameDiv">
            <h2 class="big-heading big profile">F</h2>
            <h2 class="big-heading big profile">r</h2>
            <h2 class="big-heading big profile">o</h2>
            <h2 class="big-heading big profile">n</h2>
            <h2 class="big-heading big profile">t</h2>
            <h2 class="big-heading big profile">e</h2>
            <h2 class="big-heading big profile">n</h2>
            <h2 class="big-heading big profile">d</h2>
            <h2 class="big-heading big profile">&nbsp;</h2>
            <h2 class="big-heading big profile">D</h2>
            <h2 class="big-heading big profile">e</h2>
            <h2 class="big-heading big profile">v</h2>
            <h2 class="big-heading big profile">e</h2>
            <h2 class="big-heading big profile">l</h2>
            <h2 class="big-heading big profile">o</h2>
            <h2 class="big-heading big profile">p</h2>
            <h2 class="big-heading big profile">e</h2>
            <h2 class="big-heading big profile">r</h2>
          </div> */}
          <p className="introPara">Gateway to a new Beginning</p>
        </h2>
      </section>
    </div>
  );
}

export default Info;

import React, { useState } from "react";
import "./Contact.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

function Contact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({ name }, { number }, { email }, { message });
    try {
      await addDoc(collection(db, "Portfolio-entries"), {
        name,
        number,
        email,
        message,
      });
      setName("");
      setNumber("");
      setEmail("");
      setMessage("");
      alert("Message Sent...");
    } catch (error) {
      alert("Error occured: " + error);
    }
  };
  return (
    <div className="contact page" name="contact">
      <section className="contact">
        <h2 className="heading">Get In Touch</h2>
        {/* <h2 className="heading">Contact Me</h2> */}
        <div className="contactContainer">
          <div className="contactImageDiv">
            <img
              src="../images/contactMeImage.png"
              alt=""
              className="contactImage"
              data-aos="fade-right"
            />
          </div>
          <div className="contactForm">
            <p data-aos="fade-left">
              I'm interested in job offers and freelance opportunities. However,
              if you have other requests or questions, feel free to use the form
            </p>
            <div className="formDiv">
              <form action="" onSubmit={handleSubmit}>
                <fieldset data-aos="fade-left">
                  <legend>Name</legend>
                  <label htmlFor="name">Full name : </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <br />
                  <br />
                  {/* <label htmlFor="lname">Last name : </label>
                <input type="text" name="lname" />
                <br />
                <br /> */}
                </fieldset>
                <fieldset data-aos="fade-left">
                  <legend>Contact</legend>
                  <label htmlFor="number">Mobile no. : </label>
                  <input
                    type="number"
                    name="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                  />
                  <br />
                  <br />
                  <label htmlFor="email">Email id : </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <br />
                  <br />
                </fieldset>
                <fieldset data-aos="fade-left">
                  <legend>Message</legend>
                  <label htmlFor="message">Your message : </label>
                  <input
                    type="text"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <br />
                  <br />
                </fieldset>
                <input
                  type="submit"
                  value="Submit"
                  className="submitBtn"
                  name="submit"
                />
              </form>
            </div>
          </div>
          {/* <div className="contactForm">
            <form action="">
              <fieldset>
                <legend>Name</legend>
                <span htmlFor="fname">Full name</span>
                <input type="text" name="fname" />
                <br />
                <br />
              </fieldset>
              <fieldset>
                <legend>Contact</legend>
                <span htmlFor="mobno">Mobile no.</span>
                <input type="number" name="mobileno" />
                <br />
                <br />
              </fieldset>
              <fieldset>
                <legend>Contact</legend>
                <span htmlFor="email">Email id</span>
                <input type="email" name="email" />
                <br />
                <br />
              </fieldset>
              <fieldset>
                <legend>Message</legend>
                <span htmlFor="message">Your message</span>
                <input type="text" name="message" />
                <br />
                <br />
              </fieldset>
              <input
                type="submit"
                value="Submit"
                className="submitBtn"
                name="submit"
              />
            </form>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Contact;

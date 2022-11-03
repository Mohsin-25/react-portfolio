import React, { useState } from "react";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import SocialHandles from "./SocialHandles";
import SwitchMode from "./SwitchMode";
import BackToTop from "./BackToTop";
import InfoIcon from "@mui/icons-material/Info";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
// import HandshakeIcon from "@mui/icons-material/Handshake";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

function Navbar() {
  const [showLinks, setShowLinks] = useState(true);
  const mobShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const hideLinks = () => {
    if (window.innerWidth <= 920) {
      setShowLinks(!showLinks);
    }
  };
  return (
    <div>
      <nav className="navbar">
        <ul>
          <a
            href="https://mohsin-25.github.io/react-portfolio"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="logoNew">
              <span className="lessThan">&#60;</span>
              <span>
                <small>Amigo&#160;</small>
              </span>
              <span className="slash"> &#47;</span>
              {/* <span className="slash">&#47;</span>{" "} */}
              <span className="moreThan">&#62;</span>
            </div>
          </a>
          {/* <Link
            to="/"
            // spy={true}
            // smooth={true}
            // offset={50}
            // duration={500}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src="../images/logo.jpg" alt="" className="navLogo" />
          </Link> */}

          <div className={showLinks ? "rightNav" : "mobileRightNav"}>
            <Link
              to="about"
              spy={true}
              // smooth={true}
              // offset={0}
              // duration={500}
              onClick={hideLinks}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li>
                <InfoIcon
                  className="navIcon"
                  sx={{ marginRight: 0.6 }}
                ></InfoIcon>{" "}
                About
              </li>
            </Link>

            <Link
              to="work"
              spy={true}
              // smooth={true}
              // offset={0}
              // duration={500}
              onClick={hideLinks}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li>
                <EngineeringIcon
                  className="navIcon"
                  sx={{ marginRight: 0.6 }}
                ></EngineeringIcon>{" "}
                Work
              </li>
            </Link>

            <Link
              to="experience"
              spy={true}
              // smooth={true}
              // offset={0}
              // duration={500}
              onClick={hideLinks}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li>
                <BusinessCenterIcon
                  className="navIcon"
                  sx={{ marginRight: 0.6 }}
                ></BusinessCenterIcon>{" "}
                Experience
              </li>
            </Link>

            <Link
              to="contact"
              spy={true}
              // smooth={true}
              // offset={0}
              // duration={500}
              onClick={hideLinks}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li>
                <ContactPageIcon
                  className="navIcon"
                  sx={{ marginRight: 0.6 }}
                ></ContactPageIcon>{" "}
                Contact
              </li>
            </Link>

            <Link
              to=""
              spy={true}
              // smooth={true}
              // offset={0}
              // duration={500}
              onClick={hideLinks}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li>
                <DownloadForOfflineIcon
                  className="navIcon"
                  sx={{ marginRight: 0.6 }}
                ></DownloadForOfflineIcon>{" "}
                Resume
              </li>
            </Link>
          </div>

          <div className="menu" onClick={mobShowLinks}>
            {showLinks ? (
              <MenuIcon sx={{ fontSize: 40 }}></MenuIcon>
            ) : (
              <CloseIcon sx={{ fontSize: 40 }}></CloseIcon>
            )}
          </div>
        </ul>
      </nav>

      <SocialHandles></SocialHandles>
      <BackToTop></BackToTop>
      <SwitchMode></SwitchMode>
    </div>
  );
}

export default Navbar;

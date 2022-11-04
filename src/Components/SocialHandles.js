import React, { useState } from "react";
import "./SocialHandles.css";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CloseIcon from "@mui/icons-material/Close";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function SocialHandles() {
  const [showSocial, setShowSocial] = useState(true);

  const show = () => {
    setShowSocial(!showSocial);
  };
  const hide = () => {
    setShowSocial(!showSocial);
  };
  // if(window.innerWidth <= 920){

  // }
  return (
    <div className="leftNav">
      {showSocial && window.innerWidth <= 920 ? (
        <a onClick={show}>
          <AddCircleOutlineIcon
            className="socialIcon"
            sx={{ fontSize: 35 }}
          ></AddCircleOutlineIcon>
        </a>
      ) : (
        <div className="leftNav">
          <a
            href="https://www.mohsinmohammad122@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <EmailIcon
              className="gMail socialIcon"
              sx={{ fontSize: 35 }}
            ></EmailIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-mohsin-b8b817208"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon
              className="linkedIn socialIcon"
              sx={{ fontSize: 35 }}
            ></LinkedInIcon>
          </a>
          <a
            href="https://github.com/Mohsin-25"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon
              className="gitHub socialIcon"
              sx={{ fontSize: 35 }}
            ></GitHubIcon>
          </a>
          <a
            href="https://wa.me/+918446668262"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon
              className="whatsApp socialIcon"
              sx={{ fontSize: 35 }}
            ></WhatsAppIcon>
          </a>
          <a
            href="https://instagram.com/amigo_v1.0?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon
              className="instaGram socialIcon"
              sx={{ fontSize: 35 }}
            ></InstagramIcon>
          </a>
          <a
            href="https://m.facebook.com/100005523606397/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon
              className="faceBook socialIcon"
              sx={{ fontSize: 35 }}
            ></FacebookIcon>
          </a>
          {window.innerWidth <= 920 && (
            <a onClick={hide}>
              <CloseIcon
                className="closeSocial socialIcon"
                sx={{ fontSize: 35 }}
              ></CloseIcon>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default SocialHandles;

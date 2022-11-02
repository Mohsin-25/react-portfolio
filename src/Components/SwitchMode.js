import React, { useEffect, useState } from "react";
import "./SwitchMode.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function SwitchMode() {
  const [mode, setMode] = useState("dark-mode");

  const toggleMode = () => {
    mode === "dark-mode" ? setMode("light-mode") : setMode("dark-mode");
    document.querySelector(".btn").classList.toggle("modeChecked");
    // alert({ mode });
    console.log(mode);
  };

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);
  return (
    <div>
      <div className="btnMode">
        <DarkModeIcon
          sx={{ fontSize: 26 }}
          className="modeIcon darkIcon"
          onClick={toggleMode}
        ></DarkModeIcon>
        <span className=" btn modeChecked" onClick={toggleMode}></span>
        <LightModeIcon
          sx={{ fontSize: 22 }}
          className="modeIcon lightIcon"
          onClick={toggleMode}
        ></LightModeIcon>
      </div>
    </div>
  );
}

export default SwitchMode;

// import { HashRouter } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Info from "./Components/Info";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Info></Info>
      <About></About>
      <Work></Work>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
}

export default App;

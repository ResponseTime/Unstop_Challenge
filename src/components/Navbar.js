import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const [width, setWidth] = useState(true);
  const [navSt, setNav] = useState("nav");
  let change = () => {
    let nav = document.getElementById("navbar");
    let asse = document.getElementById("header");
    let over = document.getElementById("overview");
    if (nav.style.width === "100px") {
      nav.style.width = "300px";
      asse.style.left = "300px";
      asse.style.width = "84%";
      asse.style.transition = "all 0.3s ease-in-out";
      over.style.left = "300px";
      over.style.width = "84%";
      over.style.transition = "all 0.3s ease-in-out";
      nav.style.transition = "all 0.3s ease-in-out";
      setWidth(false);
    } else {
      nav.style.width = "100px";
      asse.style.left = "100px";
      asse.style.width = "94.8%";
      asse.style.transition = "all 0.3s ease-in-out";
      over.style.left = "100px";
      over.style.width = "94.8%";
      over.style.transition = "all 0.3s ease-in-out";
      nav.style.transition = "all 0.3s ease-in-out";
      setWidth(true);
    }
  };
  return (
    <>
      <div className="nav" id="navbar" onClick={change}>
        <ul>
          <li>
            <Link to="/">{width ? "D" : "Dashboard"}</Link>
          </li>

          <li>
            <Link to="/assement">{width ? "A" : "Assements"}</Link>
          </li>
          <li>{width ? "L" : "My Library"}</li>
          <li>{width ? "R" : "Round Status"}</li>
        </ul>
      </div>
    </>
  );
}

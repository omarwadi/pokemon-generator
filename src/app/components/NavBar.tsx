import Image from "next/image";
import Link from "next/link";
import React from "react";
import Form from "./Form";

export default function NavBar() {
  return (
    
    <nav className="nav">
      <div className="div">
        <div id='nav_div' className="nav_div">
          <img
            src="/images/pokeball.png"
            alt="Pokemon Logo"
            />
        </div>

        <div style={{fontSize: "1.1rem"}}>
          <ul>
            <li style={{margin:'0.5rem'}}>
              <a href="#home" style={{}}>
                Home
              </a>
            </li>
            
            <li style={{margin:'0.5rem'}}>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

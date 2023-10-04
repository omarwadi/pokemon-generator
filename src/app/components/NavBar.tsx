import Image from "next/image";
import Link from "next/link";
import React from "react";
import Form from "./Form";

export default function NavBar() {
  return (
    
    <nav style={{ display: "flex", flexDirection: "row", boxShadow: "0px 0.1px", justifyContent: "flex-start"}}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "row", margin: "0rem 3rem 0.5rem 1rem"}}>
          <img
            src="/images/pokeball.png"
            alt="Your Image"
            sizes="10vw"
            width={70}
            height={50}/>
        </div>

        <div style={{ fontSize: "1.1rem"}}>
          <ul>
            <li>
              <a href="#home">
                Home
              </a>
            </li>
            
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

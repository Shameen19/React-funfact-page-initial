import React from "react";
import reactlogo from "../images/reactlogo.jpg";
export default function Navbar(){
    return (
        <nav>
            <img src={reactlogo}
            alt="react"
            className="image"
            />
            <h3 className="heading3">React Facts </h3>
            <h4 className="heading4">React Cource-Project 1 </h4>

        </nav>
    )

}
import React from "react"
import { Link } from "react-router-dom"


export default function Header() {
    return (
        <div className="header">
            <div className="header--div">
                <div className="header--links"> <Link to="/">Home</Link> </div>
                <div className="header--links"> <Link to="/signin"> Sign-in</Link> </div>
                <div className="header--links"> <Link to="/signup"> Sign-up </Link> </div>
            </div>

        </div>
    )  

}
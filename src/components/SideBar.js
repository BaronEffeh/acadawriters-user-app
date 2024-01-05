import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './SideBar.css';
import dropdown from "./SideBarLogic";
import { useEffect } from "react";

const SideBar = () => {
    useEffect(() => {
        dropdown();
    }, []);

    return (
        <div className="side-bar">
            <div className="sidenav">
                <Link to="dashboard">DASHBOARD</Link>
                <button className="dropdown-btn">TASK CATEGORY
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-container">
                    <Link to="letter-of-explanation">LETTER OF EXPLANATION</Link>
                    <Link to="statement-of-purpose">STATEMENT OF PURPOSE</Link>
                    <Link to="application-essay">APPLICATION ESSAY</Link>
                    <Link to="uk-canadian-styled-resume">UK STYLED RESUME</Link>
                    <Link to="uk-canadian-styled-resume">CANADA STYLED RESUME</Link>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
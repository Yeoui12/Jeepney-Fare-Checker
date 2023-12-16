import { Component } from "react";
import "./NavbarStyles.css";
import {GiBus} from "react-icons/gi";

class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
      <div className="navbar-logo">
        <GiBus size ={70} />
        <h1>Jeepney Fare Checker</h1>
      </div>
    </nav>
        )
    }
}

export default Navbar;


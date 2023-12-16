import { Component } from "react";
import "./NavbarStyles.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
      <div className="navbar-logo">
        <h1>Jeepney Fare Checker</h1>
      </div>
    </nav>
        )
    }
}

export default Navbar;


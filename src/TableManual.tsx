import React from "react";
import './TableManual.css';

export const TableManual = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
    <div>
    <div className='auth-form container'>
    <form className="login-form" onSubmit={handleSubmit}>
    <button className="proc" type="submit">Calculate</button>
    <button className="link-btn2" type = "button" onClick={() => props.onFormSwitch('Table13C')}>Select 13C Route</button>
    </form>
    </div>
    </div>
    
);
}
export default TableManual;
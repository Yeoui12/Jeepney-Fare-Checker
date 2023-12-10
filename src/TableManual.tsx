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
    <button className="proc" type="submit">Select 13C</button>
    <button className="link-btn" type = "button" onClick={() => props.onFormSwitch('Table13C')}>Input Manual Table</button>
    </form>
    </div>
    </div>
    
);
}
export default TableManual;
import './Table13C.css';
import React, {useState, useContext, useReducer} from "react";
import calculateFare from './calculateFare';

export const Table13C = (props:any) => {

    const [input, setInput] = useState('');
    const [closestDistances, setClosestDistances] = useState<number[]>([]);
    const [closestFares, setClosestFares] = useState<number[]>([]);
    const [calculatedFare, setCalculatedFare] = useState<number>();
  
    const data13C = [
      {
        meters: 0,
        landmark: 'Colon',
        fare: 14.00,
      },
      {
        meters: 550,
        landmark: 'USC-Downtown Campus',
        fare: 14.00,
      },
      {
        meters: 1200,
        landmark: 'Zapatera Elementary School',
        fare: 14.00,
      },
      {
        meters: 2000,
        landmark: 'Carreta Cemetery',
        fare: 14.00,
      },
      {
        meters: 2600,
        landmark: 'Hipodromo',
        fare: 14.00,
      },
      {
        meters: 2800,
        landmark: 'Hipodromo',
        fare: 14.00,
      },
      {
        meters: 3000,
        landmark: 'Hipodromo',
        fare: 14.00,
      },
      {
        meters: 3500,
        landmark: 'Hipodromo',
        fare: 14.00,
      },
      {
        meters: 4000,
        landmark: 'Hipodromo',
        fare: 14.00,
      },
      {
        meters: 4500,
        landmark: 'Hipodromo',
        fare: 14.00,
      },
      {
        meters: 5000,
        landmark: 'Hipodromo',
        fare: 14.00,
      },
      {
        meters: 6000,
        landmark: 'Hipodromo',
        fare: 14.00,
      },
      {
        meters: 7000,
        landmark: 'Hipodromo',
        fare: 14.00,
      },
    ]; 
 
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const { closestFourDistances, closestFourFares, calculatedFare } = calculateFare(data13C, input);

      setClosestDistances(closestFourDistances);
      setClosestFares(closestFourFares);
      setCalculatedFare(calculatedFare);
    };

    return (
      <>
      <div className="auth-form container">
          <form className='login-form' onSubmit={handleSubmit}>

            <label htmlFor="input" className='input'>Enter Distance (meters):</label>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="input" id="input13c" name="input13c" required className='input13c'/>

            <div className='button-container'>
            <button className="proc" type="submit"> Calculate </button>
            </div>
          </form>
          </div>
          <button className="link-btn2" type="button" onClick={() => props.onFormSwitch('TableManual')}>Create Own Route List</button>  

        <div>
          <table className='table13cdesign'>
            <thead>
              <tr>
                <th>Distance(meters)</th>
                <th>Landmark</th>
                <th>Fare (Pesos)</th>
              </tr>
            </thead>
            <tbody>
              {data13C.map((val, i) => (
                <tr key={i}>
                  <td>{val.meters}</td>
                  <td>{val.landmark}</td>
                  <td>{val.fare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {closestDistances.length > 0 && (
  <div className='output'>
    <p>Four closest distances in the table:</p>
    {closestDistances.map((distance, index) => (
      <div key={index}>
        <p>Distance: {distance} meters - Fare: {closestFares[index]}</p>
      </div>
    ))}
    <p>Calculated Fare: {calculatedFare?.toFixed(2)}</p>
  </div>
)}
        
      </>
    );
  };
  
  export default Table13C;
import './Table13C.css';
import React, {useState, useContext, useReducer} from "react";

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
    ]; 
 
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const inputNumber = parseFloat(input); //Parse user input to float
      
      //Duplicate original array and sort according to the difference of meters in array by user input to get 4 closest distances to user input distance
      const sortedByDistance = data13C.slice().sort((a, b) => { return Math.abs(a.meters - inputNumber) - Math.abs(b.meters - inputNumber); } );
  
      const closestFourDistances = sortedByDistance.slice(0, 4).map((item) => item.meters); //Get 4 closest distance
      const closestFourFares = sortedByDistance.slice(0, 4).map((item) => item.fare); // Get 4 closest fare
      closestFourDistances.sort((a, b) => a - b); //sort distance by smallest closest distance to largest closest distance
      closestFourFares.sort((a, b) => a - b); //sort fare by fare from smallest closest distance to largest closest distance
      setClosestDistances(closestFourDistances); //set four closest distances to variable  closestDistances
      setClosestFares(closestFourFares);  //set fare from four closest distances to variable  closestFares

      //Lagrange using 4 closest fares and distance (Cubic)
      const x0: number = closestFourDistances[0];
      const y0: number = closestFourFares[0];

      const x1: number = closestFourDistances[1];
      const y1: number = closestFourFares[1];
      
      const x2: number = closestFourDistances[2];
      const y2: number = closestFourFares[2];

      const x3: number = closestFourDistances[3];
      const y3: number = closestFourFares[3];

      const cubicLagrange: number = ((((inputNumber-x1)/(x0-x1))*((inputNumber-x2)/(x0-x2))*((inputNumber-x3)/(x0-x3)))*y0)+ 
                                    ((((inputNumber-x0)/(x1-x0))*((inputNumber-x2)/(x1-x2))*((inputNumber-x3)/(x1-x3)))*y1)+
                                    ((((inputNumber-x0)/(x2-x0))*((inputNumber-x1)/(x2-x1))*((inputNumber-x3)/(x2-x3)))*y2)+
                                    ((((inputNumber-x0)/(x3-x0))*((inputNumber-x1)/(x3-x1))*((inputNumber-x2)/(x3-x2)))*y3); 
      setCalculatedFare(cubicLagrange);
    };

    return (
      <>
        <div>
          <table>
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

        <div className="auth-form-container">
          <form className="login-form" onSubmit={handleSubmit}>

            <label htmlFor="input">Enter distance to find fare</label>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="input" id="input" name="input" required/>

            <button className="proc" type="submit"> Calculate </button>
  
            <button className="link-btn" type="button" onClick={() => props.onFormSwitch('TableManual')}>Input Manual Table
            </button>

          </form>
          </div>

          {closestDistances.length > 0 && (
            <div>
              <p>Four closest distances in the table:</p>
                {closestDistances.map((distance, index) => (<p key={index}>{distance} meters</p>))}
                <p>{calculatedFare?.toFixed(2)}</p> 
            </div>
          )}
        
      </>
    );
  };
  
  export default Table13C;
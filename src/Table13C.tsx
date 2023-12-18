import './Table13C.css';
import {useState} from "react";
import calculateFare from './calculateFare';

export const Table13C = (props:any) => {

  const [input, setInput] = useState("");
  const [closestDistances, setClosestDistances] = useState<number[]>([]);
  const [closestFares, setClosestFares] = useState<number[]>([]);
  const [calculatedFare, setCalculatedFare] = useState<number>();
  const [applyDiscount, setApplyDiscount] = useState(false);

  props.onFormSwitch('Table13C');
    const data13C = [
      {
        meters: 0,
        landmark: 'Colon',
        fare: 15.00,
      },
      {
        meters: 550,
        landmark: 'USC-Downtown Campus',
        fare: 15.00,
      },
      {
        meters: 1200,
        landmark: 'Zapatera Elementary School',
        fare: 15.00,
      },
      {
        meters: 2000,
        landmark: 'Carreta Cemetery',
        fare: 15.00,
      },
      {
        meters: 2600,
        landmark: 'Hipodromo',
        fare: 15.00,
      },
      {
        meters: 3500,
        landmark: 'Insular Life Cebu Business Center',
        fare: 15.00,
      },
      {
        meters: 4800,
        landmark: 'Waterfront Hotel',
        fare: 17.00,
      },
      {
        meters: 5700,
        landmark: 'Paradise Village Road',
        fare: 19.25,
      },
      {
        meters: 5800,
        landmark: 'UC Banilad Campus',
        fare: 19.50,
      },
      {
        meters: 7700,
        landmark: 'USC - Talamban Campus',
        fare: 24.25,
      },
      {
        meters: 8200,
        landmark: 'Aicila Suites Hotel',
        fare: 25.50,
      },
      {
        meters: 9100,
        landmark: 'Gaisano Grand Mall',
        fare: 27.75,
      },
      {
        meters: 9600,
        landmark: 'Talamban Elementary School',
        fare: 29.00,
      },
      {
        meters: 9700,
        landmark: 'Talamban Elementary School',
        fare: 29.00,
      },
      {
        meters: 10500,
        landmark: 'Tintay Jeepney Terminal',
        fare: 31.25,
      }
      
    ]; 
 
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
      const userInput = Number(input);

   
  if (isNaN(userInput) || userInput > Math.max(...data13C.map(item => item.meters)) || userInput < Math.min(...data13C.map(item => item.meters))) {
    alert('Invalid input. Please enter a valid distance in meters.');
    return;
  }

      const { closestFourDistances, closestFourFares, calculatedFare: fare } = calculateFare(data13C, input);

    const discountMultiplier = applyDiscount ? 0.8 : 1;
    const finalFare = fare * discountMultiplier;

    setCalculatedFare(finalFare);
    setClosestDistances(closestFourDistances);
    setClosestFares(closestFourFares);
      
      
    };

    return (
      <>
      <div className="auth-form container">
          <form className='login-form' onSubmit={handleSubmit}>

            <label htmlFor="input" className='input'>Enter Distance (meters):</label>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="input" id="input13c" name="input13c" required className='input13c'/>

            <div className='button-container'>
              <label>
            <input className="proc2"
                type="checkbox"
                checked={applyDiscount}
                onChange={(e) => setApplyDiscount(e.target.checked)} />20% Discount
            <button className="proc" type="submit"> Calculate </button>
            </label>
            </div>

          </form>
          </div>

        <div className='table-container'>
          <table className='table13cdesign'>
            <thead>
              <tr>
                <th>Distance (meters)</th>
                <th>Landmark</th>
                <th>Fare (Pesos)</th>
              </tr>
            </thead>
            <tbody>
              {data13C.map((val, i) => (
                <tr key={i}>
                  <td>{val.meters}</td>
                  <td>{val.landmark}</td>
                  <td>{val.fare.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {closestDistances.length > 0 && (
  <div className='output'>
    <h1>Fare: ₱{calculatedFare?.toFixed(2)}</h1>
    <h3>4 Closest Distances:</h3>
    {closestDistances.map((distance, index) => (
      <div key={index}>
        <p>{distance} meters - ₱{closestFares[index].toFixed(2)}</p>
      </div>
    ))}
  </div>
)}
        
      </>
    );
  };
  
  export default Table13C;
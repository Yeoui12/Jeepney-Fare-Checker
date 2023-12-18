import "./TableManual.css";
import {useState } from "react";
import calculateFare from "./calculateFare";

const dataManual = [
 
  { id:"1",
    meters: 0,
    landmark: 'Colon',
    fare: 15.00,
  },
  {id:"2",
    meters: 550,
    landmark: 'USC-Downtown Campus',
    fare: 15.00,
  },
  {id:"3",
    meters: 1200,
    landmark: 'Zapatera Elementary School',
    fare: 15.00,
  },
  {id:"4",
    meters: 2000,
    landmark: 'Carreta Cemetery',
    fare: 15.00,
  },
  {id:"5",
    meters: 2600,
    landmark: 'Hipodromo',
    fare: 15.00,
  },
  {id:"6",
    meters: 3500,
    landmark: 'Insular Life Cebu Business Center',
    fare: 15.00,
  },
  {id:"7",
    meters: 4800,
    landmark: 'Waterfront Hotel',
    fare: 17.00,
  },
  {id:"8",
    meters: 5700,
    landmark: 'Paradise Village Road',
    fare: 19.25,
  },
  {id:"9",
    meters: 5800,
    landmark: 'UC Banilad Campus',
    fare: 19.50,
  },
  {id:"10",
    meters: 7700,
    landmark: 'USC - Talamban Campus',
    fare: 24.25,
  },
  {id:"11",
    meters: 8200,
    landmark: 'Aicila Suites Hotel',
    fare: 25.50,
  },
  {id:"12",
    meters: 9100,
    landmark: 'Gaisano Grand Mall',
    fare: 27.75,
  },
  {id:"13",
    meters: 9600,
    landmark: 'Talamban Elementary School',
    fare: 29.00,
  },
  {id:"14",
    meters: 9700,
    landmark: 'Talamban Elementary School',
    fare: 29.00,
  },
  {id:"15",
    meters: 10500,
    landmark: 'Tintay Jeepney Terminal',
    fare: 31.25,
  }
];

const TableManual = (props: any) => {
  const [input, setInput] = useState("");
  const [closestDistances, setClosestDistances] = useState<number[]>([]);
  const [closestFares, setClosestFares] = useState<number[]>([]);
  const [calculatedFare, setCalculatedFare] = useState<number>();
  const [applyDiscount, setApplyDiscount] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const userInput = Number(input);


if (isNaN(userInput) || userInput > Math.max(...manualData.map(item => item.meters)) || userInput < Math.min(...manualData.map(item => item.meters))) {
  alert('Invalid input. Please enter a valid distance in meters.');
  return;
}

    const { closestFourDistances, closestFourFares, calculatedFare: fare } = calculateFare(manualData, input);

  const discountMultiplier = applyDiscount ? 0.8 : 1;
  const finalFare = fare * discountMultiplier;

  setCalculatedFare(finalFare);
  setClosestDistances(closestFourDistances);
  setClosestFares(closestFourFares);   
  };

  props.onFormSwitch('TableManual');

  const [manualData, setManualData] = useState(dataManual);

  const onChangeInput = (e: any, id: any) => {
    const { name, value } = e.target;

    const editData = manualData.map((item) =>
      item.id === id && name ? { ...item, [name]: value } : item
    );

    setManualData(editData);
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
            {manualData.map(({ id, meters, landmark, fare }) => (
              <tr key={id}>
                <td className="meterinput">
                  <input
                    name="meters"
                    value={meters}
                    type="text"
                    onChange={(e) => onChangeInput(e, id)}
                    placeholder="0"
                  />
                </td>

                <td className="landmarkinput">
                  <input
                    name="landmark"
                    value={landmark}
                    type="text"
                    onChange={(e) => onChangeInput(e, id)}
                    placeholder="null"
                  />
                </td>

                <td>
                  <input
                    name="fare"
                    value={fare}
                    type="text"
                    onChange={(e) => onChangeInput(e, id)}
                    placeholder="0"
                  />
                </td>
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
        <p>{distance} meters - ₱{closestFares[index]}</p>
      </div>
    ))}
  </div>
)}
        
      </>
  );
};

export default TableManual;

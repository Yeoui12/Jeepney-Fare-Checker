import "./Table13C.css";
import { useEffect, useState } from "react";
import calculateFare from "./calculateFare";

const dataManual = [
  {
    id: "01",
    meters: 0,
    landmark: "Colon",
    fare: 14.0,
  },
  {
    id: "02",
    meters: 550,
    landmark: "USC-Downtown Campus",
    fare: 14.0,
  },
  {
    id: "03",
    meters: 1200,
    landmark: "Zapatera Elementary School",
    fare: 14.0,
  },
  {
    id: "04",
    meters: 2000,
    landmark: "Carreta Cemetery",
    fare: 14.0,
  },
  {
    id: "05",
    meters: 2600,
    landmark: "Hipodromo",
    fare: 14.0,
  },
  {
    id: "06",
    meters: 2800,
    landmark: "Hipodromo",
    fare: 14.0,
  },
  {
    id: "07",
    meters: 3000,
    landmark: "Hipodromo",
    fare: 14.0,
  },
  {
    id: "08",
    meters: 3500,
    landmark: "Hipodromo",
    fare: 14.0,
  },
  {
    id: "09",
    meters: 4000,
    landmark: "Hipodromo",
    fare: 14.0,
  },
  {
    id: "10",
    meters: 4500,
    landmark: "Hipodromo",
    fare: 14.0,
  },
  {
    id: "11",
    meters: 5000,
    landmark: "Hipodromo",
    fare: 14.0,
  },
  {
    id: "12",
    meters: 6000,
    landmark: "Hipodromo",
    fare: 14.0,
  },
  {
    id: "13",
    meters: 7000,
    landmark: "Hipodromo",
    fare: 14.0,
  },
];

const TableManual = (props: any) => {
  const [input, setInput] = useState("");
  const [closestDistances, setClosestDistances] = useState<number[]>([]);
  const [closestFares, setClosestFares] = useState<number[]>([]);
  const [calculatedFare, setCalculatedFare] = useState<number>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { closestFourDistances, closestFourFares, calculatedFare } =
      calculateFare(manualData, input);

    setClosestDistances(closestFourDistances);
    setClosestFares(closestFourFares);
    setCalculatedFare(calculatedFare);
  };

  useEffect(() => {
    console.log(closestDistances);
  }, [closestDistances]);

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
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="input" className="input">
            Enter Distance (meters):
          </label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="input"
            id="inputManual"
            name="inputManual"
            required
            className="inputManual"
          />

          <div className="button-container">
            <button className="proc" type="submit">
              {" "}
              Calculate{" "}
            </button>
          </div>
        </form>
      </div>
      <button
        className="link-btn2"
        type="button"
        onClick={() => props.onFormSwitch("Table13C")}
      >
        Select 13C Route
      </button>

      <div>
        <table className="table13cdesign">
          <thead>
            <tr>
              <th>Distance(meters)</th>
              <th>Landmark</th>
              <th>Fare (Pesos)</th>
            </tr>
          </thead>
          <tbody>
            {manualData.map(({ id, meters, landmark, fare }) => (
              <tr key={id}>
                <td>
                  <input
                    name="meters"
                    value={meters}
                    type="text"
                    onChange={(e) => onChangeInput(e, id)}
                    placeholder="0"
                  />
                </td>

                <td>
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
        <div className="output">
          <p>Four closest distances in the table:</p>
          {closestDistances.map((distance, index) => (
            <div key={index}>
              <p>
                Distance: {distance} meters - Fare: {closestFares[index]}
              </p>
            </div>
          ))}
          <p>Calculated Fare: {calculatedFare?.toFixed(2)}</p>
        </div>
      )}
    </>
  );
};

export default TableManual;

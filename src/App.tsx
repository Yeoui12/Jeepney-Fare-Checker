import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import jeep from "./images/jeep.jpg"; 
import  Table13C  from "./Table13C";
import  TableManual  from "./TableManual";

function App() {
  const [count, setCount] = useState(0);
  
  const [currentForm, setCurrentForm] = useState('Table13C');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
      <div className="hero">
        <img alt="heroImg" className="heroimg1" src={jeep} />
          <div className="hero-text"><h1>Jeepney Fare Checker</h1>
              <p>Calculate your fare in a desired distance based from a landmarks' fare in a distance!</p>  
        </div>
      </div>
      {
        currentForm === 'Table13C' ? <Table13C onFormSwitch={toggleForm} /> : <TableManual onFormSwitch={toggleForm} />
      }

    </>
  )
}

export default App

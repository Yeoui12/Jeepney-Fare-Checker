import { useState } from 'react'
import './App.css'
import jeep from "./images/jeep.png"; 
import  Table13C  from "./Table13C";
import  TableManual  from "./TableManual";
import Navbar from "./Navbar";
import Toggle from "./Toggle";

function App() {
  
  const [currentForm, setCurrentForm] = useState('Table13C');
  const toggleForm = (formName: any) => {
    setCurrentForm(formName);
  }

  return (
    <>
    <Navbar />
      <div className="hero">
        <img alt="heroImg" className="heroimg1" src={jeep} />
          <div className="hero-text"><h1>Check Your Fare!</h1>
              <p>Calculate your fare in a desired distance based from the route list of a Jeep!</p>  
        </div>
      </div>
      <Toggle onFormSwitch={toggleForm} />
      {
        currentForm === 'Table13C' ? <Table13C onFormSwitch={toggleForm} /> : <TableManual onFormSwitch={toggleForm} />
      }  
    </>
  )
}



export default App

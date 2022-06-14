import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import About from "./component/About";
import React, { useState } from 'react';
import Alert from './component/Alert';


function App() {

  const [mode,setmode]=useState('light');
  const toggleMode = () =>
  {
      if(mode==='light')
      {
        setmode('dark');
        document.body.style.backgroundColor='#A7AA8C';
        showAlert("Dark Mode Has enables","succeess");
      }
      else
      {
        setmode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light Mode Has enables","succeess");

      }
  }
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    })
  }

  
  

  return (
    <div >
      {/* <Navbar title="TextUtils" about="AboutTextUtils" /> */}

      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
      <strong><Alert alert={alert}/></strong>

      
      <div className="container my-3 ">
        <TextForm heading="Enter the Text To analyze below"></TextForm>
        {/* <About/>   */}
      </div>


    
    </div>
  );
}

export default App;

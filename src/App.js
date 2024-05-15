import './App.css';
import Alert from './Component/Alert.js';
import Navbar from './Component/Navbar.js';
import Textform from './Component/TextForm.js';
import React, { useState } from 'react'



function App() {
  const [mode , setMode]=useState('light');
 const [alert, setAlert]=useState(null);
 const showalert=(message,type)=>{
  setAlert({
    msg:message,
    typ:type
 });
 setTimeout(() => {
  setAlert(null);
 }, 1500);
 }
 const tooglemode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#36454F';
    showalert("this is dark mode", "success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showalert("this is light mode", "success");
  }}
  return(
    <>
   
    <Navbar title="TextUtils" mode={mode} togglemode={tooglemode} />
    <div className="container">
      <Alert alert={alert} />
    </div>
  

            <div className="container">
            <Textform heading="Enter the Text here" mode={mode} showalert={showalert}/>
          </div>
        
</>
  );

}

export default App;

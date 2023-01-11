import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navebar from './components/Navebar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type)=>{
    setalert({
      message: message,
      type: type
    })
    setTimeout(()=>{
        setalert(null)
    }, 2000)
  }
  const toglemode = ()=>{
    if(mode === 'dark'){
      setmode('light');
      document.body.style = 'background: white; color: black';
      showAlert("light mode has been enabled", "success")
    }
    else{
      setmode('dark');
      document.body.style = 'background: #1d1d1e; color: white;';
      showAlert("dark mode has been enabled", "success")
    }
  }
  // const togelblue = ()=>{
  //   if(mode === 'dark'){
  //     setmode('light');
  //     document.body.style = 'background: white; color: black';
  //     showAlert("light mode has been enabled", "success")
  //   }
  //   else{
  //     setmode('dark');
  //     document.body.style = 'background: #074450; color: white;';
  //     showAlert("dark blue mode has been enabled", "success")
  //   }
  // }
  // const togelbluemode = ()=>{
  //   if(mode === 'dark'){
  //     setmode('light');
  //     document.body.style = 'background: white; color: black';
  //     showAlert("light mode hass been enabled", "success")
  //   }
  //   else{
  //     setmode('dark');
  //     document.body.style = 'background: #1c2b3a; color: white;';
  //     showAlert("light blue mode has been enabled", "success")
  //   }
  // }
  // const togellightbluemode = ()=>{
  //   if(mode === 'dark'){
  //     setmode('light');
  //     document.body.style = 'background: white; color: black';
  //     showAlert("light mode hass been enabled", "success")
  //   }
  //   else{
  //     setmode('dark');
  //     document.body.style = 'background: #304c76; color: white;';
  //     showAlert("light blue mode has been enabled", "success")
  //   }
  // }
  return (
    <>
      {/* // <Router> */}
          <Navebar title="TextUtils" mode= {mode} toglemode = {toglemode}/>
          <div className="container my-4">
          <Alert alert = {alert}/>
            {/* <Switch> */}
               {/* <Route exact path="/about"> */}
                 {/* <About toglemode = {toglemode}mode= {mode}/> */}
               {/* </Route> */}
               {/* <Route exact path="/"> */}
                 <TextForm heading="Enter Your Text To analyze" mode= {mode} showAlert= {showAlert}/>
               {/* </Route> */}
            {/* </Switch> */}
          </div>
      {/* </Router> */}
      </>
  );
}
export default App;
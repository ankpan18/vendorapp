import React from "react";
import DisplayVendor from "./components/DisplayVendor";
import { BrowserRouter as Router, Routes, Route,NavLink} from 'react-router-dom';
import CreateVendor from "./components/CreateVendor";
import './App.css';


function App() {
  return (
    <>
    <Router>
    <div style={{
                    display: "flex",
                    background: '#311b92',
                    padding: '12px 0px 12px 5px',
                    fontSize: '20px',
                }}>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/" className="head" style={({ isActive }) => ({ 
                            color: isActive ? '#f9c8ed' : 'white' })}>
                            Home
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/create" className="head" style={({ isActive }) => ({ 
                            color: isActive ? '#f9c8ed' : 'white' }) }>
                            Create
                        </NavLink>
                    </div>
                </div>
      <Routes>
        <Route exact path="/" element={<DisplayVendor/>}/> 
          <Route exact path="/create" element={<CreateVendor/>} />
        
      </Routes>
    </Router>
         
    {/* <b>Bad Situation </b> */}
    {/* <DisplayVendor/> */}
    </>
  );
}

export default App;

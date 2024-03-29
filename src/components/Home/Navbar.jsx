import React from 'react';
import { useState } from 'react';
import Hero from './Hero';
import '../../index.css';
import logo from "../../assets/logo.png"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const [selectedValue, setSelectedValue] = useState('Marketing');
  const [placeholder, setPlaceholder] = useState('Marketing');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    setPlaceholder(newValue); // Update placeholder based on selected value
  };

  function red(){
    navigate("/");
  }

  
  return (
    <>
    <div className="navbar">
      <div className="logo w-96">
        <img src={logo} alt="Company Logo" onClick={red}/>
      </div>
      <div className="spacer"></div>
      <div>Domain:</div>
      <div className="dropdown pl-2 pr-10 " value={selectedValue} onChange={handleChange}>
        <select className='py-2 rounded-lg px-3 bg-white text-black'>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="Development">Development</option>
          <option value="anything">others</option>
        </select>
        
      </div>
      <SignedOut>
        <button className="btn btn-outline hover:bg-slate-700 hover:text-white text-black px-10">
          <SignInButton />
        </button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      
    </div>
     { selectedValue && <Hero value = {selectedValue} placeholder= {placeholder}/>}
    </>
    
  );
}

export default Navbar;

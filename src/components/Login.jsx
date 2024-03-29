import React from 'react'
import "../index.css"
import logo from "../assets/logo.png"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { redirect, useNavigate } from "react-router-dom";



const Login = () => {
    const navigate = useNavigate();

    function redirect(){
        navigate("/Home")
    }
    return (


        <header className="">
            <div style={{ margin: 0, padding: 0 }}>
               <div className="logo pt-5 pl-5">
               <img className="logo" src={logo} alt=""/>
               </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 style={{ fontSize: '4em', color: 'black', background:'#0095A9FF', WebkitBorderRadius:'20px', paddingBlock:"10px", paddingInline:"20px" }}>Query? Don't Worry</h1>
                        {/* <h1 style={{ fontSize: '4em', color: 'black', background:'#0095A9FF', WebkitBorderRadius:'20px', paddingBlock:"10px", paddingInline:"20px" }}></h1> */}
                        <div className="auth py-10">

                            <SignedOut>
                                <button className="btn btn-outline text-white hov">
                                    <SignInButton />
                                </button>
                            </SignedOut>
                            <SignedIn>
                            {/* <UserButton />    */}
                            <button className="btn btn-outline text-white hov" onClick={redirect}>
                                Start
                                </button>                             
                            </SignedIn>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Login
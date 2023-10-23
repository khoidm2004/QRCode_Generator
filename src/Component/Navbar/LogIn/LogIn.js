import React, { useEffect, useState } from "react";
import adb from "./adb.png";
import "./LogIn.css";
import {FaFacebook, FaGoogle} from "react-icons/fa";
import Footer from "../../Footer/Footer";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function LogIn(){
    const navigate = useNavigate();

    const [logIn,setLogIn] = useState(false);

    const [formData,setFormData] = useState({
        username: "",
        password: "",
    });

    const notify = ()=>{
        toast.success('Welcome to QR Code Generator!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
        });
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        notify();
        setFormData({
            username: "",
            password: "",
        });
        setLogIn(true);
    };

    const handleChange=(event)=>{
        const {name,value} = event.target;
        setFormData((prevFormData)=>({
            ...prevFormData,
            [name]: value,
        }))
    };

    useEffect(()=>{
        if(logIn){
            return navigate("/");
        }
    },[logIn,navigate]);

    return(
        <>
            <div className="logIn_container">
                <div className="logIn_home_link">
                    <img className="adb" src={adb} alt="Adb icon"/>
                    <a href="/"><h1>QR Code Generator</h1></a>
                </div>
                <div className="login_form_container">
                    <form onSubmit={handleSubmit}>
                        <div className="login_form_container_header">
                            <h1>Log In</h1>
                        </div>
                        <div className="login_form_container_header">
                            <label><p>Username</p></label>
                        </div>
                        <div>
                            <input type="text" onChange={handleChange} name="username" value={formData.username} required/>
                        </div>
                        <div className="login_form_container_header">
                            <label><p>Password</p></label>
                        </div>
                        <div>
                            <input type="text" onChange={handleChange} name="password" value={formData.password} required/>
                        </div>
                        <div>
                            <button className="login_btn">Log In</button>
                        </div>
                        <div className="logIn_Baseline">
                            <div className="logIn_line"/>
                            <span>OR</span>
                            <div className="logIn_line"/>
                        </div>
                        <div>
                            <button className="logIn_fa_btn"><FaFacebook className="fa_btn_icon"/>Continue with Facebook</button>
                        </div>
                        <div>
                            <button className="logIn_gg_btn"><FaGoogle  className="gg_btn_icon"/>Continue with Google</button>
                        </div>
                        <div>
                            <p>Need an account? <a href="/signUp">Sign up</a> </p>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div> 
        </>
    )
}
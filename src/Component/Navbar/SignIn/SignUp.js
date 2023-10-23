import React, { useEffect, useState } from "react";
import adb from "./adb.png";
import "./SignUp.css";
import {FaFacebook, FaGoogle} from "react-icons/fa";
import Footer from "../../Footer/Footer";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


export default function SignUp(){
    const navigate = useNavigate(); 

    const [signUp, setSignUp] = useState(false);

    const [formData,setFormData] = useState({
        email: "",
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
            email: "",
            password: "",
        });
        setSignUp(true);
    };

    const handleChange=(event)=>{
        const {name,value} = event.target;
        setFormData((prevFormData)=>({
            ...prevFormData,
            [name]: value,
        }))
    };

    useEffect(()=>{
        if(signUp){
            return navigate("/");
        }
    },[signUp,navigate]);

    return(

        <>
            <div className="signUp_container">
                <div className="signUp_home_link">
                    <img className="adb" src={adb} alt="Adb icon"/>
                    <a href="/"><h1>QR Code Generator</h1></a>
                </div>
                <div className="signUp_form_container">
                    <form onSubmit={handleSubmit}>
                        <div className="signUp_form_container_header">
                            <h1>Sign Up</h1>
                        </div>
                        <div className="signUp_form_container_header">
                            <label><p>Email</p></label>
                        </div>
                        <div>
                            <input type="email" onChange={handleChange} name="email" value={formData.email} required/>
                        </div>
                        <div className="signUp_form_container_header">
                            <label><p>Password</p></label>
                        </div>
                        <div>
                            <input type="text" onChange={handleChange} name="password" value={formData.password} required/>
                        </div>
                        <div>
                            <button className="signUp_btn">Sign Up</button>
                        </div>
                        <div className="signUp_Baseline">
                            <div className="signUp_line"/>
                            <span>OR</span>
                            <div className="signUp_line"/>
                        </div>
                        <div>
                            <button className="signUp_fa_btn"><FaFacebook className="signUp_fa_btn_icon"/>Continue with Facebook</button>
                        </div>
                        <div>
                            <button className="signUp_gg_btn"><FaGoogle  className="signUp_gg_btn_icon"/>Continue with Google</button>
                        </div>
                        <div>
                            <p>Already have an account? <a href="/logIn">Log In</a> </p>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        </>
    )
}
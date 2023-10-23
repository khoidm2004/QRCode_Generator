import React from "react";
import QRCode from "react-qr-code";
import { useState, useEffect } from 'react';


export default function QRLink(){
  const [text,setText]=useState("");
  const [qr,setQR] = useState("");

  const getValue =()=>{
    setQR(text)
  }

  const EnterPress=(event)=>{
    if (event.key ==="Enter"){
      getValue()
    }
  }

  useEffect(()=>{
    setQR("Insert your link then scan")
  },[])

  return (
    <div className="container">
      <div className="left_col">
        <textarea className="textarea"
          value={text}
          type='text' 
          placeholder="Enter your link here"
          onChange={(e)=>setText(e.target.value)}
          onKeyDown={EnterPress}
          onFocus={(e) => e.target.classList.add('no-border')}
          onBlur={(e) => e.target.classList.remove('no-border')}
          />
      </div>
      <div className="right_col">
        <QRCode value={qr}/>
        <div className="button_container">
        <button className="button" onClick={getValue}>Generate</button>
        </div>
      </div>
    </div>
  );
}



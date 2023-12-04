import React from "react";
import "./Instruction.css";
import hand_qrcodes from "./hand_qrcodes.png";
import BasicTabs from "../BasicTabs/BasicTabs";

export default function Instruction() {
  return (
    <>
      <div className="Instruction">
        <div className="Instruction_header">
          <p className="Instruction_header_h1">
            I’m new to QR Codes. What should I know?
          </p>
          <p>Here’s a few basics to get you started.</p>
        </div>
        <div className="Instruction_container">
          <div className="image_container">
            <img className="image" src={hand_qrcodes} alt="Hand QR Codes" />
          </div>
          <div className="Instruction_content">
            <BasicTabs />
          </div>
        </div>
      </div>
    </>
  );
}

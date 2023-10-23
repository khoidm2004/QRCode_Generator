import React from "react";
import { Suspense } from "react";
import Loading from "../../Loading/Loading";
import "./HomeQREmail.css";

const Navbar1 = React.lazy(()=>import("../../Navbar/Menu/Navbar"));
const QREmail1 = React.lazy(()=>import("./QR_Email"));
const Instruction1 = React.lazy(()=>import("../../Instruction/Instruction/Instruction"));
const Banner1 = React.lazy(()=>import("../../Instruction/Banner/Banner"));
const Contact1 = React.lazy(()=>import("../../Contact/Contact"));
const Footer1 = React.lazy(()=>import("../../Footer/Footer"));


export default function HomeQREmail(){
    return(
        <>
            <div className="HomeQREmail_container">
                <Suspense fallback={Loading}>
                    <Navbar1/>
                    <QREmail1/>
                    <Instruction1/>
                    <Banner1/>
                    <Contact1/>
                    <Footer1/>
                </Suspense>
            </div>
        </>
    )
}
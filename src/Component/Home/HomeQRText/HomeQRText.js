import React from "react";
import { Suspense } from "react";
import Loading from "../../Loading/Loading";
import "./HomeQRText.css";

const Navbar1 = React.lazy(()=>import("../../Navbar/Menu/Navbar"));
const QRText1 = React.lazy(()=>import("./QR_Text"));
const Instruction1 = React.lazy(()=>import("../../Instruction/Instruction/Instruction"));
const Banner1 = React.lazy(()=>import("../../Instruction/Banner/Banner"));
const Contact1 = React.lazy(()=>import("../../Contact/Contact"));
const Footer1 = React.lazy(()=>import("../../Footer/Footer"));


export default function HomeQRText(){
    return(
        <>
            <div className="HomeQRText_container">
                <Suspense fallback={Loading}>
                    <Navbar1/>
                    <QRText1/>
                    <Instruction1/>
                    <Banner1/>
                    <Contact1/>
                    <Footer1/>
                </Suspense>
            </div>
        </>
    )
}
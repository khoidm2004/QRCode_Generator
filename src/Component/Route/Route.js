import React from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "../Navbar/LogIn/LogIn";
import HomeQRText from "../Home/HomeQRText/HomeQRText";
import HomeQRLink from "../Home/HomeQRLink/HomeQRLink";
import HomeQREmail from "../Home/HomeQREmail/HomeQREmail";
import SignUp from "../Navbar/SignIn/SignUp";
import NotFound from "../NotFound/NotFound";

export default function Route1() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomeQRText />} />
        <Route exact path="/Text" element={<HomeQRText />} />
        <Route exact path="/Link" element={<HomeQRLink />} />
        <Route exact path="/Email" element={<HomeQREmail />} />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/logIn" element={<LogIn />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Profile() {
  const location = useLocation();
  const message = location.state?.message; // Safely access the message
  useEffect(() => {
    if (message) {
      toast.success(message); // Show the toast with the message
    }
  }, [message]);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ paddingTop: "100px" }}>
        <h1 style={{ textAlign: "center" }}>Profile</h1>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>
        <Footer />
      </div>
    </>
  );
}

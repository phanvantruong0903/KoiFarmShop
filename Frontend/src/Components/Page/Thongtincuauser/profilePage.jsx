import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer";

export default function Profilepage() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "50px" }}>
        <DonKyGui />
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx"; // if needed

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <section className="">{children}</section>

      <Footer />
    </>
  );
}

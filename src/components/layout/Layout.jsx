import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <section className="">{children}</section>

      <Footer />
    </>
  );
}

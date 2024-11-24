import React from "react";
import Layout from "../../layout/Layout";
import HeroSection from "../hero_section/HeroSection";
import Herosetion2 from "../hero_section/Herosetion2";
import About from "../AboutUs/About";
import Skills from "../MySkills/Skills";
import Contact_Us from "../contacts_us/Contact_Us";

export default function Home() {
  return (
    <Layout>
      <section>
        <HeroSection />
        <Herosetion2 />
        <About />
        <Skills />

        <Contact_Us />
      </section>
    </Layout>
  );
}

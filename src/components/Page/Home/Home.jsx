import React from "react";
import Layout from "../../layout/Layout";
import HeroSection from "../hero_section/HeroSection";
import Herosetion2 from "../hero_section/Herosetion2";

export default function Home() {
  return (
    <Layout>
      <section>
        <HeroSection />
        <Herosetion2 />
      </section>
    </Layout>
  );
}
import React from "react";
import Layout from "../layout/Layout";
import BMI from "./BMI_Calculate/BMI";

export default function Projects() {
  return (
    <Layout>
      <BMI />
      <section className=" w-10/12 mx-auto my-4 bg-gray-300 rounded-lg  border">
        <h3 className="text-3xl font-semibold text-gray-700 animate-pulse text-center my-4 ">
          More Projects Coming Soon...
        </h3>
      </section>
    </Layout>
  );
}

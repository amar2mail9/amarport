import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Page/Home/Home";
import PageNotFound from "./components/Page/error/PageNotFound";
import SkillsPage from "./components/Page/MySkills/SkillsPage";
import Contact_Us_Page from "./components/Page/contacts_us/Contact_Us_Page";
import About_Page from "./components/Page/AboutUs/About_Page";
import CVPAGE from "./components/Page/CVPage/CVPAGE";
import Projects from "./components/projects/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-skills" element={<SkillsPage />} />
        <Route path="/about-us" element={<About_Page />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/download-cv" element={<CVPAGE />} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact-us" element={<Contact_Us_Page />} />
      </Routes>
    </BrowserRouter>
  );
}

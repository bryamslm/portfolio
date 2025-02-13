"use client";

import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { addVisit } from "../utils/utils";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {

  useEffect(() => {
    const registerVisit = async () => {
      const userAgent = navigator.userAgent;
      const pageUrl = window.location.href;
      const referer = document.referrer || 'Direct';
      const visitData = {
        userAgent,
        pageUrl,
        referer,
        visited_at: new Date()
      };
      
      await addVisit(visitData);
    };

    registerVisit();
  }, []);

  return (
    <main>
      <SpeedInsights />
      <Navbar />
      <Profile />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </main>
  );
}

"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Plica from "../components/Plica";
import Systems from "../components/Systems";
import Experience from "../components/Experience";
import About from "../components/About";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";
import moment from "moment-timezone";
import { addVisit } from "../utils/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  const hasRegisteredVisit = useRef(false);

  useEffect(() => {
    const registerVisit = async () => {
      if (hasRegisteredVisit.current) return;
      hasRegisteredVisit.current = true;
      const userAgent = navigator.userAgent;
      const pageUrl = window.location.href;
      const referer = document.referrer || "Direct";
      const now = new Date();
      const visited_at = moment(now)
        .tz("America/Costa_Rica")
        .format("YYYY-MM-DDTHH:mm:ss");
      await addVisit({ userAgent, pageUrl, referer, visited_at });
    };
    registerVisit();
  }, []);

  return (
    <main>
      <SpeedInsights />
      <Navbar />
      <Hero />
      <Plica />
      <Systems />
      <Experience />
      <About />
      <Footer />
    </main>
  );
}
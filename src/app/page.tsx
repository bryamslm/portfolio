import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
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

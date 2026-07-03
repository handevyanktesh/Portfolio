import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

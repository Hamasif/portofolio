import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import FlickeringBackground from "./components/ui/FlickeringBackground";

function App() {
  return (
    <>

      <FlickeringBackground />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
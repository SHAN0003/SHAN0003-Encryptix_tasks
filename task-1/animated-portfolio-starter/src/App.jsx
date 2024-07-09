import "./app.scss"
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>

    <section id="Services">
      <Parallax type="Services" />
    </section>

    <section>
      <Services />
    </section>

    <section id="Portfolio">
      <Parallax type="Portfolio" />
    </section>

    <Portfolio />

    <section id="Contact">
      <Contact />
    </section>

    <section id="About">
      <About/>
    </section>
  </div>;
};

export default App;
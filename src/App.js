import React from 'react';
import About from './components/about';
import WelcomeHero from './components/welcomeHero';
import Education from './components/education';
import Contact from './components/contact';
import Footer from './components/footer';
import P5Sketch from './components/P5Sketch';
import "./App.css"; // Make sure your CSS file has the correct path

function App() {
  return (
    <div className="App">
      <div className="p5Background">
        <P5Sketch />
      </div>
      <div className="content">
        <WelcomeHero />
        <About />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

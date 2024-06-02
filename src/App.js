import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
   <div>
    <header>
      <Navbar/>
    </header>
    <main>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
    <footer>
    <Footer/>
    </footer>
   </div>
  );
}

export default App;

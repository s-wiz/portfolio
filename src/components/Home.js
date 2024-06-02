import React from 'react';
import Typewriter from 'typewriter-effect';
import './styles/Home.css';
import image from './styles/assests/logo.jpeg';
function Home() {
  return (
    <section id='home'>
      <div className="home-container">
      <div className="leftside">
        <h1>Hey, Samrudh here</h1>
        <h3>
          <Typewriter
            options={{
              strings: [
                'I am a cybersecurity enthusiast',
                'I am a software developer',
                'I am a programmer',
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 50,
            }}
          />
        </h3>
        <p> Hello! I am Samrudh, a first-year bachelor's student with a passion for cybersecurity and aspirations of becoming a software engineer. I have experience in Django and front-end web development. Additionally, I am actively learning Data Structures and Algorithms (DSA). </p>
        <a href="https://www.linkedin.com/in/sam-wiz/">Connect with me</a>
      </div>

      <div className="rightside">
        <img src={image} alt="image"/>
      </div>
    </div>
    </section>
  );
}

export default Home;
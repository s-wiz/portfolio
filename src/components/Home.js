import React from 'react';
import Typewriter from 'typewriter-effect';
import './styles/Home.css';
import image from './styles/assests/logo512.png';
function Home() {
  return (
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
        <p> I am a first-grader at Scaler School of Technology. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nostrum voluptates natus voluptate doloribus expedita perspiciatis fugiat quos sapiente cum, sunt voluptatum rem. Obcaecati rerum quibusdam maiores voluptate vel! Illum. </p>
        <a href="https://www.google.com">Connect with me</a>
      </div>

      <div className="rightside">
        <img src={image} alt="image"/>
      </div>
    </div>
  );
}

export default Home;
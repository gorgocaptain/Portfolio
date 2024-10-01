import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import "./css/Photos.css";
import "./css/Me.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Picfive from "../Images/Picfive.png";
import Cool from "../Images/cool.jpg";
import Guitar from "../Images/guitar.jpg";
import Homeless from "../Images/homeless.jpg";
import Studio from "../Images/studio.jpg";
import Developer from "../Images/developer.jpg";
import Robotics from "../Images/robotics.jpg";

gsap.registerPlugin(ScrollTrigger);

function Me() {
  const [infoContent, setInfoContent] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [descriptionContent, setDescriptionContent] = useState("");
  const [infoVisible, setInfoVisible] = useState(false);

  const handleClick = (content, description, modalImage) => {
    setInfoContent(content);
    setDescriptionContent(description);
    setModalImage(modalImage);
    setInfoVisible(true);
  };

  const handleClose = () => {
    setInfoVisible(false);
  };

  return (
    <>
      <Navbar />
      <div className="aurora-two"></div>
      <div className="aurora"></div>
      <div className="left-container">
        <div className="text-content">
          <h1>Hi, I'm George.</h1>
          <p id="me-about">
          Hey! I’m really glad you made it to my about page—welcome! This is where I get to share the things I’m most passionate about. Whether it’s music, tech, or creative projects, I’m always driven to explore and push myself. Read on to learn more about me!

          </p>
        </div>
        <div>
          <img src={Cool} alt="Picone" className="cool" />
        </div>
      </div>
      <div className="center-container">
        <h1>About me</h1>
      </div>
      <div className="cards">
        <div className="card-wrapper" style={{ backgroundImage: `url(${Homeless})` }} onClick={() => handleClick("AP Student at Martingrove CI", "As an AP student at Martingrove Collegiate Institute, I constantly challenge myself and aim to acheive academic excellence. I'm involved in many extracurricular activities including: my school's robotics team, web team head of the school newspaper, Vice-president of math club, and many more. I am also the president and co-founder of my school's guitar club and the Grade 12 Representitive.", Homeless)}>
          <h5>AP Student</h5>
        </div>
        <div className="card-wrapper" style={{ backgroundImage: `url(${Studio})` }} onClick={() => handleClick("Music Producer", "Music is one of the most important aspects of my life. I first started producing in 2022 and I fell in love with it. From there, I’ve worked with different local Toronto artists and I am constantly working on my skills and creativity. One of the most important events was a demo tape I produced in June 2024. I sent out the beats to various studios in my area and managed to land an internship over the summer. Unfortunately I couldn't go due to personal circumstances, but this experience taught me a lot about networking and the music industry. I hope to one day achieve some major placements working with artists that I look up to. ", Studio)}>
          <h5>Producer</h5>
        </div>
        <div className="card-wrapper" style={{ backgroundImage: `url(${Developer})` }} onClick={() => handleClick("Developer", "I remember the first time I was exposed to coding was from my older brother. He taught me python and he’d give me daily tasks to complete. One time he made me make a RPG battle using the console. It was very fun and this experience ignited a passion for programming. I now know over 5 languages and have worked with React and Unity.", Developer)}>
          <h5>Developer</h5>
        </div>
      </div>
      <div className="cards">
        <div className="card-wrapper" style={{ backgroundImage: `url(${Guitar})` }} onClick={() => handleClick("Guitarist", "Playing guitar is a new passion for me. My older brother gave me his old classical guitar in August 2024 because he upgraded to an acoustic guitar. I’ve been learning a lot of songs that I like such as: Self Control - Frank Ocean, Come as you are - Nirvana and Wish you were here - Pink Floyd. I am always excited to learn new techniques and songs that I can play for my friends, family and myself.", Guitar)}>
          <h5>Guitarist</h5>
        </div>
        <div className="card-wrapper" style={{ backgroundImage: `url(${Robotics})` }} onClick={() => handleClick("Mechanical Head", "Ok I’m not actually an engineer, in the sense that I do not have a degree in it. However, I am the head of mechanical engineering for my school’s robotics team. I have to use scientific principles to solve problems that my team’s robot could encounter. I also teach newer members how to use the machines in our shop and how to design and prototype. Our team participated in the 2024 FRC competition season. We ended up winning two sustainability awards.", Robotics)}>
          <h5>Engineer</h5>
        </div>
        <div className="card-wrapper" style={{ backgroundImage: `url(${Picfive})` }} onClick={() => handleClick("Content for AP Student 3", "Detailed description of AP Student 3")}>
          <h5>Developer</h5>
        </div>
      </div>

      {infoVisible && (
    <div className={`modal-overlay ${infoVisible ? 'show' : ''}`} onClick={handleClose}>
        <div className={`modal-content ${infoVisible ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
          
          <img src={modalImage} className="modal-image" alt="image"/>
          <h2 className="modal-header">{infoContent}</h2>
          <p id="desc">{descriptionContent}</p>
        </div>
    </div>
)}



    </>
  );
}

export default Me;

import React, { useRef, useEffect, useState } from "react";
import { AiFillInstagram, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import "./css/Landing.css";
import Navbar from "./Navbar.jsx";
import Picone from "../Images/Picone.jpg";
import Pictwo from "../Images/Pictwo.jpg";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const piconeContainerRef = useRef(null);
  const pictwoContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const [nuked, setNuked] = useState(false); // Add state to track nuke effect

  const handleMouseMove = (e, containerRef) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y / rect.height - 0.5) * -20;
    const rotateY = (x / rect.width - 0.5) * 20;

    gsap.to(container.querySelector('img'), {
      duration: 0.5,
      rotationX: rotateX,
      rotationY: rotateY
    });
  };

  const handleMouseLeave = (containerRef) => {
    gsap.to(containerRef.current.querySelector('img'), {
      duration: 0.5,
      rotationX: 0,
      rotationY: 0
    });
  };

  useEffect(() => {
    gsap.utils.toArray(".fade-in").forEach((elem) => {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none none", 
        onEnter: () => gsap.to(elem, { opacity: 1, y: 0, duration: 1 }),
        onLeaveBack: () => gsap.to(elem, { opacity: 1, y: 0 }),
      });
    });

    cardsRef.current.forEach((card) => {
      gsap.fromTo(card, { opacity: 0.5, y: 30 }, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none",
        }
      });
    });
  }, []);

  const handleNuke = () => {
    setNuked(true); // Trigger nuke effect by setting state
  };

  return (
    <div className={nuked ? "nuked-site" : ""}> {/* Apply nuked class if triggered */}
      <Navbar />

     
      <div className="first">
        <div className="des-container fade-in">
          <h1 className="main">George Big Money</h1>
          <p id="des">I’m GBM. This is my website. Here you can find a portfolio of my tech projects, photos, and music. I developed these skills during high school and I’m very passionate about them!</p>
        </div>
        <div
          className="picone-container fade-in"
          ref={piconeContainerRef}
          onMouseMove={(e) => handleMouseMove(e, piconeContainerRef)}
          onMouseLeave={() => handleMouseLeave(piconeContainerRef)}
        >
          <img src={Picone} alt="Picone" className="picone" />
        </div>
      </div>
      <button className="nuke-button" onClick={handleNuke}>
        Nuke the Site!
      </button>

      <div className="center-container" id="who-am-i">
        <h1 className="glitch fade-in" data-text="Who am I?">Who am I?</h1>
        <div className="grid-layout">
          <div className="text-content fade-in">
            <p>I’m a passionate producer, crafting unique experiences and music through creative collaboration.</p>
            <p>As a photographer, I capture moments that tell stories beyond words, seeking the raw beauty of life.</p>
            <p>I'm also a developer, coding since grade 7, and I programmed this website myself!</p>
            <p>As a designer, I create impactful visuals, blending aesthetics with user experience.</p>
          </div>
          <div
            className="picone-container fade-in"
            ref={pictwoContainerRef}
            onMouseMove={(e) => handleMouseMove(e, pictwoContainerRef)}
            onMouseLeave={() => handleMouseLeave(pictwoContainerRef)}
          >
            <img src={Pictwo} className="picone" alt="Who am I image" />
          </div>
        </div>

        <h1 className="glitch fade-in" data-text="My Projects:" id="poopy">My Projects:</h1>
        <div className="projects">
          <div className="card-container">
            <a href="#" ref={el => cardsRef.current[0] = el}>
              <div className="card-content fade-in">
                <h2>Time Sip</h2>
                <span>Time Sip is a coaster with a built-in timer that reminds you to drink water at regular intervals, encouraging healthy hydration habits.</span>
              </div>
            </a>
            <a href="#" ref={el => cardsRef.current[1] = el}>
              <div className="card-content fade-in">
                <h2>Draw Bot</h2>
                <span>Draw Bot is an AI-powered drawing assistant that allows you to create sketches effortlessly with your laptop.</span>
              </div>
            </a>
            <a href="https://devpost.com/software/smart-bin-owq4am" target="_blank" ref={el => cardsRef.current[2] = el}>
              <div className="card-content fade-in">
                <h2>Smart Bin</h2>
                <span>Smart Bin uses a custom AI model to detect whether an item is recyclable, making waste disposal smarter and more efficient.</span>
              </div>
            </a>
            <a href="https://devpost.com/software/pineapple-pathways" target="_blank" ref={el => cardsRef.current[3] = el}>
              <div className="card-content fade-in">
                <h2>Pineapple Pathways</h2>
                <span>Pineapple Pathways is a website that helps students navigate university applications and find scholarships, easing the application process.</span>
              </div>
            </a>
            <a href="https://martingrovebeacon.com/" target="blank" ref={el => cardsRef.current[4] = el}>
              <div className="card-content fade-in">
                <h2>MCI Beacon</h2>
                <span>MCI Beacon is a school newspaper website, designed to provide an engaging and modern platform for student journalism.</span>
              </div>
            </a>
            <a href="https://poutineprod.itch.io/slimegamev2" target="_blank" ref={el => cardsRef.current[5] = el}>
              <div className="card-content fade-in">
                <h2>Slime Game</h2>
                <span>Slime Game is a Unity-based game I developed for a school project, combining fun gameplay with learning opportunities.</span>
              </div>
            </a>
            <a href="https://poutineprod.itch.io/chaos-golf" target="_blank" ref={el => cardsRef.current[6] = el}>
              <div className="card-content fade-in">
                <h2>Chaos Golf</h2>
                <span>Chaos Golf is a chaotic mini-golf game built for the 2021.2 Brackeys Game Jam, combining fun and unpredictable gameplay elements.</span>
              </div>
            </a>
            <a href="https://poutineprod.itch.io/escape-the-lab" target="_blank" ref={el => cardsRef.current[7] = el}>
              <div className="card-content fade-in">
                <h2>Escape The Lab</h2>
                <span>Escape The Lab is a platformer game where you build structures to help the green guy escape a dangerous laboratory.</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="center-container">
        <h1 className="glitch fade-in" data-text="Lets get in touch!" id="poopy">Lets get in touch!</h1>
      </div>
      <div className="touch">
        <div className="hor">
          <a href="https://www.instagram.com/george_big_money1" target="_blank" >Send me a DM! <AiOutlineInstagram /></a>
        </div>
        <div className="hor">
          <a>Email me! <AiOutlineMail /></a>
        </div>
      </div>
    </div>
  );
}

export default Landing;

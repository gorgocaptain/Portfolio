import React, { useRef, useEffect, useState } from "react";
import { AiFillInstagram, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

import Navbar from "./Navbar.jsx";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Posts() {
 

  return (
    <>
    <Navbar/>
    <div> Coming Soon!</div>
    </>
  );
}

export default Posts;

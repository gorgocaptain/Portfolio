import React from "react";
import Navbar from "./Navbar";
import "./css/Beats.css"; 
import AudioPlayer from 'react-custom-audio-player';

import MerfImage from "./css/BeatImages/merf.png";
import Merf from "./css/Beats/merf.mp3";

import FirstBeatImage from "./css/BeatImages/rerf.png";
import FirstBeat from "./css/Beats/myfirstbeat.mp3";

import SplerfImage from "./css/BeatImages/splerf.png";
import Splerf from "./css/Beats/Splerf.mp3";

import CashImage from "./css/BeatImages/cash.png";
import Cash from "./css/Beats/cash.mp3";

import CoolTrapBeatImage from "./css/BeatImages/cooltrapbeat.png";
import CoolTrapBeat from "./css/Beats/cooltrapbeat.mp3";

import BigMoneyImage from "./css/BeatImages/bigmoney.png";
import BigMoney from "./css/Beats/bigmoney.mp3";

import CrazyBeatImage from "./css/BeatImages/crazybeat.png";
import CrazyBeat from "./css/Beats/CrazyBeat.mp3";

import BadbunnybeatImage from "./css/BeatImages/badbunnybeat.png";
import BadBunny from "./css/Beats/badbunnytypebeat.mp3";

import Project2Image from "./css/BeatImages/project2.png";
import Project2 from "./css/Beats/Project2.mp3";

import HeartbreakImage from "./css/BeatImages/heartbreak.png";
import Heartbreak from "./css/Beats/heartbreak.mp3";

import HerosBeatImage from "./css/BeatImages/herosandvillains.png";
import HerosBeat from "./css/Beats/herosandvillains.mp3";

import HoodbyairImage from "./css/BeatImages/hoodbyair.png";
import Hoodbyair from "./css/Beats/hoodbyair.mp3";

import DieLitImage from "./css/BeatImages/dielit.png";
import DieLit from "./css/Beats/dielit.mp3";

import MajesticImage from "./css/BeatImages/majestic.png";
import Majestic from "./css/Beats/majestic.mp3";

import Tecca2Image from "./css/BeatImages/liltecca2.png";
import Tecca2 from "./css/Beats/lilteccabeat2.mp3";

import YeatImage from "./css/BeatImages/yeattypebeat.png";
import Yeat from "./css/Beats/yeatbeat.mp3";

import WLRV1Image from "./css/BeatImages/wlrv1typebeat.png";
import WLRV1 from "./css/Beats/wlrv1typebeat.mp3";

import GreenRoomImage from "./css/BeatImages/greenroom.png";
import GreenRoom from "./css/Beats/greenroom.mp3";

import AgressiveImage from "./css/BeatImages/agressive.png";
import Agressive from "./css/Beats/aggresive.mp3";

import Barter6Image from "./css/BeatImages/barter6.png";
import Barter6 from "./css/Beats/youngthugbeat.mp3";

import SampledImage from "./css/BeatImages/sampledbeat.png";
import Sampled from "./css/Beats/sampledbeat.mp3";

import GBMImage from "./css/BeatImages/gbmbeat.png";
import GBM1 from "./css/Beats/GBMbeat.mp3";

import HomixideImage from "./css/BeatImages/homixidegang.png";
import Homixide from "./css/Beats/homixidegangbeat.mp3";

import SZAImage from "./css/BeatImages/sza.png";
import SZA from "./css/Beats/szabeat.mp3";

import SZAImage2 from "./css/BeatImages/sza2.png";
import SZA2 from "./css/Beats/szabeat2.mp3";

import Heartbreak2Image from "./css/BeatImages/heartbreakpt2.png";
import Heartbreak2 from "./css/Beats/heartbreakpt2.mp3";

import BeatImage2 from "./css/BeatImages/beat2.png";
import Beat2 from "./css/Beats/beat2.mp3";

import GBMALBUMIMAGE from "./css/BeatImages/georgebigmoney.png";
import BMB from "./css/Beats/BMB.mp3";
import Hot from "./css/Beats/hot.mp3";
import Filthy from "./css/Beats/Filth.mp3";
import Untitled from "./css/Beats/untitled.mp3";
import Jeresey from "./css/Beats/JeresyTypeBeat.mp3";
import Lime from "./css/Beats/Lime.mp3";
import GBM from "./css/Beats/GBM.mp3";
import Bop from "./css/Beats/Bop.mp3";
import SYORestored from "./css/Beats/syorestored.mp3";
import MrQ from "./css/Beats/MrQ.mp3";
import MoneyTrees from "./css/Beats/moneytrees.mp3";
import Talk from "./css/Beats/Talk.mp3";
import Summertime from "./css/Beats/summertime2.mp3";

import NoWayImage from "./css/BeatImages/nowaycool.png";
import NoWay from "./css/Beats/nowaycool.mp3";

import MrWestImage from "./css/BeatImages/mrwest2.png";
import MrWest from "./css/Beats/west.mp3";

import GhostsImage from "./css/BeatImages/ghosts2.png";
import Ghosts from "./css/Beats/ghosts2.mp3";

import JeevanImage from "./css/BeatImages/jeevan.png";
import Jeevan from "./css/Beats/jeevanbeat.mp3";

import HariImage from "./css/BeatImages/hari.png";
import Hari from "./css/Beats/haribeat.mp3";
function Beats() {
  const beats = [
    { name: "Hari Type Beat", image: HariImage, audio: Hari},  
    { name: "Jeevan Type Beat", image: JeevanImage, audio: Jeevan},       
    { name: "Ghosts", image: GhostsImage, audio: Ghosts},  
    { name: "Mr West", image: MrWestImage, audio: MrWest},       
    { name: "No Way", image: NoWayImage, audio: NoWay },
    { name: "BMB", image: GBMALBUMIMAGE, audio: BMB},  
    { name: "HOT", image: GBMALBUMIMAGE, audio: Hot},       
    { name: "FILTHY", image: GBMALBUMIMAGE, audio: Filthy},  
    { name: "UNTITLED", image: GBMALBUMIMAGE, audio: Untitled},       
    { name: "JERSEY TYPE BEAT", image: GBMALBUMIMAGE, audio: Jeresey },
    { name: "LIME", image: GBMALBUMIMAGE, audio: Lime},  
    { name: "GBM", image: GBMALBUMIMAGE, audio: GBM},       
    { name: "BOP", image: GBMALBUMIMAGE, audio: Bop },
    { name: "SYO RESTORED", image: GBMALBUMIMAGE, audio: SYORestored},  
    { name: "MR Q.", image: GBMALBUMIMAGE, audio: MrQ},       
    { name: "MONEY TREES", image: GBMALBUMIMAGE, audio: MoneyTrees },
    { name: "TALK", image: GBMALBUMIMAGE, audio: Talk},  
    { name: "SUMMERTIME 2", image: GBMALBUMIMAGE, audio: Summertime},       
    { name: "Heartbreak Pt 2", image: Heartbreak2Image, audio: Heartbreak2 },
    { name: "Beat2", image: BeatImage2, audio: Beat2},  
    { name: "SZA Beat 2", image: SZAImage2, audio: SZA2},       
    { name: "SZA Beat 2", image: SZAImage, audio: SZA },
    { name: "Homixide Gang Beat", image: HomixideImage, audio: Homixide},  
    { name: "GBM type beat", image: GBMImage, audio: GBM1},       
    { name: "Sampled Beat", image: SampledImage, audio: Sampled},  
    { name: "Barter 6 Beat", image: Barter6Image, audio: Barter6},       
    { name: "Agressive YB Beat", image: AgressiveImage, audio: Agressive },
    { name: "Green Room type beat", image: GreenRoomImage, audio: GreenRoom},  
    { name: "WLR V1 type beat", image: WLRV1Image, audio: WLRV1},       
    { name: "Yeat type beat", image: YeatImage, audio: Yeat },
    { name: "Lil Tecca Beat 2", image: Tecca2Image, audio: Tecca2},  
    { name: "Majestic Beat", image: MajesticImage, audio: Majestic},       
    { name: "Die Lit Beat", image: DieLitImage, audio: DieLit },
    { name: "Hoodbyair type beat", image: HoodbyairImage, audio: Hoodbyair},  
    { name: "Heros and Villains beat", image: HerosBeatImage, audio: HerosBeat},       
    { name: "Heartbreak", image: HeartbreakImage, audio: Heartbreak },
    { name: "Project 2", image: Project2Image, audio: Project2},  
    { name: "Bad Bunny Beat", image: BadbunnybeatImage, audio: BadBunny},       
    { name: "Crazy Beat", image: CrazyBeatImage, audio: CrazyBeat },
    { name: "Big Money", image: BigMoneyImage, audio: BigMoney },  
    { name: "Cool Trap Beat", image: CoolTrapBeatImage, audio: CoolTrapBeat},       
    { name: "Cash", image: CashImage, audio: Cash },
    { name: "Merf", image: MerfImage, audio: Merf },  
    { name: "Splerf", image: SplerfImage, audio: Splerf},       
    { name: "My First Beat", image: FirstBeatImage, audio: FirstBeat },
  ];

  return (
    <>
      <Navbar />
      <div className="aurora-three"></div>
      <div className="aurora"></div>
     
      <div className="grid-container">
        {beats.map((beat, index) => (
          <div key={index} className="grid-item">
            <div className="beat-card">
              <div className="text-card">
                <img src={beat.image} alt={beat.name} className="beat-image" />
                <div className="beat-info">
                  <h3 className="beat-name">{beat.name}</h3>
                  <div className="audio-container">
                    <audio controls>
                      <source src={beat.audio} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Beats;

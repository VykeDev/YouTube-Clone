import React from "react";
import "./Sidebar.css";

import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sortcut-links">
        <div className="side-link">
          <img src={home} alt="home.png" />
          <p>Home</p>
        </div>
        <div className="side-link">
          <img src={game_icon} alt="game icon" />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={automobiles} alt="automobiles png" />
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src={sports} alt="sports.png" />
          <p>Sports</p>
        </div>
        <div className="side-link">
          <img src={entertainment} alt="entertainment.png" />
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          <img src={tech} alt="tech.png" />
          <p>Tecnology</p>
        </div>
        <div className="side-link">
          <img src={music} alt="music.png" />
          <p>Music</p>
        </div>
        <div className="side-link">
          <img src={blogs} alt="blogs.png" />
          <p>Blogs</p>
        </div>
        <div className="side-link">
          <img src={news} alt="news.png" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="pfp.png" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="pfp.png" />
          <p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="pfp.png" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="pfp.png" />
          <p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="pfp.png" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

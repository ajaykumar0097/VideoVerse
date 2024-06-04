import React from "react";
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
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sortcut-links">
        <div className="side-link">
          <img src={home} className="side-img" alt="" />
          <p>Home</p>
        </div>
        <div className="side-link">
          <img src={game_icon} className="side-img" alt="" />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={automobiles} className="side-img" alt="" />
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src={sports} className="side-img" alt="" />
          <p>Sports</p>
        </div>
        <div className="side-link">
          <img src={entertainment} className="side-img" alt="" />
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          <img src={tech} className="side-img" alt="" />
          <p>Technology</p>
        </div>
        <div className="side-link">
          <img src={music} className="side-img" alt="" />
          <p>Music</p>
        </div>
        <div className="side-link">
          <img src={blogs} className="side-img" alt="" />
          <p>Blogs</p>
        </div>
        <div className="side-link">
          <img src={news} className="side-img" alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="" />
          <p>PewDiePie</p>
        </div>

        <div className="side-link">
          <img src={simon} alt="" />
          <p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" />
          <p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

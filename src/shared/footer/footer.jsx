import React, { useState } from "react";
import "./footer.scss";
import Shareholdes from "../../assets/Shareholders.png";
import sound from "../../assets/homepage/sound.png";
import ReactPlayer from "react-player";
import music from "../../assets/music.mp3";

export const Footer = () => {
  const [isPLaying, isPlaying] = useState(false);

  return (
    <footer id="footer">
      <div className="sound">
        <p>
          <button
            onClick={() => isPlaying(!isPLaying)}
            className={`muted-${!isPLaying}`}
          >
            {" "}
            <img src={sound} alt="sound" />
            sound on
          </button>
        </p>
        {isPLaying && (
          <section>
            <div className="scroll">
              <div>
                <span>\\ Greenbeam Leon </span>
                <span>\\ Last Tense Moment </span>
              </div>
              <div>
                <span>\\ Greenbeam Leon </span>
                <span>\\ Last Tense Moment </span>
              </div>
            </div>
          </section>
        )}
      </div>

      <ReactPlayer
        playing={isPLaying}
        height={50}
        width={0}
        muted={false}
        volume={0.5}
        autoPlay
        loop={true}
        url={music}
      />
      <div className="shareholders">
        <p>
          shareholders
          <img src={Shareholdes} alt="Shareholdes" />
        </p>
      </div>
      {/* <div className="banner">
        <p>Through world-class innovation</p>
      </div> */}
    </footer>
  );
};

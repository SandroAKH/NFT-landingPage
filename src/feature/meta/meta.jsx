import React from "react";
import "./meta.scss";
import { PageHeader } from "../../shared";
import video from "../../assets/meta/meta.mp4";
import metam from "../../assets/meta/metam.mp4";
import gif from "../../assets/meta/meta.gif";


export const Meta = () => {
  return (
    <div id="meta">
      <PageHeader title="Metaverse" />
      <div className="wrapper">
        <video loop autoPlay muted className="big" id="myVideo">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <img src={gif} alt="gif" /> */}
        <video playsInline loop autoPlay muted className="small" id="myVideoSmall">
          <source src={metam} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

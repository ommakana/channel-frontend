import React, { useState, useEffect } from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { fetchAppData, YOUTUBE_API } from "../../api/index";

import "./youtube.scss";
import Loader from "../loader/loader";

function YoutubeComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchAppData(YOUTUBE_API).then((data) => setData(data))
  }, []);

  return (
    <div className="youtube">
      {data ?
        data.map((item, index) => {
          return (
            <div key={index} className="youtube__tile">
              <a href={item.youtube} target="_blank" rel="noreferrer">
                <img src={item.imageUrl} alt={item.name} />
                <h3>{item.name}</h3>
                <YouTubeIcon className="youtube__icon" />
              </a>
            </div>
          );
        }) : <Loader />}
    </div>
  );
}

export default YoutubeComponent;

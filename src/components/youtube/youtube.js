import React, { useState, useEffect } from "react";
import axios from "../../api/index";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "./youtube.scss";

function YoutubeComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/youtube");
      setData(req.data);
    }
    fetchData();
  }, []);

  return (
    <div className="youtube">
      {data &&
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
        })}
    </div>
  );
}

export default YoutubeComponent;

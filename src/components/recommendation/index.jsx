import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import Card from "../card";
const Recommendation = ({ tags }) => {
  const [videos, setVideos] = useState([]);
  console.log("Tags passed to API:", tags);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/tags?tags=${tags}`);
      console.log("Fetched recommended videos:", res.data);

      setVideos(res.data);
    };
    fetchVideos();
  }, [tags]);
  return (
    <div className="recommendation">
      {videos.map((video) => (
        <Card type="sm" key={video._id} video={video} />
      ))}
    </div>
  );
};

export default Recommendation;

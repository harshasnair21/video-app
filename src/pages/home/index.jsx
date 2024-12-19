import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import axios from "axios";
import "./index.css";
const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        console.log("hi");
        console.log("Type:", type);
        console.log("Request URL:", `/videos/${type}`);

        const res = await axios.get(`/videos/${type}`);
        console.log("Response received:", res); // Log the response
        console.log(res.data);
        setVideos(res.data);
      } catch (error) {
        console.error("error:", error.response || error.message);
      }
    };
    fetchVideos();
  }, [type]);
  return (
    <div className="home-container">
      {videos.map((video) =>
        video._id && video.title ? (
          <Card key={video._id} video={video} />
        ) : (
          <p key={video._id}>Invalid video data</p>
        )
      )}
    </div>
  );
};

export default Home;

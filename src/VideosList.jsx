import React, { useEffect, useState } from "react";
import VideoItem from "./VideoItem";
import { getAllVideos } from "./Firestore";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getAllVideos().then((data) => setVideos(data));
  }, []);

  console.log(videos);
  return (
    <>
      <h2>ALL VIDEOS</h2>
      <p>
        Click on one of the titles below to view description and download video.
      </p>

      {videos.length >= 1 ? (
        videos.map((video) => <VideoItem key={video.id} video={video} />)
      ) : (
        <p>Currently no videos available.</p>
      )}
    </>
  );
};

export default VideoList;
